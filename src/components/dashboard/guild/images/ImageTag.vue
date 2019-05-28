<template>
  <span class="text">
    {{ name }}
  </span>
</template>

<script>
export default {
  name: "ImageTag",
  props: {
    name: String,
    color: {
      type: String,
      optional: true
    }
  }
};
</script>

<style scoped lang="scss">
.text {
  transition: 1s ease-in-out;
  padding: 3px;
  margin: 2px;
  background-color: rgba($background-darker, 0.7);
  color: #dcdcdc;
  opacity: 1;
  font-size: 12px;
}
</style>
