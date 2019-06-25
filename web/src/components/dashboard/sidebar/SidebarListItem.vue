<template>
  <div class="sidebar-list-item">
    <div class="sidebar-list-item-content">
      <div class="sidebar-list-item-icon">
        <component :is="icon" :size="iconSize" />
      </div>
      <p class="sidebar-list-item-name">{{ name }}</p>
    </div>
  </div>
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
    icon: String,
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
.sidebar-selected-icon {
  text-align: left;
  font-size: 2em;
}

.sidebar-list-item-content {
  align-items: center;
  color: white;
  display: flex;
  max-width: 100%;
  justify-content: flex-start;
  margin: 0 20px;
}
.sidebar-list-item-name {
  margin-left: 15px;
  font-size: 18px;
  display: flex;
}
</style>
