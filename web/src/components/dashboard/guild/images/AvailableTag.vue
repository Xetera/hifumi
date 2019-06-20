<template>
  <div class="tag">
    <p class="tag-content">
      {{ name }}
    </p>
    <div class="tag-divider"></div>
    <span class="tag-count">
      {{ count }}
    </span>
  </div>
</template>

<script>
export default {
  name: "AvailableTag",
  props: {
    name: String,
    count: Number
  }
};
</script>

<style scoped lang="scss">
.tag-content {
  font-weight: 200;
  color: white;
  font-size: $tag-size;
  padding: 0 8px !important;
  display: flex;
  flex-direction: row;
}
.tag-count {
  color: white;
  font-size: 14px;
  padding: 0 10px;
}
.tag {
  cursor: pointer;
  height: 32px;
  flex-direction: row;
  border-radius: 999px;
  background: $tag-color;
  padding: 0 5px;
  display: inline-flex;
  align-content: flex-start;
  align-items: center;
  flex-shrink: 1;
}
.tag-divider {
  width: 1px;
  height: 100%;
  background: #525252;
}
</style>
