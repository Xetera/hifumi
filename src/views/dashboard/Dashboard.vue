<template>
  <div>
    <div>Dashboard-sama</div>
    <ServerList />
  </div>
</template>

<script>
import ServerList from "../../components/dashboard/ServerList";

export default {
  name: "Dashboard",
  components: { ServerList },
  async created() {
    console.log("dashboard mounted");

    await this.$store.dispatch("subscribeGuilds");
    console.log(this.$store.state.guilds);
  }
};
</script>

<style scoped></style>
