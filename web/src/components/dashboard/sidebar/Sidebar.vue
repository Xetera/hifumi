<template>
  <div class="sidebar">
    <div>
      <router-link :to="{ name: 'home' }">
        <SidebarHead />
      </router-link>
      <div class="sidebar-scrollable">
        <div
          class="sidebar-guild-wrapper"
          v-for="guild in guilds"
          :key="`${guild.name}:${guild.icon}`"
        >
          <router-link
            :to="{ name: 'guild-home', params: { guild_id: guild.guild_id } }"
          >
            <SidebarGuild :name="guild.name" :image="guild.icon" />
          </router-link>
        </div>
      </div>
      <div class="sidebar-guild-wrapper">
        <router-link :to="{ name: 'support-server' }" v-if="!inSupportServer">
          <SidebarGuild
            name="Hifumin"
            image="https://cdn.discordapp.com/icons/414334929002823680/056c781a4e471ae34bf2af73294542ca.png"
            disabled
          />
        </router-link>
      </div>
    </div>
    <div class="sidebar-static-wrapper">
      <SidebarMenuStatic />
      <SidebarUser />
    </div>
  </div>
</template>

<script>
import SidebarGuild from "./SidebarGuild";
import SidebarMenuStatic from "./SidebarMenuStatic";
import SidebarUser from "./SidebarUser";
import { mapGetters } from "vuex";
import SidebarHead from "./SidebarHead";
export default {
  name: "Sidebar",
  components: {
    SidebarHead,
    SidebarUser,
    SidebarMenuStatic,
    SidebarGuild
  },
  computed: {
    ...mapGetters({
      guilds: "guildsArray"
    }),
    inSupportServer() {
      return this.guilds.includes("414334929002823680");
    }
  }
};
</script>

<style scoped lang="scss">
a.router-link-active .sidebar-top {
  background: $sidebar-selected-tab !important;
}
.sidebar-scrollable {
  overflow-y: auto;
  flex: 1;
}

.sidebar-guild-wrapper {
  margin-top: 10px;
  height: 65px;
}
.sidebar-static-wrapper {
}
.sidebar {
  z-index: 2;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  background: $sidebar-color;
  width: 250px;
  min-width: 250px;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
