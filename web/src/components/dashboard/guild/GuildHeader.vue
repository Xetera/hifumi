<template>
  <header class="guild-header">
    <div class="guild-header-banner-wrapper">
      <div class="overlay"></div>
      <img :src="banner" class="guild-header-banner" />
      <div class="guild-header-info">
        <img :src="serverImage" />
        <h2 class="guild-header-name">{{ name }}</h2>
      </div>
    </div>
    <div class="guild-header-toolbar-wrapper">
      <Toolbar :buttons="toolbarButtons" />
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import Toolbar from "../toolbar/Toolbar";

export default {
  name: "GuildHeader",
  components: { Toolbar },
  data() {
    const { guild_id } = { guild_id: "418699380833648642" };
    return {
      toolbarButtons: [
        {
          name: "Home",
          to: { name: "guild-home", props: { guild_id } }
        },
        {
          name: "Contributors",
          to: { name: "guild-contributors", props: { guild_id } }
        },
        {
          name: "Images",
          to: { name: "guild-images", props: { guild_id } }
        },
        {
          name: "Stars",
          to: { name: "guild-stars", props: { guild_id } }
        },
        {
          name: "Tags",
          to: { name: "guild-tags", props: { guild_id } }
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["guild"])
  },
  props: {
    name: String,
    serverImage: String,
    banner: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
.guild-header-toolbar-wrapper {
  height: 55px;
  background: $foreground-dark !important;
}
.guild-header-name {
  @include text-shadowed;
  font-size: 42px;
  margin-left: 20px;
}
.guild-header-info {
  @include flex-row;
  align-items: flex-end;
  z-index: 4;
  position: absolute;
  bottom: 0;
  left: 30%;
}
.guild-header-banner-wrapper {
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
  max-height: 360px;
}
.overlay {
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    360deg,
    rgba(26, 26, 26, 0.87) -2.62%,
    rgba(15, 15, 15, 0) 100%
  );
}
.guild-header-banner {
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.guild-header {
  width: 100%;
}
</style>
