<template>
  <div class="server-image-wrapper" @click="$emit('open-modal', $props)">
    <ServerImagePlaceholder v-if="!loaded"></ServerImagePlaceholder>
    <div :class="{ 'overlay-anchor': loaded }">
      <img
        class="server-image"
        :class="{ 'image-errored': errored }"
        :src="thumbnailImage"
        alt="image"
        v-if="thumbnail_url"
        :style="{ display: loaded ? 'block' : 'none' }"
        @error="imageLoadError"
        @load="removePlaceholder"
      />
      <div v-if="loaded && !errored" class="image-tags">
        <div v-for="tag in relevantTags" :key="tag.name">
          <ImageTag :name="tag.name" />
        </div>
        <div v-if="remainingTags > 0">
          <ImageTag :name="`${remainingTags} more tags`" />
        </div>
      </div>
      <div v-if="loaded && errored" class="image-error-message">Oops</div>
    </div>
    <transition name="slide-fade">
      <div v-if="loaded" class="image-bottom">
        <div class="bottom-left">
          <img class="image-user-avatar" :src="avatar" alt="user-avatar" @error="avatarLoadError" />
          <div>
            <p class="image-user-name">{{ name }}</p>
          </div>
        </div>
        <router-link :to="{ name: 'image', params: { id } }" class="bottom-right">View</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
import { proxy } from "@/config";
import placeholder from "@/assets/logo.png";

import ServerImagePlaceholder from "@/components/dashboard/guild/images/ImagePlaceholder";
import ImageTag from "@/components/dashboard/guild/images/ImageTag";
export default {
  name: "GuildImage",
  components: { ImageTag, ServerImagePlaceholder },
  props: {
    id: Number,
    thumbnail_url: String,
    url: String,
    image_tags: Array,
    user: Object,
    created_at: String
  },
  data() {
    return {
      avatar: this.user.avatar,
      loaded: false,
      errored: false
    };
  },
  computed: {
    name() {
      return this.user ? this.user.name : "Unknown";
    },
    thumbnailImage() {
      if (this.errored) {
        return this.url;
      }
      return this.thumbnail_url;
    },
    relevantTags() {
      return this.image_tags.slice(0, 4);
    },
    remainingTags() {
      return this.image_tags.slice(4).length;
    }
  },
  methods: {
    addTag(tag) {
      this.$store.dispatch("images/addSelected", tag);
    },
    async removePlaceholder() {
      this.loaded = true;
    },
    avatarLoadError() {
      this.avatar = placeholder;
    },
    imageLoadError() {
      this.errored = true;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/animations.scss";
.image-errored {
  border-bottom: 1px red solid;
}
.server-image-wrapper {
  &:hover {
    .image-error-message,
    .image-tags {
      display: flex !important;
    }
  }
  @include shadowed;
  @include flex-col;
  cursor: pointer;
  margin: 0 auto;
  width: var(--image-width);
  max-width: var(--image-width);
  background-color: $background-semidark;
  height: var(--image-height) + var(--image-bottom-height);
}
.server-image {
  @include image-dimensions;
  position: absolute;
  object-fit: cover;
}

.bottom-left {
  @include flex-row;
  @include center;
  justify-content: flex-start;
  width: 70%;
  height: var(--image-bottom-height);
}
.image-user-avatar {
  @include rounded;
  max-height: 50%;
  max-width: 50%;
}
.image-user-name {
  color: #dddddd;
  max-height: 100%;
  text-overflow: ellipsis;
  max-width: 100%;
  white-space: nowrap;
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
  transition: all 0.8s ease;
  display: none;
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
  color: $link-color;
  font-size: 12px;
  @include center;
  width: 30%;
  height: 100%;
  text-align: right;
}
</style>
