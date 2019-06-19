<template>
  <div class="sidebar-user-wrapper">
    <img
      class="sidebar-image sidebar-avatar"
      src="https://cdn.discordapp.com/avatars/140862798832861184/a_aff9dd814944fb8723635d74efd61f18.png?size=128"
    />
    <div class="sidebar-user-info">
      <span class="sidebar-user-name">Xetera</span>
      <span class="sidebar-user-discriminator">#0001</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarUser"
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
