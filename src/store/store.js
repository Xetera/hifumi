import { AUTH_URL } from "@/config";
import { get } from "@/utils/http";

export const base = {
  debug: process.env.NODE_ENV !== "production",
  state: {
    isAuthed: Boolean(localStorage.getItem("loggedIn")),
    guilds: [],
    currentGuild: 0,
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
    setGuilds({ commit }, guilds) {
      commit("setGuilds", guilds);
    },
    setCurrentGuild({ commit }, current) {
      commit("images/reset");
      commit("setCurrentGuild", current);
    }
  }
};
