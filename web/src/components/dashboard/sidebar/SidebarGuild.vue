<template>
  <div class="sidebar-top">
    <div class="sidebar-top-section">
      <p class="sidebar-top-text">
        Current Server
      </p>
      <p class="sidebar-top-text thin">
        Click to change
      </p>
    </div>
    <div class="sidebar-bottom-section">
      <img :src="guild.icon" alt="server image" class="sidebar-image" />
      <h2 class="sidebar-guild-name">{{ guild.name }}</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SidebarGuild",
  computed: mapGetters(["guild"])
};
</script>

<style scoped lang="scss">
.sidebar-guild-name {
  line-height: 19px;
  text-align: left;
  margin-left: 15px;
  font-size: 16px;
  font-weight: normal;
  color: #ececec;
}
.sidebar-top-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.sidebar-bottom-section {
  padding: 10px 10px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.sidebar-top {
  height: 100%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  padding: 10px;
  font-size: 12px;
  background: $sidebar-guild-section-color;
  color: $font-light;
}

.sidebar-top-text {
  font-size: 12px;
}

.thin {
  font-weight: 200;
}
</style>
