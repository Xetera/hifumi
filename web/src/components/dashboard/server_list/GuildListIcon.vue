<template>
  <div class="image-wrapper">
    <b-tooltip :label="name" position="is-right" class="image is-48x48">
      <img alt="placeholder" :src="icon || placeholder" />
    </b-tooltip>
  </div>
</template>

<script>
import { proxy } from "@/config";
import BTooltip from "buefy/src/components/tooltip/Tooltip";
import placeholder from "@/assets/logo.png";

export default {
  name: "GuildListIcon",
  components: { BTooltip },
  props: {
    icon: String,
    name: String
  },
  data() {
    return {
      placeholder
    };
  },
  computed: {
    proxyImage() {
      return proxy(this.icon);
    }
  }
};
</script>

<style scoped lang="scss">
.image-wrapper {
  @include h-center;
  transition: 1s ease-in-out;
  margin: 20px 0;
  max-height: 100%;
}
.server-icon {
  max-height: 100%;
}
</style>
