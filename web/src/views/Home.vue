<template>
  <div class="home">
    <a v-if="!$store.getters.isAuthed" :href="loginUrl">Login</a>
    <router-link v-if="$store.getters.isAuthed" to="/dashboard">
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
    console.log(this.$store.getters.isAuthed);
  }
};
</script>
<style>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
