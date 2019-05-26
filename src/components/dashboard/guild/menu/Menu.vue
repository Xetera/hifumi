<template>
  <div class="menu-wrapper">
    <MenuHeader class="menu-header" />
    <vue-custom-scrollbar class="menu-container menu" tagname="aside">
      <ul class="menu-list">
        <li>
          <router-link
            class="router-link"
            :to="{ name: 'guild-home', params: { guild_id: guild.guild_id } }"
          >
            <a>Home</a>
          </router-link>
        </li>
      </ul>
      <p class="menu-label">
        Administration
      </p>
      <ul class="menu-list">
        <li>
          <router-link
            class="router-link"
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
        Media
      </p>
      <ul class="menu-list">
        <li>
          <router-link
            :to="{ name: 'guild-images', params: { guild_id: guild.guild_id } }"
          >
            <a>Images</a>
          </router-link>
        </li>
        <li>
          <ul>
            <li><a>Tags</a></li>
          </ul>
        </li>
        <li><a>Members</a></li>
        <li><a>Auto-tag Channels</a></li>
      </ul>
    </vue-custom-scrollbar>
  </div>
</template>

<script>
import VueCustomScrollbar from "vue-custom-scrollbar";
import MenuHeader from "@/components/dashboard/guild/menu/MenuHeader";
import { mapGetters, mapState } from "vuex";
export default {
  name: "Menu",
  components: { MenuHeader, VueCustomScrollbar },
  computed: {
    ...mapState(["route"]),
    ...mapGetters(["guild"])
  }
};
</script>

<style scoped lang="scss">
.menu {
  @include flex-col;
  padding: 10px;
  text-align: left;
  background-color: $background-darker;
  max-height: 100%;
  overflow-x: hidden;
}
.menu-list {
  a:hover {
    background-color: #494c54;
  }
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

.router-link {
  padding: 0;
}
.menu-list {
  padding: 0;
}

.router-link-active {
  padding: 0;
}

.router-link-exact-active {
  background-color: #494c54;
}

.menu-list li a.is-active {
  /*background-color: #2c3e50;*/
}

div.ps__thumb-y {
  background: $background-darkest !important;
}
</style>
