<template>
  <div class="image-grid">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.image-grid {
  justify-content: center;
  align-content: center;
  align-items: center;
  display: grid;
  max-height: 100%;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fill, var(--image-width));
}
</style>
