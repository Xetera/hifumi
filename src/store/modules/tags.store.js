import { addAction, addMutation, createModule } from "@/mixins/vuex";

export const tags = createModule({
  state: {
    tags: [],
    tagCount: 0
  },
  mutations: {
    ...addMutation("setTags", "tags"),
    ...addMutation("setTagCount", "tagCount")
  },
  actions: {
    ...addAction("setTags"),
    ...addAction("setTagCount")
  }
});
