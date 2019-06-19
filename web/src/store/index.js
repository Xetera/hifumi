import Vue from "vue";
import Vuex from "vuex";
import { base } from "./store";
import { settings } from "./modules/settings.store";
import { images } from "./modules/images.store";
import { tags } from "./modules/tags.store";
import { modal } from "./modules/modal.store";
import { user } from "./modules/user.store";
import { guild } from "@/store/modules/guild.store";

Vue.use(Vuex);

export const store = new Vuex.Store({
  debug: process.env.NODE_ENV !== "production",
  ...base,
  modules: {
    guild,
    settings,
    user,
    images,
    tags,
    modal
  }
});
