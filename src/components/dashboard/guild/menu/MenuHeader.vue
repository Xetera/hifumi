<template>
  <div>
    <p>{{ guild.name }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MenuHeader",
  computed: mapGetters(["guild"])
};
</script>

<style scoped></style>
