<template>
  <div class="list-container">
    <router-link :to="{ name: 'home' }">
      <div class="settings-icon-wrapper">
        <b-tooltip label="Settings" position="is-right">
          <fa icon="home" size="2x" class="settings-icon side-icon"></fa>
        </b-tooltip>
        Home
      </div>
    </router-link>
    <router-link :to="{ name: 'settings' }">
      <div class="settings-icon-wrapper">
        <b-tooltip label="Settings" position="is-right">
          <fa icon="cog" size="2x" class="settings-icon side-icon"></fa>
        </b-tooltip>
        Settings
      </div>
    </router-link>
    <hr />
    <div v-for="guild in guilds" :key="guild.name">
      <router-link
        :to="{ name: 'guild-home', params: { guild_id: guild.guild_id } }"
      >
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
import ServerListIcon from "@/components/dashboard/server_list/ServerListIcon";
import BTooltip from "buefy/src/components/tooltip/Tooltip";
import { mapGetters } from "vuex";

export default {
  name: "MenuServerList",
  components: { BTooltip, ServerListIcon },
  computed: mapGetters({
    guilds: "guildArray"
  }),
  methods: {}
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/_variables.scss";
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
