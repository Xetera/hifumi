export const toJson = r => r.json();
export const toText = r => r.text();

export const get = (url, opts) => {
  const args = {
    ...opts
  };
  return fetch(url, args).then(toJson);
};
