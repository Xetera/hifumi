<template>
  <div class="has-text-weight-bold menu-header">
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

<style scoped lang="scss">
.menu-header {
  height: 52px;
  display: flex;
  padding: 0 15px;
  align-items: center;
  letter-spacing: 1px;
  justify-content: flex-start;
  box-shadow: $bottom-shadow;
  background-color: $background-darker;
  z-index: 10;
}
</style>
