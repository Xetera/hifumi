<template>
  <div class="sidebar">
    <div>
      <div class="sidebar-guild-wrapper">
        <SidebarGuild />
      </div>
      <SidebarMenuGuild />
    </div>
    <div>
      <SidebarMenuStatic />
      <SidebarUser />
    </div>
  </div>
</template>

<script>
import SidebarGuild from "./SidebarGuild";
import SidebarMenuStatic from "./SidebarMenuStatic";
import SidebarMenuGuild from "./SidebarMenuGuild";
import SidebarUser from "./SidebarUser";
export default {
  name: "Sidebar",
  components: { SidebarUser, SidebarMenuGuild, SidebarMenuStatic, SidebarGuild }
};
</script>

<style scoped lang="scss">
.sidebar-guild-wrapper {
  height: 110px;
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
