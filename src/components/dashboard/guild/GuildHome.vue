<template>
  <div>
    <p>{{ guild.name }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ServerHome",
  computed: {
    ...mapState(["guilds", "currentGuild"]),
    guild() {
      return this.guilds[this.currentGuild];
    }
  }
};
</script>

<style scoped></style>
