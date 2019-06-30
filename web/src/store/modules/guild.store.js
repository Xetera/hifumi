import { addMutation, createModule } from "@/mixins/vuex";

const state = {
  contributors: []
};

export const guild = createModule({
  state,
  mutations: {
    ...addMutation("setContributors", "contributors")
  }
});
