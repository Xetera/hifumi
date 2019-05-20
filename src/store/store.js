import { AUTH_URL } from "@/config";
import { get } from "@/utils/http";
import { client } from "@/graphql";
import { graphql } from "@/graphql";
import { currentGuilds } from "@/graphql/subscriptions";

export const base = {
  debug: process.env.NODE_ENV !== "production",
  state: {
    isAuthed: Boolean(localStorage.getItem("loggedIn")),
    guilds: [],
    currentGuild: null,
    modal: {}
  },
  mutations: {
    setAuth: (state, status) => {
      state.isAuthed = status;
      if (status) {
        localStorage.setItem("loggedIn", "dab");
      } else {
        localStorage.removeItem("loggedIn");
      }
    },
    setGuilds: (state, guilds) => (state.guilds = guilds),
    setCurrentGuild: (state, guilds) => (state.currentGuild = guilds)
  },
  actions: {
    checkLogin: ctx =>
      get(`${AUTH_URL}/auth`).then(({ authorized }) => {
        ctx.commit("setAuth", authorized);
      }),
    async subscribeGuilds({ commit, state }) {
      const observable = await client.subscribe({
        query: graphql(currentGuilds)
      });

      observable.subscribe(({ data: { guilds } }) => {
        commit("setGuilds", guilds);
        if (!state.currentGuild) {
          commit("setCurrentGuild", 0);
        }
      });
    },
    setCurrentGuild({ commit, dispatch }, current) {
      commit("images/reset");
      commit("setCurrentGuild", current);
      dispatch("images/setWhereGuild");
    }
  }
};
