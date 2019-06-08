import { addMutation, createModule } from "@/mixins/vuex";

const state = {
  contributors: 0
};

export const guild = createModule({
  state,
  mutations: {
    ...addMutation("setContributors", "contributors")
  }
});
