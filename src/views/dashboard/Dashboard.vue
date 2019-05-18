<template>
  <div class="dashboard">
    <DashboardServerList />
    <ServerImageBrowser />
  </div>
</template>

<script>
import DashboardServerList from "@/components/dashboard/DashboardMenu";
import ServerImageBrowser from "@/components/dashboard/images/ServerImageBrowser";

export default {
  name: "Dashboard",
  components: { DashboardServerList, ServerImageBrowser },
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
