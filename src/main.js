import dotenv from "dotenv";
dotenv.config();

/* Vue Related */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import { store } from "./store";
import Buefy from "buefy";

/* CSS */
import "buefy/dist/buefy.css";
import "./assets/css/main.css";

/* Other Stuff */
import "./vue-apollo";
import "./registerServiceWorker";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createProvider } from "./vue-apollo";

Vue.config.productionTip = false;
Vue.component("icon", FontAwesomeIcon);
Vue.use(Buefy);

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
