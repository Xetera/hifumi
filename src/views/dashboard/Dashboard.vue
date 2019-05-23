<template>
  <div class="dashboard">
    <div class="is-hidden-tablet">
      <TheNavbar />
    </div>
    <MenuServerList class="is-hidden-mobile" />
    <Menu class="is-hidden-mobile" />
    <TheDashboardDisplay>
      <router-view />
    </TheDashboardDisplay>
  </div>
</template>

<script>
import Menu from "@/components/dashboard/guild/menu/Menu";
import MenuServerList from "@/components/dashboard/server_list/ServerList";
import TheDashboardDisplay from "@/components/dashboard/TheDashboardDisplay";
import TheNavbar from "@/components/dashboard/TheNavbar";

export default {
  name: "Dashboard",
  components: { TheNavbar, TheDashboardDisplay, MenuServerList, Menu },
  async mounted() {
    await this.$store.dispatch("subscribeGuilds");
  }
};
</script>

<style scoped lang="scss">
.dashboard {
  @include flex-col;
  @include on-tablet {
    flex-direction: row;
  }
  height: 100%;
}
</style>
