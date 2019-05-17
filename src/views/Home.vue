<template>
  <div class="home">
    <b-button v-if="!$store.state.isAuthed" label="Login" @click="toLogin">
    </b-button>
    <router-link v-if="$store.state.isAuthed" to="/dashboard"
      ><a>To Dashboard</a></router-link
    >
  </div>
</template>

<script>
import BButton from "buefy/src/components/button/Button";
import { DISCORD_OAUTH_URL } from "@/config";

export default {
  name: "home",
  methods: {
    toLogin: () => (window.location.href = DISCORD_OAUTH_URL)
  },
  components: {
    BButton
  }
};
</script>
