import Vue from "vue";
import Vuex from "vuex";
import { AUTH_URL } from "./config";
import { get } from "./utils/http";

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
    checkLogin: async () => {
      const { authorized } = await get(`${AUTH_URL}/auth`);
      console.log(authorized);
    }
  }
});
