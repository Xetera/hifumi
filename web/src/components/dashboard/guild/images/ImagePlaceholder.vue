<template>
  <div class="placeholder-wrapper">
    <div class="placeholder-image loading-animation"></div>

    <div class="placeholder-image-bottom">
      <div class="placeholder-image-avatar loading-animation"></div>
      <div class="placeholder-image-name loading-animation"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServerImagePlaceholder"
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/loading.scss";
$loader-bottom-height: 60%;
.placeholder-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
}
.placeholder-image {
  width: var(--image-width);
  height: var(--image-height);
  background-color: silver;
}
.placeholder-tags {
  margin: 10px;
  display: flex;
  flex-grow: 1;
}
.placeholder-image-bottom {
  height: 40px;
  padding: 0 10px;
  display: flex;
  align-items: center;
}
.placeholder-image-avatar {
  width: 24px;
  height: $loader-bottom-height;
}
.placeholder-image-name {
  width: 50%;
  margin-left: 10px;
  height: $loader-bottom-height;
}
</style>
