<template>
  <div>
    <vue-custom-scrollbar class="menu-container">
      <aside class="menu">
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
      </aside>
    </vue-custom-scrollbar>
  </div>
</template>

<script>
import MenuTags from "@/components/dashboard/menu/MenuTags";
import VueCustomScrollbar from "vue-custom-scrollbar";
export default {
  name: "Menu",
  components: { VueCustomScrollbar, MenuTags }
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/variables";
.menu-container {
  @media (max-width: 767px) {
    display: none;
  }
  padding: 10px;
  text-align: left;
  display: flex;
  background-color: $background-darker;
  max-height: 100%;
}
.menu-list {
  max-height: 100%;
}
.menu-label {
  color: #979797;
}
.menu {
  max-height: 100%;
  overflow: auto;
}
</style>
