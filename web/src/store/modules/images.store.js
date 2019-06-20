import { addMutation, createModule } from "@/mixins/vuex";
const state = {
  images: [],
  limit: 40,
  where: {},
  offset: 0,
  page: 1,
  total: 1
};

export const images = createModule({
  state,
  mutations: {
    ...addMutation("setImages", "images"),
    ...addMutation("setPage", "page"),
    ...addMutation("setTotal", "total"),
    ...addMutation("setWhere", "where"),
    ...addMutation("setOffset", "offset"),
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
    }
  }
});
