<template>
  <div class="view-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TheDashboardDisplay"
};
</script>

<style scoped lang="scss">
.view-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 100vh;
}
</style>
