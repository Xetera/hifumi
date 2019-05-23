<template>
  <div class="menu-wrapper">
    <MenuHeader class="menu-header" />
    <vue-custom-scrollbar class="menu-container menu" tagname="aside">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li>
          <router-link
            :to="{ name: 'guild-home', params: { guild_id: guild.guild_id } }"
          >
            <a>Home</a>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{
              name: 'guild-settings',
              params: { guild_id: guild.guild_id }
            }"
          >
            <a>Server Settings</a>
          </router-link>
        </li>
      </ul>
      <p class="menu-label">
        Administration
      </p>
      <ul class="menu-list">
        <li>
          <a class="is-active">
            Images
          </a>
        </li>
        <MenuTags />
        <li><a>Team Settings</a></li>
        <li>
          <a class="is-active">Manage Your Team</a>
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </li>
        <li><a>Invitations</a></li>
        <li><a>Cloud Storage Environment Settings</a></li>
        <li><a>Authentication</a></li>
      </ul>
    </vue-custom-scrollbar>
  </div>
</template>

<script>
import MenuTags from "@/components/dashboard/menu/MenuTags";
import VueCustomScrollbar from "vue-custom-scrollbar";
import MenuHeader from "@/components/dashboard/menu/MenuHeader";
import { mapGetters, mapState } from "vuex";
export default {
  name: "Menu",
  components: { MenuHeader, VueCustomScrollbar, MenuTags },
  computed: {
    ...mapState(["guilds", "currentGuild"]),
    ...mapGetters(["guild"])
  },
  data() {
    return {
      route: this.$route
    };
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/variables";
.menu {
  padding: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  background-color: $background-darker;
  max-height: 100%;
  overflow-x: hidden;
}
.menu-list {
  max-height: 100%;
}
.menu-label {
  color: #979797;
}
.menu-container {
  height: 100%;
}
.menu-header {
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: $bottom-shadow;
  background-color: $background-darker;
  z-index: 10;
}
.menu-wrapper {
  min-height: 100%;
  min-width: 240px;
  max-width: 240px;
  display: flex;
  flex-direction: column;
}
input:not(:checked) + ul {
  display: none;
}
div.ps__thumb-y {
  background: $background-darkest !important;
}
</style>
