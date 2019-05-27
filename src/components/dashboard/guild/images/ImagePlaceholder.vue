<template>
  <div class="placeholder-wrapper">
    <div class="placeholder-image loading-animation"></div>
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
  width: $image-width;
  height: $image-height;
  background-color: silver;
}
.placeholder-tags {
  margin: 10px;
  display: flex;
  flex-grow: 1;
}
</style>
