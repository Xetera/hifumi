import { Snackbar } from "buefy/dist/components/snackbar";

export const snackbar = {
  serverDown: () =>
    Snackbar.open({
      indefinite: true,
      position: "is-bottom",
      message:
        "We can't connect to the Hifumi server_list, maybe it's down? :(",
      type: "is-danger",
      actionText: "Sigh"
    }),
  requiresAuth: () =>
    Snackbar.open({
      message: "You are not logged in!",
      type: "is-danger",
      position: "is-bottom-left"
    })
};
