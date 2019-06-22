<template>
  <div class="toolbar">
    <router-link
      :to="button.to"
      v-for="button in buttons"
      :key="button.name"
      class="toolbar-button-wrapper"
    >
      <ToolbarButton v-bind="button" />
    </router-link>
  </div>
</template>

<script>
import ToolbarButton from "./ToolbarButton";
export default {
  name: "Toolbar",
  components: { ToolbarButton },
  props: {
    buttons: {
      type: Array
    }
  }
};
</script>

<style scoped lang="scss">
.toolbar-button-wrapper {
  height: 100%;
}
.toolbar {
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
