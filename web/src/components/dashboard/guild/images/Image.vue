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
      <div class="bottom-left">
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
      <router-link :to="{ name: 'image', params: { id } }" class="bottom-right">
        View
      </router-link>
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
    id: Number,
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
.server-image-wrapper {
  @include shadowed;
  @include flex-col;
  cursor: pointer;
  width: var(--image-width);
  max-width: var(--image-width);
  background-color: $background-semidark;
  height: var(--image-height) + var(--image-bottom-height);
}
.server-image {
  @include image-dimensions;
  position: absolute;
}

.bottom-left {
  @include flex-row;
  @include center;
  justify-content: flex-start;
  height: var(--image-bottom-height);
}
.image-user-avatar {
  @include rounded;
  max-height: 50%;
  max-width: 50%;
}
.image-user-name {
  color: #dddddd;
  margin-left: 8px;
  font-size: 13px;
}
.overlay-anchor {
  width: var(--image-width);
  height: var(--image-height);
  min-height: var(--image-height);
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
.image-bottom {
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bottom-right {
  font-size: 12px;
  @include v-center;
  height: 100%;
  text-align: right;
}
</style>
