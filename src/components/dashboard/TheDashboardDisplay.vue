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

<style scoped>
.view-wrapper {
  padding: 5px;
  width: 100%;
  max-height: 100vh;
}
</style>
