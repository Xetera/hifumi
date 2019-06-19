import jwt from "jsonwebtoken";
import { createModule } from "@/mixins/vuex";

const state = {
  username: "",
  discriminator: "",
  id: "",
  avatar: ""
};

export const user = createModule({
  state,
  mutations: {
    setUser(state) {
      const token = localStorage.getItem("token");
      const { user } = jwt.decode(token);
      console.log(user);
      state.username = user.username;
      state.discriminator = user.discriminator;
      state.id = user.id;
      const extension = user.avatar.startsWith("a_") ? ".gif" : ".png";
      state.avatar = `https://cdn.discordapp.com/avatars/${user.id}/${
        user.avatar
      }${extension}`;
    }
  }
});
