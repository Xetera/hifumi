import { AUTH_URL } from "@/config";
import { get } from "@/utils/http";
import { client } from "@/graphql";
import { graphql } from "@/graphql";
import { currentGuilds } from "@/graphql/subscriptions";
import { addMutation } from "@/mixins/vuex";

export const base = {
  debug: process.env.NODE_ENV !== "production",
  state: {
    isAuthed: Boolean(localStorage.getItem("token")),
    guilds: {},
    currentGuild: null,
    modal: {},
    contributors: 0
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
    ...addMutation("setContributors", "contributors"),
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
    }
  },
  actions: {
    checkLogin: ({ commit }) => {
      return get(`${AUTH_URL}/auth`)
        .then(({ authorized }) => {
          console.log("successfuly logged in ");
          commit("setAuth", authorized);
        })
        .catch(() => {
          commit("setAuth", false);
          localStorage.removeItem("token");
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
