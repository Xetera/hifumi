export const toJson = r => r.json();
export const toText = r => r.text();
export const get = (...args) => fetch(...args).then(toJson);
