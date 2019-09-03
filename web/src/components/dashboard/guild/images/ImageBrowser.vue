<template>
  <div class="grid-wrapper">
    <transition name="fade">
      <div class="images-filter-field">
        <h3 class="title thin">{{ images.length }} results</h3>
        <div class="margin-top">
          <CurrentTags />
        </div>

        <div class="margin-top">
          <AvailableTags />
        </div>
      </div>
    </transition>

    <b-modal :active.sync="modalOpen" scroll="clip">
      <ImageModal v-bind="modal" />
    </b-modal>
    <ServerImageGrid v-if="images.length > 0">
      <ServerImage v-for="image in images" :key="image.url" v-bind="image" @open-modal="openModal" />
    </ServerImageGrid>
  </div>
</template>

<script>
import ServerImage from "./Image";
import ServerImageGrid from "@/components/dashboard/guild/images/ImageGrid";
import { mapState } from "vuex";
import BModal from "buefy/src/components/modal/Modal";
import ImageModal from "@/components/dashboard/guild/images/ImageModal";
import AvailableTags from "./AvailableTags";
import CurrentTags from "./CurrentTags";
import { graphql } from "@/graphql";
import { images, imagesAggregate } from "@/graphql/subscriptions";

export default {
  name: "ImageBrowser",
  components: {
    CurrentTags,
    AvailableTags,
    ImageModal,
    BModal,
    ServerImageGrid,
    ServerImage
  },
  data() {
    return {
      modalOpen: false,
      modal: {}
    };
  },
  computed: {
    ...mapState("images", [
      "images",
      "page",
      "loading",
      "where",
      "limit",
      "offset"
    ]),
    ...mapState(["guilds", "currentGuild"])
  },
  methods: {
    infiniteHandler() {
      console.log("fetching more");
      this.$store.dispatch("images/incrementPage");
    },
    openModal(modal) {
      this.modalOpen = true;
      this.modal = modal;
    }
  },
  apollo: {
    $subscribe: {
      image_tags: {
        query: graphql(imagesAggregate),
        variables() {
          return {
            where: this.where
          };
        },
        result({ data }) {
          this.$store.commit("images/setTotal", data.images.aggregate.count);
        }
      },
      images: {
        query: graphql(images),
        variables() {
          this.$store.commit("images/setLoading", true);
          return {
            where: this.where,
            limit: this.limit,
            offset: this.offset
          };
        },
        result({ data }) {
          this.$emit("results-fetched");
          this.$store.commit("images/setLoading", false);
          return this.$store.commit("images/setImages", data.images);
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
.images-filter-field {
  background: $foreground-light;
  box-shadow: $shadow;
  padding: 3%;
}
.image-grid {
  padding: 0;
  @include on-tablet {
    padding: 20px;
  }
}
.grid-wrapper {
  text-align: left;
  width: 100%;
  height: 100%;
}

.pagination-item {
  position: relative;
  height: 60px;
}
.margin-top {
  margin-top: 20px;
}
.image-page-search {
  max-width: 500px;
}
</style>
