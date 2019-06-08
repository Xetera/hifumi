export const isProduction = process.env.NODE_ENV === "production";

export const AUTH_URL = process.env.VUE_APP_AUTH_URL;
export const PROXY_URL = "https://proxy.hifumi.io";
export const DISCORD_OAUTH_URL = `${AUTH_URL}/login`;

export const proxy = url => `${PROXY_URL}/150/${url}`;
