<template>
  <div class="label">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Label"
};
</script>

<style scoped>
.label {
  font-weight: 300;
  font-size: 16px;
  display: flex;
  align-items: center;
}
</style>
