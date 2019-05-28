<template>
  <div>
    <p>{{ guild.name }}</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "GuildHome",
  computed: {
    ...mapState(["guilds", "currentGuild"]),
    ...mapGetters(["guild"])
  }
};
</script>

<style scoped></style>
