<template>
  <div class="sidebar-head">
<!--    <MenuDownIcon :size="20" class="icon sidebar-head-icon" />-->
    <h1 class="sidebar-head-title">
      Hifumi
    </h1>
  </div>
</template>

<script>
import MenuDownIcon from "vue-material-design-icons/MenuDown";
export default {
  name: "SidebarHead",
  components: { MenuDownIcon }
};
</script>

<style scoped lang="scss">
.sidebar-head {
  @include flex-row;
  @include center;
  @include shadowed;
  height: 60px;
}

.sidebar-head-icon {
  margin-left: 10%;
}
.sidebar-head-title {
  font-weight: normal;
  font-size: 20px;
}
</style>
