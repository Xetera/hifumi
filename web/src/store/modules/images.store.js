import { addMutation, createModule } from "@/mixins/vuex";
const state = {
  images: [],
  limit: 40,
  offset: 0,
  page: 1,
  total: 1,
  where: {},
  currentTags: [],
  tags: []
};

export const images = createModule({
  state,
  mutations: {
    ...addMutation("setImages", "images"),
    ...addMutation("setPage", "page"),
    ...addMutation("setTotal", "total"),
    ...addMutation("setWhere", "where"),
    ...addMutation("setOffset", "offset"),
    ...addMutation("setTags", "tags"),
    ...addMutation("setTagCount", "tagCount"),
    updateWhere(state) {
      state.where = {
        ...state.where,
        _and: state.currentTags.map(tag => {
          return {
            image_tags: {
              name: {
                _eq: tag.name
              }
            }
          };
        })
      };
    },
    addCurrentTag(state, tag) {
      state.currentTags.push(tag);
    },
    removeCurrentTag(state, tag) {
      const found = state.currentTags.findIndex(item => item.name === tag.name);
      if (found === -1) {
        return console.error(
          "Tried to remove a current tag that doesn't exist",
          tag
        );
      }
      state.currentTags.splice(found, 1);
    },
    removeTag(state, tag) {
      const found = state.tags.findIndex(item => item.name === tag.name);
      if (found === -1) {
        return console.error("Tried to remove a tag that doesn't exist", tag);
      }
      state.tags.splice(found, 1);
    },
    addTag(state, tag) {
      state.tags.push(tag);
    },
    reset: ctx => Object.assign(ctx, state)
  },
  actions: {
    setWhereGuild({ commit, rootState }, id) {
      const currentGuild = rootState.guilds[String(id)];
      let where;
      if (currentGuild) {
        where = {
          ...state.where,
          guild_id: {
            _eq: currentGuild.guild_id
          }
        };
      } else {
        where = state.where;
      }
      return commit("setWhere", where);
    },
    setPage({ commit, state }, page) {
      commit("setPage", page);
      return commit("setOffset", (page - 1) * state.limit);
    },
    setTags({ commit }, tags) {
      commit("setTags", tags);
    },
    addSelected({ commit, state }, tag) {
      const obj = state.tags.find(item => item.name === tag);
      commit("removeTag", obj);
      commit("addCurrentTag", obj);
      commit("updateWhere");
    },
    removeSelected({ commit, state }, tag) {
      const obj = state.currentTags.find(item => item.name === tag);
      commit("addTag", obj);
      commit("removeCurrentTag", obj);
      commit("updateWhere");
    }
  }
});
