<template>
  <div class="dashboard">
    <Slide :isOpen="menuOpen" :crossIcon="false" :burgerIcon="false">
      lol
    </Slide>
    <div class="is-hidden-tablet">
      <TheNavbar />
    </div>
    <ServerList class="is-hidden-mobile" />
    <TheDashboardDisplay>
      <router-view />
    </TheDashboardDisplay>
  </div>
</template>

<script>
import TheDashboardDisplay from "@/views/dashboard/TheDashboardDisplay";
import TheNavbar from "@/components/dashboard/TheNavbar";
import ServerList from "@/components/dashboard/server_list/GuildList";
import { Slide } from "vue-burger-menu";
import { mapState } from "vuex";
import { deleteToken } from "../../router/utils";

export default {
  name: "Dashboard",
  components: { TheNavbar, TheDashboardDisplay, ServerList, Slide },
  computed: mapState(["menuOpen"]),
  mounted() {
    deleteToken(this.$router);
    return this.$store.dispatch("subscribeGuilds");
  },
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
