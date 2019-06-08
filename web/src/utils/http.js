export const toJson = r => r.json();
export const toText = r => r.text();

export const get = (url, opts) => {
  const args = {
    ...opts,
    credentials: "include"
  };
  return fetch(url, args).then(toJson);
};
