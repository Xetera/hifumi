import VueRouter from "vue-router";
import Vue from "vue";
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import { withDiscordAuth } from "./guards";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    ...withDiscordAuth,
    path: "/dashboard",
    component: Dashboard
  }
];

export default new VueRouter({ routes, mode: "history", base: "/" });
