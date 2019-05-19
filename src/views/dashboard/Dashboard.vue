<template>
  <div class="outside-wrapper">
    <TheNavbar />
    <div class="dashboard">
      <DashboardServerList />
      <ServerImageBrowser />
    </div>
  </div>
</template>

<script>
import DashboardServerList from "@/components/dashboard/menu/Menu";
import ServerImageBrowser from "@/components/dashboard/images/ServerImageBrowser";
import TheNavbar from "@/components/dashboard/TheNavbar";

export default {
  name: "Dashboard",
  components: { DashboardServerList, ServerImageBrowser, TheNavbar },
  async created() {
    console.log("dashboard mounted");

    await this.$store.dispatch("subscribeGuilds");
    console.log(this.$store.state.guilds);
  }
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: row;
  height: 100%;
}
</style>
