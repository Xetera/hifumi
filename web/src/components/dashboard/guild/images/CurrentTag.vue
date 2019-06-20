<template>
  <div class="tag">
    <div class="icon tag-remove-icon" @click="$emit('close', name)">
      <CloseIcon :size="16" class="icon" />
    </div>
    <p class="tag-content">
      {{ name }}
    </p>
  </div>
</template>

<script>
import CloseIcon from "vue-material-design-icons/Close";
export default {
  name: "CurrentTag",
  components: { CloseIcon },
  props: {
    name: String
  }
};
</script>

<style scoped lang="scss">
.tag {
  height: 32px;
  padding: 0 15px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  background: linear-gradient(90deg, #373737 0%, #515050 100%);
  color: white;
  font-size: $tag-size;
}
.tag-content {
  font-weight: 200;
}
.icon {
  color: $icon-color;
  display: flex;
  align-items: center;
}
.tag-remove-icon {
  cursor: pointer;
}
</style>
