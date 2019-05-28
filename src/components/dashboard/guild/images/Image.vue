<template>
  <div class="server-image-wrapper" @click="$emit('open-modal', $props)">
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
        <div v-if="remainingTags > 0">
          <ImageTag :name="`${remainingTags} more tags`" />
        </div>
      </div>
    </div>
    <div v-if="loaded" class="image-bottom">
      <div class="image-user">
        <img
          class="image-user-avatar"
          :src="avatar"
          alt="user-avatar"
          @error="imageLoadError"
        />
        <div>
          <p class="image-user-name">{{ user.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { proxy } from "@/config";
import placeholder from "@/assets/logo.png";
import ServerImagePlaceholder from "@/components/dashboard/guild/images/ImagePlaceholder";
import ImageTag from "@/components/dashboard/guild/images/ImageTag";
export default {
  name: "Image",
  components: { ImageTag, ServerImagePlaceholder },
  props: {
    url: String,
    image_tags: Array,
    user: Object,
    created_at: String
  },
  data() {
    return {
      avatar: this.user.avatar,
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
    },
    remainingTags() {
      return this.image_tags.slice(4).length;
    }
  },
  methods: {
    async removePlaceholder() {
      this.loaded = true;
    },
    setHover(state) {
      this.hovering = state;
    },
    imageLoadError() {
      this.avatar = placeholder;
    }
  }
};
</script>

<style scoped lang="scss">
$image-bottom-height: 40px;

.server-image-wrapper {
  @include shadowed;
  @include flex-col;
  cursor: pointer;
  width: $image-width;
  background-color: $background-semidark;
  height: $image-height + $image-bottom-height;
}
.server-image {
  @include image-dimensions;
  position: absolute;
}

.image-user {
  @include flex-row;
  @include center;
  justify-content: flex-start;
  height: $image-bottom-height;
}
.image-user-avatar {
  @include rounded;
  margin: 0 10px;
  max-height: 50%;
  max-width: 50%;
}
.image-user-name {
  color: #dddddd;
  font-size: 13px;
}
.overlay-anchor {
  width: $image-width;
  height: $image-height;
  min-height: $image-height;
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
