<template>
  <div class="image-wrapper">
    <b-tooltip :label="name" position="is-right" class="image is-48x48">
      <img
        class="server-icon is-rounded"
        :src="proxyImage"
        alt="image"
        v-if="icon"
      />
      <img
        alt="placeholder"
        src="http://www.stickpng.com/assets/thumbs/5a4613ddd099a2ad03f9c994.png"
        v-if="!icon"
      />
    </b-tooltip>
  </div>
</template>

<script>
import { proxy } from "@/config";
import BTooltip from "buefy/src/components/tooltip/Tooltip";

export default {
  name: "ServerListIcon",
  components: { BTooltip },
  props: {
    icon: String,
    name: String
  },
  computed: {
    proxyImage() {
      return proxy(this.icon);
    }
  }
};
</script>

<style scoped>
.image-wrapper {
  transition: 1s ease-in-out;
  display: flex;
  margin: 20px 0;
  justify-content: center;
  max-height: 100%;
}
.server-icon {
  max-height: 100%;
}
</style>
