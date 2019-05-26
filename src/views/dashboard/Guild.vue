<template>
  <div class="dashboard">
    <Menu class="is-hidden-mobile" />
    <router-view class="fullwidth"></router-view>
  </div>
</template>

<script>
import Menu from "@/components/dashboard/guild/menu/Menu";

export default {
  name: "Guild",
  components: { Menu }
};
</script>

<style scoped lang="scss">
.fullwidth {
  width: 100%;
}
.dashboard {
  display: flex;
  justify-content: space-between;
  @include on-tablet {
    flex-direction: row;
  }
  width: 100%;
  height: 100%;
}
</style>
