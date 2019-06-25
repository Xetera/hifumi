<template>
  <div>
    <div class="home-wrapper">
      <h1 class="title">Hifumi Bot</h1>
      <h2 class="subtitle">Work in progress</h2>
      <div>
        <button class="button is-secondary is-outlined">
          <a v-if="!isAuthed" :href="loginUrl">Login</a>
          <router-link v-if="isAuthed" :to="{ name: 'home' }">
            <a>To Dashboard</a>
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { DISCORD_OAUTH_URL } from "@/config";

export default {
  name: "WelcomeScreen",
  computed: mapGetters(["isAuthed"]),
  data() {
    return {
      loginUrl: DISCORD_OAUTH_URL
    };
  }
};
</script>

<style scoped lang="scss">
.home-wrapper {
  @include flex-col;
  @include center;
  height: 100%;
}
</style>
