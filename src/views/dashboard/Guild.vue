<template>
  <div class="dashboard">
    <Menu class="is-hidden-mobile menu-transition" />
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
.menu-transition {
  animation: slide-down 0.3s ease-in-out;
}
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
@keyframes slide-down {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}
</style>
