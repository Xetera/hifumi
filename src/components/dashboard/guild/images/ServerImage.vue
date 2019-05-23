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
import ServerImagePlaceholder from "@/components/dashboard/guild/images/ServerImagePlaceholder";
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
.server-image-wrapper {
  @include shadowed;
  cursor: pointer;
  width: $image-width;
  background-color: $background-darker;
  height: $image-height + 50px;
  display: flex;
}
.server-image {
  @include image-dimensions;
}
</style>
