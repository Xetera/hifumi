<template>
  <div class="text">
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "ImageTag",
  props: {
    name: String
  }
};
</script>

<style scoped lang="scss">
.text {
  padding: 1px;
  margin: 2px;
  background-color: #fff;
  color: #36393f;
  opacity: 1;
  font-size: 12px;
}
</style>
