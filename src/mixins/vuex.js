export const makeMutation = (name, stateName) => (state, target) =>
  (state[stateName] = target);

export const addMutation = (name, state) => ({
  [name]: makeMutation(name, state)
});

export const makeAction = name => ({ commit }, target) => commit(name, target);

export const addAction = name => ({
  [name]: makeAction(name)
});
