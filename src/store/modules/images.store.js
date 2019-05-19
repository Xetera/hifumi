import { addAction, addMutation } from "@/mixins/vuex";

export const images = {
  namespaced: true,
  state: {
    images: [],
    limit: 30,
    where: {},
    page: 1,
    total: 1
  },
  mutations: {
    ...addMutation("setImages", "images"),
    ...addMutation("setPage", "page")
  },
  actions: {
    ...addAction("setImages"),
    ...addAction("setPage")
  }
};
