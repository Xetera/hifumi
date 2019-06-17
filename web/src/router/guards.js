import { snackbar } from "../utils/ui";

export const auth = requiresAuth => ({ meta: { requiresAuth } });
export const clearToken = () => localStorage.removeItem("token");

export const kickToFrontPage = (destination, next) => {
  clearToken();
  snackbar.requiresAuth();
  next(destination || { name: "bot-home" });
};

export async function discordAuthGuard(to, from, next) {
  try {
    const hasSavedToken = localStorage.getItem("token");
    const { token } = to.query;
    if (token) {
      localStorage.setItem("token", token);
    }
    /**
     * If we have a token query param or we have
     * a previously we just assume that we're authenticated
     *
     * The token param is removed on each successful navigation
     * to the dashboard automatically
     */

    if (!hasSavedToken && !token) {
      return kickToFrontPage(from, next);
    }
    return next(true);
  } catch (err) {
    console.error(err);
    return kickToFrontPage(from, next);
  }
}

export const withDiscordAuth = {
  ...auth(true),
  beforeEnter: discordAuthGuard
};
