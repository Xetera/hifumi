<template>
  <div class="view-wrapper">
    <VueCustomScrollbar style="" class="view">
      <slot></slot>
    </VueCustomScrollbar>
  </div>
</template>

<script>
import VueCustomScrollbar from "vue-custom-scrollbar/src/vue-scrollbar";
export default {
  name: "TheDashboardDisplay",
  components: { VueCustomScrollbar }
};
</script>

<style scoped lang="scss">
.view {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.view-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}
</style>
