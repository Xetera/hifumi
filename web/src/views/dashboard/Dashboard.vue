<template>
  <div class="dashboard">
    <Sidebar />
    <TheDashboardDisplay>
      <router-view />
    </TheDashboardDisplay>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { deleteToken } from "@/router/utils";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import TheDashboardDisplay from "./TheDashboardDisplay";

export default {
  name: "Dashboard",
  components: { TheDashboardDisplay, Sidebar },
  computed: mapState(["menuOpen"]),
  mounted() {
    deleteToken(this.$router);
    this.$store.commit("user/setUser");
    return this.$store.dispatch("subscribeGuilds");
  }
};
</script>

<style scoped lang="scss">
.dashboard {
  background: $background;
  @include flex-col;
  @include on-tablet {
    flex-direction: row;
  }
  height: 100%;
}
</style>
