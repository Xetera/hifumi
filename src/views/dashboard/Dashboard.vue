<template>
  <div class="dashboard">
    <MenuServerList class="is-hidden-mobile" />
    <Menu class="is-hidden-mobile" />
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
  components: { TheDashboardDisplay, MenuServerList, Menu },
  async mounted() {
    await this.$store.dispatch("subscribeGuilds");
  },
  data() {
    return {
      guilds: []
    };
  },
  methods: {
    changeGuild(data) {
      console.log(data);
    }
  }
};
</script>

<style scoped lang="scss">
.dashboard {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.sidebars {
  @media (max-width: 767px) {
    display: none;
  }
}
</style>
