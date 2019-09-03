<template>
  <div class="label">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "Label"
};
</script>

<style scoped lang="scss">
.label {
  margin-bottom: 8px !important;
  color: $font-light;
  font-weight: 300;
  font-size: 16px;
}
</style>
