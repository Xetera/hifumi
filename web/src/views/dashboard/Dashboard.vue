<template>
<!--  <div class="dashboard">-->
<!--    <Slide :isOpen="menuOpen" :crossIcon="false" :burgerIcon="false">-->
<!--      lol-->
<!--    </Slide>-->
<!--    <div class="is-hidden-tablet">-->
<!--      <TheNavbar />-->
<!--    </div>-->
<!--    <ServerList class="is-hidden-mobile" />-->
<!--    <TheDashboardDisplay>-->
<!--      <router-view />-->
<!--    </TheDashboardDisplay>-->
<!--  </div>-->
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
    return this.$store.dispatch("subscribeGuilds");
  },
  // beforeRouteEnter(to, from, next) {
  //   const guildId = to.params.guild_id;
  //
  //   const notMemberOfGuild = guildId && !(guildId in store.state.guilds);
  //   if (notMemberOfGuild) {
  //     console.log("unauthorized");
  //     return kickToDashboardHome("You are not a member of this server", next);
  //   }
  //
  //   next(true);
  // }
};
</script>

<style scoped lang="scss">
.dashboard {
  background: $background !important;
  @include flex-col;
  @include on-tablet {
    flex-direction: row;
  }
  height: 100%;
}
</style>
