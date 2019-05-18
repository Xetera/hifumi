import { store } from "@/store/store";
import { snackbar } from "../utils/ui";

export const auth = requiresAuth => ({ meta: { requiresAuth } });

export const withoutDiscordAuth = {
  ...auth(false),
  beforeEnter: (to, from, next) => next(!store.state.isAuthed)
};

export const withDiscordAuth = {
  ...auth(true),
  async beforeEnter(to, from, next) {
    await store.dispatch("checkLogin");
    const { isAuthed } = store.state;
    if (!isAuthed) {
      snackbar.requiresAuth();
    }
    next(isAuthed);
  }
};
