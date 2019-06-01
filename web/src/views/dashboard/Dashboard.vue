<template>
  <div class="dashboard">
    <Slide :isOpen="menuOpen">
      lol
    </Slide>
    <div class="is-hidden-tablet">
      <TheNavbar />
    </div>
    <ServerList class="is-hidden-mobile" />
    <TheDashboardDisplay v-if="ready">
      <router-view @menu-open="changeMenuOpen" />
    </TheDashboardDisplay>
  </div>
</template>

<script>
import TheDashboardDisplay from "@/views/dashboard/TheDashboardDisplay";
import TheNavbar from "@/components/dashboard/TheNavbar";
import ServerList from "@/components/dashboard/server_list/GuildList";
import { Slide } from "vue-burger-menu";

export default {
  name: "Dashboard",
  components: { TheNavbar, TheDashboardDisplay, ServerList, Slide },
  data() {
    return {
      ready: false,
      menuOpen: false
    };
  },
  methods: {
    changeMenuOpen(state) {
      this.menuOpen = state;
    }
  },
  async created() {
    // eslint-disable-next-line no-unused-vars
    const { code, ...query } = { ...this.$route.query };
    this.$router.replace({ query });
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
