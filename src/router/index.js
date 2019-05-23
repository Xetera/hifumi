import VueRouter from "vue-router";
import Vue from "vue";
import Home from "@/views/Home";
import dashboard from "@/router/dashboard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "bot-home",
    component: Home
  },
  dashboard
];

export default new VueRouter({ routes, mode: "history", base: "/" });
