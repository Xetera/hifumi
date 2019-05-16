<template>
  <div class="home">
    <b-button label="Login" @click="toLogin"> </b-button>
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
