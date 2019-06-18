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
import { library } from "@fortawesome/fontawesome-svg-core";
/* Other Stuff */
import "./utils/registerServiceWorker";
import { apolloProvider } from "./graphql";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons/faCog";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { sync } from "vuex-router-sync";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { faCircle } from "@fortawesome/free-regular-svg-icons/faCircle";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons/faCalendarAlt";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { Snackbar } from "buefy/src/components/snackbar";
import Vuetify from "vuetify";

sync(store, router);

Vue.config.productionTip = false;
Vue.use(Snackbar);
Vue.use(Vuetify);

Vue.component("fa", FontAwesomeIcon);

library.add(
  faCog,
  faLock,
  faStar,
  faHome,
  faCircle,
  faCalendarAlt,
  faAngleRight,
  faAngleLeft,
  faEdit
);

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
