import { addMutation, createModule } from "@/mixins/vuex";
const state = {
  images: [],
  limit: 30,
  where: {},
  page: 1,
  total: 1
};

export const images = createModule({
  state,
  mutations: {
    ...addMutation("setImages", "images"),
    ...addMutation("setPage", "page"),
    ...addMutation("setWhere", "where"),
    // eslint-disable-next-line
    reset: ctx => (ctx = state)
  },
  actions: {
    setWhereGuild({ commit, rootState }) {
      const currentGuild = rootState.guilds[rootState.currentGuild];
      console.log(currentGuild);
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
    }
  }
});
