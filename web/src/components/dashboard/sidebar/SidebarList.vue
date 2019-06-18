<template>
  <div>
    <div>
      <h3 class="sidebar-label">{{ label }}</h3>
    </div>
    <div class="sidebar-menu-items">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarList",
  props: {
    label: String
  }
};
</script>

<style scoped lang="scss">
.sidebar-label {
  margin: 10px;
  text-align: left;
  font-size: 12px;
  font-weight: 300;
  color: $font-light;
}
</style>
