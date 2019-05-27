<template>
  <div class="dashboard">
    <div class="is-hidden-tablet">
      <TheNavbar />
    </div>
    <ServerList class="is-hidden-mobile" />
    <TheDashboardDisplay v-if="ready">
      <router-view />
    </TheDashboardDisplay>
  </div>
</template>

<script>
import TheDashboardDisplay from "@/views/dashboard/TheDashboardDisplay";
import TheNavbar from "@/components/dashboard/TheNavbar";
import ServerList from "@/components/dashboard/server_list/GuildList";

export default {
  name: "Dashboard",
  components: { TheNavbar, TheDashboardDisplay, ServerList },
  data() {
    return {
      ready: false
    };
  },
  async created() {
    await this.$store.dispatch("subscribeGuilds");
    this.ready = true;
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
