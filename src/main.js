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
import { library } from "@fortawesome/fontawesome-svg-core";
/* Other Stuff */
import "./utils/registerServiceWorker";
import { apolloProvider } from "./graphql";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons/faCog";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { sync } from "vuex-router-sync";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";

sync(store, router);

Vue.config.productionTip = false;
Vue.use(Buefy);

Vue.component("fa", FontAwesomeIcon);

library.add(faCog);
library.add(faLock);
library.add(faHome);

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
