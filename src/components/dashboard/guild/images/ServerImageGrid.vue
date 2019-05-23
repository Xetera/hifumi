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

<style scoped lang="scss">
.image-grid {
  align-items: center;
  display: grid;
  max-height: 100%;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax($image-width, 1fr));
}
</style>
