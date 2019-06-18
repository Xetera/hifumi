<template>
  <div class="sidebar-guild-menu-wrapper">
    <SidebarList :label="guild.name">
      <div class="link-wrapper" v-for="menu in guildMenus" :key="menu.name">
        <SidebarListItem :name="menu.name" :icon="menu.icon" :to="menu.to" />
      </div>
    </SidebarList>
  </div>
</template>

<script>
import SidebarList from "./SidebarList";
import { mapGetters } from "vuex";
import SidebarListItem from "./SidebarListItem";
export default {
  name: "SidebarMenuGuild",
  components: { SidebarListItem, SidebarList },
  computed: mapGetters(["guild"]),
  data() {
    return {
      guildMenus: [
        {
          name: "Home",
          icon: "HomeIcon",
          to: { name: "guild-home" }
        },
        {
          name: "Settings",
          icon: "LockIcon",
          to: { name: "guild-settings" }
        },
        {
          name: "Images",
          icon: "ImageIcon",
          to: { name: "guild-images" }
        },
        {
          name: "Tags",
          icon: "TagIcon",
          to: { name: "guild-tags" }
        }
      ],
    };
  }
};
</script>

<style scoped>
.list-item {
  height: 45px;
}
.link-wrapper:not(:nth-child(1)) {
  margin-top: 10px;
}
</style>
