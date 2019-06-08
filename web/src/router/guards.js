import { store } from "@/store";
import { snackbar } from "../utils/ui";

export const auth = requiresAuth => ({ meta: { requiresAuth } });
export const clearToken = () => localStorage.removeItem("token");

export const withoutDiscordAuth = {
  ...auth(false),
  beforeEnter: async (to, from, next) => {
    const authed = await isAuthed();
    if (authed) {
      return next(true);
    } else {
      return next({ name: from.name });
    }
  }
};

export const isAuthed = () =>
  store.dispatch("checkLogin").then(() => store.state.isAuthed);

export async function discordAuthGuard(to, from, next) {
  const redirect = () => next({ name: from.name || "bot-home" });
  try {
    const authed = await isAuthed();
    if (!authed) {
      clearToken();
      snackbar.requiresAuth();
      redirect();
    }
    next(true);
  } catch (err) {
    redirect();
  }
}

export const withDiscordAuth = {
  ...auth(true),
  beforeEnter: discordAuthGuard
};
