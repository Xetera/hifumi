<template>
  <div>
    <div v-for="guild in guilds" :key="guild.name">
      {{ guild.name }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ServerList",
  computed: mapState(["guilds"])
};
</script>

<style scoped></style>
