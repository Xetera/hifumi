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
import { mapState } from "vuex";

export default {
  name: "DashboardMenu",
  computed: mapState(["guilds"])
};
</script>

<style scoped>
.server-list {
  padding: 10px;
  text-align: left;
  display: flex;
}
</style>
