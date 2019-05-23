<template>
  <div class="server-image-wrapper">
    <ServerImagePlaceholder v-if="!loaded"></ServerImagePlaceholder>
    <img
      class="server-image"
      :src="proxyImage"
      alt="image"
      v-if="url"
      :style="{ display: loaded ? 'block' : 'none' }"
      @load="removePlaceholder"
    />
  </div>
</template>

<script>
import { proxy } from "@/config";
import ServerImagePlaceholder from "@/components/dashboard/images/ServerImagePlaceholder";
export default {
  name: "ServerImage",
  components: { ServerImagePlaceholder },
  props: {
    url: String
  },
  data() {
    return {
      loaded: false
    };
  },
  computed: {
    proxyImage() {
      return proxy(this.url);
    }
  },
  methods: {
    async removePlaceholder() {
      this.loaded = true;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/variables";
.server-image-wrapper {
  cursor: pointer;
  box-shadow: $shadow;
  width: $image-width;
  background-color: $background-darker;
  height: $image-height + 50px;
  display: flex;
}
.server-image {
  width: $image-width;
  height: $image-height;
}
</style>
