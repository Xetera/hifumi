import { snackbar } from "../utils/ui";
import store from "@/store";

export const auth = requiresAuth => ({ meta: { requiresAuth } });
export const clearToken = () => localStorage.removeItem("token");

export const kickToFrontPage = (destination, next) => {
  clearToken();
  snackbar.requiresAuth();
  next(destination || { name: "bot-home" });
};

export const kickToDashboardHome = (message, next) => {
  snackbar.requiresAuth(message);
  next({ name: "dashboard-home" });
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
    const notLoggedIn = !hasSavedToken && !token;

    if (notLoggedIn) {
      console.log("user not logged in");
      return kickToFrontPage(from, next);
    }

    return next(true);
  } catch (err) {
    console.error(err);
    next(true);
    // return kickToFrontPage(from, next);
  }
}

export const withDiscordAuth = {
  ...auth(true),
  beforeEnter: discordAuthGuard
};
