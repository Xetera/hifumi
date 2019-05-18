import Vue from "vue";
import Vuex from "vuex";
import { AUTH_URL } from "@/config";
import { get } from "@/utils/http";
import { client } from "@/graphql";
import { currentGuilds } from "@/graphql/subscriptions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  debug: process.env.NODE_ENV !== "production",
  state: {
    isAuthed: Boolean(localStorage.getItem("loggedIn")),
    guilds: []
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
    setGuilds: (state, guilds) => (state.guilds = guilds)
  },
  actions: {
    checkLogin: ctx =>
      get(`${AUTH_URL}/auth`).then(({ authorized }) => {
        ctx.commit("setAuth", authorized);
      }),
    subscribeGuilds: async ctx => {
      const e = await client.subscribe({ query: currentGuilds });
      e.subscribe(({ data }) => ctx.commit("setGuilds", data.guilds));
    }
  }
});
