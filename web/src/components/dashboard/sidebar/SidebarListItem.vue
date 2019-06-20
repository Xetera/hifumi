<template>
  <router-link
    :to="to"
    class="sidebar-link sidebar-list-item"
    :style="{ background: background }"
  >
    <!--    <div v-if="selected" class="sidebar-selected-icon-wrapper">-->
    <!--      <img src="@/assets/svg/play.svg" />-->
    <!--    </div>-->
    <div class="sidebar-list-item-content">
      <div class="sidebar-list-item-icon">
        <component :is="icon" :size="iconSize" />
      </div>
      <span class="sidebar-list-item-name">{{ name }}</span>
    </div>
  </router-link>
</template>

<script>
import HomeIcon from "vue-material-design-icons/Home";
import LockIcon from "vue-material-design-icons/Lock";
import ImageIcon from "vue-material-design-icons/Image";
import TagIcon from "vue-material-design-icons/Tag";
import FaceProfileIcon from "vue-material-design-icons/FaceProfile";
import CodeBracesIcon from "vue-material-design-icons/CodeBraces";
import HeartOutlineIcon from "vue-material-design-icons/HeartOutline";
import PowerIcon from "vue-material-design-icons/Power";

export default {
  name: "SidebarListItem",
  components: {
    PowerIcon,
    HeartOutlineIcon,
    CodeBracesIcon,
    FaceProfileIcon,
    TagIcon,
    ImageIcon,
    LockIcon,
    HomeIcon
  },
  props: {
    to: Object,
    icon: String,
    background: {
      optional: true,
      type: String
    },
    name: {
      optional: false,
      type: String
    }
  },
  data() {
    return {
      iconSize: 18
    };
  }
};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  background: $sidebar-selected-tab !important;
  // fix this play button thingy
  &.sidebar-list-item-content:before {
    display: flex;
    position: absolute;
    left: 0;
    background: red;
    background: url(../../../assets/svg/play.svg);
  }
}
// centering overrides for the icons
span.material-design-icon {
  display: flex;
  align-items: center;
}
.sidebar-selected-icon {
  text-align: left;
  font-size: 2em;
}
.sidebar-list-item {
  &:hover {
    background: #36393f;
  }
  color: white !important;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  height: 40px;
}

.sidebar-list-item-content {
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin: 0 20px;
}
.sidebar-list-item-name {
  margin-left: 15px;
  font-size: 18px;
  display: flex;
}
</style>
