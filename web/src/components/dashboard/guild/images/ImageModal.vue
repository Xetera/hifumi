<template>
  <div class="modal-container">
    <div class="modal-image-top">
      <div class="modal-user">
        <img
          class="user-avatar"
          :src="avatar"
          @error="onAvatarLoadFail"
          alt="user-avatar"
        />
        <div class="modal-top-text">
          <a rel="nofollow" target="_blank" :href="url">View Original</a>
          <span>
            by
            <span class="user-name">{{ user.name }}</span>
          </span>
        </div>
      </div>
      <div class="modal-stars">
        <b-tooltip
          label="Starring isn't implemented yet, check back later!"
          type="is-danger"
          size="is-small"
          position="is-left"
          multilined
          animated
        >
          <b-button class="button" disabled>
            <fa icon="star" />
            Star This
          </b-button>
        </b-tooltip>
      </div>
    </div>
    <vue-custom-scrollbar class="modal-image-middle">
      <div v-if="imageFailed">
        <b-notification
          :active="true"
          type="is-danger"
          class="error-notification"
          aria-close-label="Close alert"
          role="alert"
          message="Huh? That image couldn't load, someone must have deleted it."
        />
        <img :src="loadError" class="error-image" alt="error-image" />
      </div>
      <div v-if="!loaded && !imageFailed" class="modal-placeholder">
        <b-loading :is-full-page="false" :active="!loaded" />
      </div>
      <img
        v-if="!imageFailed"
        class="modal-image"
        :src="url"
        alt="modal-image"
        @load="replacePlaceholder"
        @error="onImageLoadFail"
      />
    </vue-custom-scrollbar>
    <div class="modal-image-bottom">
      <div class="modal-bottom-left">
        <div class="modal-image-edit-buttons">
          <b-tooltip
            label="Image editing is on its way soon!"
            type="is-danger"
            size="is-small"
            position="is-right"
            animated
          >
            <b-button class="button edit-button" disabled>
              <fa icon="edit" />
              Edit
            </b-button>
          </b-tooltip>
        </div>
        <div class="modal-image-tags">
          <span
            class="modal-image-tag"
            v-for="tag of image_tags"
            :key="tag.name"
          >
            <fa :icon="['far', 'circle']" class="tag-circle" />
            {{ tag.name }}
          </span>
        </div>
      </div>
      <div class="modal-bottom-right">
        <div>
          <fa :icon="['far', 'calendar-alt']" />
          {{ date }}
        </div>
        <div>
          <fa icon="star" />
          0 Stars
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueCustomScrollbar from "vue-custom-scrollbar/src/vue-scrollbar";
import placeholder from "@/assets/logo.png";
import BLoading from "buefy/src/components/loading/Loading";
import BButton from "buefy/src/components/button/Button";
import BTooltip from "buefy/src/components/tooltip/Tooltip";
import loadError from "@/assets/hifumi-scared.gif";
import BNotification from "buefy/src/components/notification/Notification";

export default {
  name: "ImageModal",
  components: {
    BNotification,
    BTooltip,
    BButton,
    BLoading,
    VueCustomScrollbar
  },
  props: {
    user: Object,
    url: String,
    image_tags: Array,
    created_at: String
  },
  data() {
    const date = new Date(this.created_at);
    return {
      loadError,
      avatar: this.user.avatar,
      imageFailed: false,
      loaded: false,
      date: date.toDateString()
    };
  },
  methods: {
    replacePlaceholder() {
      this.loaded = true;
    },
    onAvatarLoadFail() {
      this.avatar = placeholder;
    },
    onImageLoadFail() {
      this.loaded = true;
      this.imageFailed = true;
    }
  }
};
</script>

<style scoped lang="scss">
$section-height: 80px;
.modal-container {
  max-height: 350px;
  @include on-tablet {
    max-height: 400px;
  }
  @include on-desktop {
    max-height: 700px;
  }
  margin: 0 10px;
  @include flex-col;
}
.modal-image-middle {
  transition: 0.3s ease-in;
  max-width: 100%;
  background-color: $background-dark;
  max-height: 600px;
  /*overflow: hidden;*/
}
.modal-image {
  transition: 0.3s ease-in;
  object-fit: cover;
}
.modal-image-top {
  @include v-center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  justify-content: space-between;
  padding: 0 5%;
  background: $background-darker;
  width: 100%;
  height: $section-height;
  min-height: $section-height;
  display: flex;
}

.button {
  svg {
    color: #f6ac34;
    margin-right: 5px;
  }
  @include v-center;
  color: whitesmoke;
  border: 0;
  background: $background-dark;
}
.modal-image-bottom {
  @include flex-row;
  justify-content: space-between;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background: $background-darker;
  min-height: $section-height;
  height: $section-height;
}
.modal-user {
  @include flex-row;
  @include v-center;
  width: 100%;
}
.modal-top-text {
  @include flex-col;
  margin-left: 10px;
  text-align: left;
}
.user-name {
  font-weight: 200;
  color: #cbcbcb;
}
.user-avatar {
  @include rounded;
  max-height: 48px;
  max-width: 48px;
}
.modal-placeholder {
  height: 300px;
}
.modal-bottom-right,
.modal-bottom-left {
  margin: auto 0;
  font-size: 12px;
  @include on-tablet {
    font-size: 13px;
  }
  color: #c3c3c3;
  display: flex;
  align-items: center;
  height: 70%;
  padding: 0 5%;
}

.modal-bottom-left {
  width: 100%;
}

.modal-bottom-right {
  white-space: nowrap;
  div svg {
    color: white;
    margin-right: 5px;
  }
  text-align: left;
  align-items: flex-start;
  justify-content: space-around;
  @include flex-col;
}
.modal-image-edit-buttons {
}

.modal-image-tags {
  line-height: 1.28;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  @include flex-col;
  justify-content: center;
  flex-wrap: wrap;
  text-align: left;
  .modal-image-tag {
    @include v-center;
    svg {
      margin-right: 5px;
    }
  }
}
.tag-circle {
  max-width: 7px;
}
.error-image {
  max-height: 200px;
  border: 2px red;
}
.edit-button {
  margin-right: 10px;
  svg {
    color: #f6ac34;
  }
}
.error-notification {
  margin: 0 !important;
  border-radius: 0;
}
</style>
