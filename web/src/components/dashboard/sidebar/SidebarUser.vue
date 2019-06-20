<template>
  <div class="sidebar-user-wrapper">
    <img
      class="sidebar-image sidebar-avatar"
      :src="avatar"
    />
    <div class="sidebar-user-info">
      <span class="sidebar-user-name">{{ username }}</span>
      <span class="sidebar-user-discriminator">#{{ discriminator }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SidebarUser",
  computed: mapState("user", ["avatar", "username", "discriminator"])
};
</script>

<style scoped lang="scss">
.sidebar-avatar {
  margin: 0 10px;
}
.sidebar-user-wrapper {
  padding: 10px;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
}
.sidebar-user-name {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
}
.sidebar-user-discriminator {
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  color: #5B5757;
}
.sidebar-user-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
