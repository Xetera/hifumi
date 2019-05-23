<template>
  <div class="list-container">
    <router-link to="dashboard/home">
      <div class="settings-icon-wrapper">
        <b-tooltip label="Settings" position="is-right">
          <fa icon="home" size="2x" class="settings-icon side-icon"></fa>
        </b-tooltip>
        Home
      </div>
    </router-link>
    <router-link to="dashboard/settings">
      <div class="settings-icon-wrapper">
        <b-tooltip label="Settings" position="is-right">
          <fa icon="cog" size="2x" class="settings-icon side-icon"></fa>
        </b-tooltip>
        Settings
      </div>
    </router-link>
    <hr />
    <div v-for="guild in guilds" :key="guild.name">
      <router-link :to="`dashboard/server/${guild.guild_id}`">
        <ServerListIcon
          :icon="guild.icon"
          :name="guild.name"
          class="side-icon"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import ServerListIcon from "@/components/dashboard/menu/servers/ServerListIcon";
import { mapState } from "vuex";
import BTooltip from "buefy/src/components/tooltip/Tooltip";

export default {
  name: "MenuServerList",
  components: { BTooltip, ServerListIcon },
  computed: mapState(["guilds", "currentGuild"])
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/variables";
.list-container {
  min-width: 72px;
  width: 72px;
  max-height: 100%;
  background-color: $background-darkest;
}
.settings-icon-wrapper {
  line-height: 1;
  padding: 10px;
  color: #dddddd;
  font-size: 12px;
}
hr {
  margin: 10px auto;
  width: 80%;
}
.settings-icon {
  border-radius: 999999px;
  height: 48px;
}
.side-icon {
  cursor: pointer;
}
</style>
