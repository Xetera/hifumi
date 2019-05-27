<template>
  <div class="modal-container">
    <div class="modal-image-top">
      <div class="modal-user">
        <img
          class="user-avatar"
          :src="avatar"
          @error="onLoadFail"
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
        <button class="button star-button">
          <a class="star-button">
            <fa icon="star" />
            Star This
          </a>
        </button>
      </div>
    </div>
    <vue-custom-scrollbar class="modal-image-middle">
      <div v-if="!loaded" class="modal-placeholder">
        <b-loading :is-full-page="false" :active="!loaded" />
      </div>
      <img
        class="modal-image"
        :src="url"
        alt="modal-image"
        @load="replacePlaceholder"
      />
    </vue-custom-scrollbar>
    <div class="modal-image-bottom">
      <div class="modal-bottom-left">
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
export default {
  name: "ImageModal",
  components: { BLoading, VueCustomScrollbar },
  props: {
    user: Object,
    url: String,
    image_tags: Array,
    created_at: String
  },
  data() {
    const date = new Date(this.created_at);
    return {
      avatar: this.user.avatar,
      loaded: false,
      date: date.toDateString()
    };
  },
  methods: {
    replacePlaceholder() {
      this.loaded = true;
    },
    onLoadFail() {
      this.avatar = placeholder;
    }
  }
};
</script>

<style scoped lang="scss">
$section-height: 80px;
.modal-container {
  max-height: 400px;
  @include on-tablet {
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
  .star-button {
    svg {
      color: #f6ac34;
      margin-right: 5px;
    }
    color: whitesmoke;
    border: 0;
    background: $background-dark;
  }
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
  margin-left: 2%;
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
  color: #cecece;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 5%;
}

.modal-bottom-right {
  font-size: 14px;
  div svg {
    color: white;
    margin-right: 5px;
  }
  text-align: left;
  align-items: flex-start;
  height: 70%;
  margin: auto 0;
  justify-content: space-around;
  @include flex-col;
}

.modal-image-tags {
  line-height: 1.28;
  height: 100%;
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
</style>
