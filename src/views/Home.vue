<template>

  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <b-button label="Login" @click="toLogin"> </b-button>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import BButton from "buefy/src/components/button/Button";
import { DISCORD_OAUTH_URL } from "@/config";

export default {
  name: "home",
  methods: {
    toLogin: () => (window.location.href = DISCORD_OAUTH_URL)
  },
  components: {
    BButton,
    HelloWorld
  },
  async created() {
    return this.$store.dispatch("refreshAuth");
  }
};
</script>
