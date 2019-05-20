<template>
  <div class="dashboard">
    <MenuServerList />
    <Menu />
    <TheDashboardDisplay>
      <router-view />
    </TheDashboardDisplay>
  </div>
</template>

<script>
import Menu from "@/components/dashboard/menu/Menu";
import MenuServerList from "@/components/dashboard/menu/servers/ServerList";
import TheDashboardDisplay from "@/components/dashboard/TheDashboardDisplay";

export default {
  name: "Dashboard",
  components: { TheDashboardDisplay, MenuServerList, Menu }
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: row;
  height: 100%;
}
</style>
