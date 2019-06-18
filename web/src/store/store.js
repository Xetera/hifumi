import { AUTH_URL } from "@/config";
import { get } from "@/utils/http";
import { client } from "@/graphql";
import { graphql } from "@/graphql";
import { currentGuilds } from "@/graphql/subscriptions";
import { addMutation } from "@/mixins/vuex";
import { kickToFrontPage } from "../router/guards";
import router from "../router";
import { guild } from "./modules/guild.store";

// const defaultGuild = {
//   name: "Home",
//   guild_id: "414334929002823680",
//   icon:
// };

export const base = {
  debug: process.env.NODE_ENV !== "production",
  state: {
    user: {},
    guilds: {},
    currentGuild: null,
    modal: {},
    contributors: 0,
    menuOpen: false
  },
  getters: {
    isAuthed() {
      return Boolean(localStorage.getItem("token"));
    },
    guild(state) {
      const guildId = state.route.params.guild_id;
      return state.guilds[guildId];
    },
    guildArray(state) {
      return Object.values(state.guilds);
    }
  },
  mutations: {
    ...addMutation("setContributors", "contributors"),
    ...addMutation("setMenuOpen", "menuOpen"),
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
          kickToFrontPage({ name: this.route.from.name }, router.push);
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
    },
    flipMenu({ commit, state }) {
      return commit("setMenuOpen", !state.menuOpen);
    }
  }
};
