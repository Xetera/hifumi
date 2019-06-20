import dotenv from "dotenv";
dotenv.config();
/* Vue Related */
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router/index";
import { store } from "./store";
/* CSS */
import "./assets/scss/bulma.scss";
import "./assets/scss/main.scss";
/* Other Stuff */
import "./utils/registerServiceWorker";
import { apolloProvider } from "./graphql";
import { sync } from "vuex-router-sync";
import { Snackbar } from "buefy/src/components/snackbar";

sync(store, router);

Vue.config.productionTip = false;
Vue.use(Snackbar);

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
