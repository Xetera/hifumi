<template>
  <SidebarList label="Hifumi">
    <div class="link-wrapper" v-for="menu in staticMenus" :key="menu.name">
      <SidebarListItem
        :name="menu.name"
        :icon="menu.icon"
        :to="menu.to"
        :background="menu.background"
      />
    </div>
  </SidebarList>
</template>

<script>
import SidebarList from "./SidebarList";
import SidebarListItem from "./SidebarListItem";
export default {
  name: "SidebarMenuStatic",
  components: { SidebarListItem, SidebarList },
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
          to: { name: "donate" },
          background:
            "linear-gradient(89.43deg, #F947DC -0.94%, rgba(255, 0, 46, 0.75) -0.93%, rgba(255, 0, 0, 0) 100.52%)"
        },
        {
          name: "Logout",
          icon: "PowerIcon",
          to: { name: "logout" }
        }
      ]
    };
  }
};
</script>

<style scoped></style>
