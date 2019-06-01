<template>
  <div class="home">
    <a :href="loginUrl">Login</a>
    <router-link v-if="$store.state.isAuthed" to="/dashboard">
      <a>To Dashboard</a>
    </router-link>
  </div>
</template>

<script>
import { DISCORD_OAUTH_URL } from "@/config";

export default {
  name: "home",
  data() {
    return {
      loginUrl: DISCORD_OAUTH_URL
    };
  },
  mounted() {
    console.log(DISCORD_OAUTH_URL);
  }
};
</script>
