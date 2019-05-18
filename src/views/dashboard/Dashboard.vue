<template>
  <div>
    <div>Dashboard-sama</div>
    <DashboardServerList />
    <ServerImageBrowser />
  </div>
</template>

<script>
import DashboardServerList from "@/components/dashboard/DashboardServerList";
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

<style scoped></style>
