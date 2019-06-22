<template>
  <div class="toolbar-button">
    <p>{{ name }}</p>
    <div class="toolbar-indicator"></div>
  </div>
</template>

<script>
export default {
  name: "ToolbarButton",
  props: {
    name: String,
    active: Boolean
  },
  computed: {
    toolbarClass() {
      return this.active ? "toolbar-active" : "toolbar-inactive";
    }
  }
};
</script>

<style scoped lang="scss">
.toolbar-button {
  color: white;
  padding: 0 30px;
  position: relative;
  display: flex;
  @include center;
  flex-direction: column;
  height: 100%;
}
.toolbar-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  width: 100%;
  background: $toolbar-inactive-color;
}
.router-link-exact-active .toolbar-indicator {
  background: $toolbar-active-color;
}
</style>
