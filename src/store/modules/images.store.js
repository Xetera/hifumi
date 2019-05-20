import { addMutation, createModule } from "@/mixins/vuex";
const state = {
  images: [],
  limit: 30,
  page: 1,
  total: 1
};

export const images = createModule({
  state,
  getters: {
    where: state => {
      const currentGuild = state.guilds[state.currentGuild];
      if (!currentGuild) {
        return {};
      }
      return {
        guild_id: {
          _eq: state.guilds[state.currentGuild].id
        }
      };
    }
  },
  mutations: {
    ...addMutation("setImages", "images"),
    ...addMutation("setPage", "page"),
    reset: state => (this.state = state)
  }
});
