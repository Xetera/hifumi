<template>
  <div class="server-image-wrapper">
    <ServerImagePlaceholder v-if="!loaded"></ServerImagePlaceholder>
    <div
      class="overlay-anchor"
      @mouseenter="setHover(true)"
      @mouseleave="setHover(false)"
    >
      <img
        class="server-image"
        :src="proxyImage"
        alt="image"
        v-if="url"
        :style="{ display: loaded ? 'block' : 'none' }"
        @load="removePlaceholder"
      />
      <div v-if="loaded && hovering" class="image-tags">
        <div v-for="tag in relevantTags" :key="tag.name">
          <ImageTag :name="tag.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { proxy } from "@/config";
import ServerImagePlaceholder from "@/components/dashboard/guild/images/ImagePlaceholder";
import ImageTag from "@/components/dashboard/guild/images/ImageTag";
export default {
  name: "Image",
  components: { ImageTag, ServerImagePlaceholder },
  props: {
    url: String,
    image_tags: Array,
    user: Object
  },
  data() {
    return {
      loaded: false,
      hovering: false
    };
  },
  computed: {
    proxyImage() {
      return proxy(this.url);
    },
    relevantTags() {
      return this.image_tags.slice(0, 4);
    }
  },
  methods: {
    async removePlaceholder() {
      this.loaded = true;
    },
    setHover(state) {
      this.hovering = state;
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
  position: absolute;
}
.overlay-anchor {
  width: $image-width;
  height: $image-height;
  position: relative;
}
.image-tags {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: rgba($background-darker, 0.7);
  position: absolute;
  bottom: 0;
  * {
    opacity: 1;
  }
}
</style>
