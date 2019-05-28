import Vue from "vue";
import Vuex from "vuex";
import { base } from "./store";
import { settings } from "./modules/settings.store";
import { images } from "./modules/images.store";
import { tags } from "./modules/tags.store";
import { modal } from "./modules/modal.store";

Vue.use(Vuex);

export const store = new Vuex.Store({
  debug: process.env.NODE_ENV !== "production",
  ...base,
  modules: {
    settings,
    images,
    tags,
    modal
  }
});
