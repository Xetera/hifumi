import Vue from "vue";
import Vuex from "vuex";
import { AUTH_URL } from "./config";
import { toJson, toText } from "./utils/http";

Vue.use(Vuex);

export const store = new Vuex.Store({
  debug: process.env.NODE_ENV !== "production",
  state: {
    isAuthed: false
  },
  mutations: {
    setAuth: ({ state, status }) => {
      state.isAuthed = status;
    }
  },
  actions: {
    login: async ctx => {
      const res = await fetch(`${AUTH_URL}/auth`).then(toJson);
      console.log(res);
      ctx.commit("setAuth", { status: true });
    },
    refreshAuth: async ctx => {
      const res = await fetch(`${AUTH_URL}/auth`).then(toText);
      console.log(res);
    }
  }
});
