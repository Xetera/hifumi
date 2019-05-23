<template>
  <div class="view-wrapper">
    <div class="small-width">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheDashboardDisplay"
};
</script>

<style scoped lang="scss">
.small-width {
  width: 80%;
  @media (max-width: 1024px) {
    width: 100%;
  }
}
.view-wrapper {
  display: flex;
  justify-content: center;
  padding: 5px;
  width: 100%;
  max-height: 100vh;
}
</style>
