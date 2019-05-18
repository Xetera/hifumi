<template>
  <div class="image-grid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ServerImageGrid"
};
</script>

<style scoped>
.image-grid {
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</style>
