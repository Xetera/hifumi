import Vue from "vue/types";
import Vuex from "vuex/types";
import { AUTH_URL } from "../config";
import { get } from "../utils/http";
import { client } from "../vue-apollo";
import { currentGuilds } from "../graphql/subscriptions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  debug: process.env.NODE_ENV !== "production",
  state: {
    isAuthed: Boolean(localStorage.getItem("loggedIn"))
  },
  mutations: {
    setAuth: (state, status) => {
      state.isAuthed = status;
      if (status) {
        localStorage.setItem("loggedIn", "dab");
      } else {
        localStorage.removeItem("loggedIn");
      }
    }
  },
  actions: {
    checkLogin: ctx =>
      get(`${AUTH_URL}/auth`).then(({ authorized }) => {
        ctx.commit("setAuth", authorized);
      }),
    subscribeGuilds: async () => {
      const e = await client.subscribe({ query: currentGuilds });
      console.log(e);
    }
  }
});
