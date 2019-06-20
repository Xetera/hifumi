import { addAction, addMutation, createModule } from "@/mixins/vuex";

export const tags = createModule({
  state: {
    selected: [],
    tags: [],
    tagCount: 0
  },
  mutations: {
    ...addMutation("setTags", "tags"),
    ...addMutation("setTagCount", "tagCount"),
    addSelected(state, tag) {
      state.selected.push(tag);
    },
    removeTag(state, tag) {
      const found = state.tags.findIndex(item => item === tag);
      if (found === -1) {
        return console.error("Tried to remove a tag that doesn't exist", tag);
      }
      state.tags.splice(found, 1);
    },
  },
  actions: {
    setTags({ commit }, tags) {
      commit("setSelected", []);
      commit("setTags", tags);
    },
    addSelected({ commit, state }, tag) {
      const obj = state.tags.find(item => item === tag);
      commit("removeTag", tag);
      commit("addSelected", tag);
    },
    ...addAction("setTagCount")
  }
});
