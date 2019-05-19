import dotenv from "dotenv";
dotenv.config();

/* Vue Related */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import { store } from "./store";
import Buefy from "buefy";

/* CSS */
import "./assets/scss/bulma.scss";
import "./assets/scss/main.scss";

/* Other Stuff */
import "./utils/registerServiceWorker";
import { apolloProvider } from "./graphql";

Vue.config.productionTip = false;
Vue.use(Buefy);

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
