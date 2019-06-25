<template>
  <div>
    <div
      class="link-wrapper"
      v-for="menu in staticMenus"
      :key="menu.name"
      :style="{ background: menu.background }"
    >
      <router-link :to="menu.to">
        <SidebarListItem :name="menu.name" :icon="menu.icon" />
      </router-link>
    </div>
    <div class="link-wrapper" @click="$store.dispatch('logout')">
      <SidebarListItem name="Logout" icon="PowerIcon" />
    </div>
  </div>
</template>

<script>
import SidebarListItem from "./SidebarListItem";
export default {
  name: "SidebarMenuStatic",
  components: { SidebarListItem },
  methods: {
  },
  data() {
    return {
      staticMenus: [
        {
          name: "Profile",
          icon: "FaceProfileIcon",
          to: { name: "profile" }
        },
        {
          name: "Settings",
          icon: "LockIcon",
          to: { name: "settings" }
        },
        {
          name: "Developers",
          icon: "CodeBracesIcon",
          to: { name: "developers" }
        },
        {
          name: "Premium",
          icon: "HeartOutlineIcon",
          to: { name: "premium" },
          background:
            "linear-gradient(89.43deg, #F947DC -0.94%, rgba(255, 0, 46, 0.75) -0.93%, rgba(255, 0, 0, 0) 100.52%)"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
  .link-wrapper .router-link-exact-active {
    background: $sidebar-selected-tab !important;
  }
.link-wrapper {
  color: white;
  padding: 10px 5px;
  &:hover {
    background: $sidebar-selected-tab;
  }
  cursor: pointer;
}
</style>
