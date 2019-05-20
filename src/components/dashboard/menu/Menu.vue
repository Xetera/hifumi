<template>
  <div class="menu-wrapper">
    <MenuHeader class="menu-header" />
    <vue-custom-scrollbar class="menu-container menu" tagname="aside">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li><a>Dashboard</a></li>
        <li><a>Customers</a></li>
      </ul>
      <p class="menu-label">
        Administration
      </p>
      <ul class="menu-list">
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
export default {
  name: "Menu",
  components: { MenuHeader, VueCustomScrollbar, MenuTags }
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/variables";
.menu {
  @media (max-width: 767px) {
    display: none;
  }
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
.menu-header {
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 1.5px 0 rgba(0, 0, 0, 0.05),
    0 2px 0 rgba(0, 0, 0, 0.05);
  background-color: $background-darker;
  z-index: 10;
}
.menu-wrapper {
  max-height: 100%;
  display: flex;
  flex-direction: column;
}
div.ps__thumb-y {
  background: $background-darkest !important;
}
</style>
