<template>
  <VueCustomScrollbar class="view-wrapper">
    <div class="view-wrapper">
      <slot></slot>
    </div>
  </VueCustomScrollbar>
</template>

<script>
import VueCustomScrollbar from "vue-custom-scrollbar/src/vue-scrollbar";
export default {
  name: "TheDashboardDisplay",
  components: { VueCustomScrollbar }
};
</script>

<style scoped lang="scss">
.view-wrapper {
  display: flex;
  overflow-y: auto;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}
</style>
