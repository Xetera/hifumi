<template>
  <div class="server-list">
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
  </div>
</template>

<script>
import MenuTags from "@/components/dashboard/menu/MenuTags";
export default {
  name: "DashboardMenu",
  components: { MenuTags }
};
</script>

<style scoped>
.server-list {
  padding: 10px;
  text-align: left;
  display: flex;
  max-height: 100%;
}
</style>
