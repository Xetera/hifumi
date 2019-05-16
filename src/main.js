import dotenv from "dotenv";
dotenv.config();
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import { store } from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "./registerServiceWorker";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;
Vue.component("icon", FontAwesomeIcon);
Vue.use(Buefy);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
