import { AUTH_URL } from "@/config";
import { get } from "@/utils/http";
import { client } from "@/graphql";
import { graphql } from "@/graphql";
import { currentGuilds } from "@/graphql/subscriptions";

export const base = {
  debug: process.env.NODE_ENV !== "production",
  state: {
    isAuthed: Boolean(localStorage.getItem("loggedIn")),
    guilds: {},
    currentGuild: null,
    modal: {}
  },
  getters: {
    guild(state) {
      return state.guilds[state.route.params.guild_id];
    },
    guildArray(state) {
      return Object.values(state.guilds);
    }
  },
  mutations: {
    setAuth: (state, status) => {
      state.isAuthed = status;
    },
    setGuilds: (state, guilds) => {
      state.guilds = guilds.reduce(
        (all, guild) => ({
          ...all,
          [guild.guild_id]: guild
        }),
        {}
      );
    },
    setCurrentGuild: (state, guilds) => (state.currentGuild = guilds)
  },
  actions: {
    checkLogin: ctx => {
      const token = localStorage.getItem("token");
      if (!token) {
        return ctx.commit("setAuth", false);
      }
      return get(`${AUTH_URL}/auth`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(({ authorized }) => {
          ctx.commit("setAuth", authorized);
        })
        .catch(() => {
          ctx.commit("setAuth", false);
        });
    },
    async subscribeGuilds({ commit }) {
      return new Promise(async res => {
        const observable = await client.subscribe({
          query: graphql(currentGuilds)
        });

        observable.subscribe(({ data: { guilds } }) => {
          commit("setGuilds", guilds);
          res();
        });
      });
    }
  }
};
