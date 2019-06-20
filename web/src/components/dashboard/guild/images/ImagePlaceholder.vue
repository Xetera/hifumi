<template>
  <div class="placeholder-wrapper">
    <div class="placeholder-image"></div>
  </div>
</template>

<script>
export default {
  name: "ServerImagePlaceholder"
};
</script>

<style scoped lang="scss">
.placeholder-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
}
.placeholder-image {
  width: var(--image-width);
  background-color: silver;
}
.placeholder-tags {
  margin: 10px;
  display: flex;
  flex-grow: 1;
}
</style>
