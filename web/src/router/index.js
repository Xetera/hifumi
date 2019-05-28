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
  {
    path: "/stats",
    beforeEnter() {
      window.location =
        "https://p.datadoghq.com/sb/71d9e3d68-233c63b5d43908deb0df73c63059cdb2";
    }
  },
  dashboard
];

export default new VueRouter({ routes, mode: "history", base: "/" });
