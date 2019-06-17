export const deleteToken = router => {
  const { token, ...rest } = router.currentRoute.query;
  router.push({
    query: rest
  });
};
