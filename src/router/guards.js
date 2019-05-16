import { store } from "@/store";
import { Snackbar } from "@/global";

export const auth = requiresAuth => ({ meta: { requiresAuth } });

export const withoutDiscordAuth = {
  ...auth(false),
  beforeEnter: (to, from, next) => next(!store.state.isAuthed)
};

export const withDiscordAuth = {
  ...auth(true),
  beforeEnter(to, from, next) {
    const { isAuthed } = store.state;
    if (!isAuthed) {
      Snackbar.open({
        message: "You are not logged in!",
        type: "is-danger",
        position: "is-bottom-left"
      });
    }
    next(isAuthed);
  }
};
