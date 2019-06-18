<template>
  <div class="sidebar">
    <div>
      <div class="sidebar-guild-wrapper">
        <SidebarGuild />
      </div>
      <SidebarMenuGuild />
    </div>
    <SidebarMenuStatic />
  </div>
</template>

<script>
import SidebarGuild from "./SidebarGuild";
import SidebarMenuStatic from "./SidebarMenuStatic";
import SidebarMenuGuild from "./SidebarMenuGuild";
export default {
  name: "Sidebar",
  components: { SidebarMenuGuild, SidebarMenuStatic, SidebarGuild }
};
</script>

<style scoped lang="scss">
.sidebar-guild-wrapper {
  height: 120px;
}
.sidebar {
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  background: $sidebar-color;
  width: 250px;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
