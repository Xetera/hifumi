<template>
  <div class="sidebar-head">
    <!--    <MenuDownIcon :size="20" class="icon sidebar-head-icon" />-->
    <div class="sidebar-head-title-wrapper">
      <h1 class="sidebar-head-title">
        Hifumi
      </h1>
      <b-tag type="is-primary" style="margin-left: 10px;">Alpha v0.1.2</b-tag>
    </div>
  </div>
</template>

<script>
import BTag from "buefy/src/components/tag/Tag";
export default {
  name: "SidebarHead",
  components: { BTag }
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
.sidebar-head-title-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.sidebar-head-title {
  color: white;
  font-weight: normal;
  font-size: 20px;
}
</style>
