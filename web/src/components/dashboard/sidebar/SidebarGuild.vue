<template>
  <div class="sidebar-top">
    <div class="sidebar-bottom-section">
      <img
        :src="guildIcon"
        alt="server image"
        class="sidebar-image"
        :class="{ disabled }"
        @error="replaceImage"
      />
      <h2 class="sidebar-guild-name" :class="{ 'disabled-text': disabled }">
        {{ name }}
      </h2>
    </div>
  </div>
</template>

<script>
import placeholder from "@/assets/logo.png";
export default {
  name: "SidebarGuild",
  data() {
    return {
      guildIcon: this.image || placeholder
    };
  },
  props: {
    name: String,
    image: {
      type: String,
      default: placeholder
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    replaceImage() {
      this.guildIcon = placeholder;
    }
  }
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
  &:hover {
    background: $foreground-light !important;
  }
  height: 100%;
  padding: 10px;
  cursor: pointer;
  font-size: 12px;
  color: $font-light;
}

.disabled {
  filter: grayscale(90%);
}
.disabled-text {
  color: #919191;
}
</style>
