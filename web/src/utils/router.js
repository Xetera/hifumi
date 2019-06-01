export const removeQuery = (route, ...queries) => {
  // eslint-disable-next-line no-unused-vars
  const query = { ...route.query };
  for (const q of queries) {
    delete query[q];
  }
  route.replace({ query });
};
