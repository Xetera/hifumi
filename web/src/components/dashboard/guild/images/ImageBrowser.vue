<template>
  <div class="grid-wrapper">
    <b-modal :active.sync="modalOpen">
      <ImageModal v-bind="modal" />
    </b-modal>
    <vue-custom-scrollbar class="scroller">
      <ServerImageGrid v-if="images.length > 0">
        <ServerImage
          v-for="image in images"
          :key="image.url"
          v-bind="image"
          @open-modal="openModal"
        />
      </ServerImageGrid>
      <div v-if="images.length === 0">
        <p>Looks like this server hasn't tagged any images yet</p>
      </div>
    </vue-custom-scrollbar>
    <ServerImagePaginator class="pagination-item" />
  </div>
</template>

<script>
import ServerImage from "./Image";
import ServerImageGrid from "@/components/dashboard/guild/images/ImageGrid";
import ServerImagePaginator from "@/components/dashboard/guild/images/ImagePaginator";
import { mapState } from "vuex";
import VueCustomScrollbar from "vue-custom-scrollbar/src/vue-scrollbar";
import BModal from "buefy/src/components/modal/Modal";
import ImageModal from "@/components/dashboard/guild/images/ImageModal";

export default {
  name: "ImageBrowser",
  components: {
    ImageModal,
    BModal,
    VueCustomScrollbar,
    ServerImagePaginator,
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
    ...mapState("images", ["images", "page"]),
    ...mapState(["guilds", "currentGuild"])
  },
  methods: {
    openModal(modal) {
      console.log(modal);
      this.modalOpen = true;
      this.modal = modal;
    }
  }
};
</script>

<style scoped lang="scss">
.grid-wrapper {
  @include on-desktop {
    padding: 10px;
  }
  @include flex-col;
  width: 100%;
  max-height: 100%;
  height: 100%;
  overflow-y: auto;
  justify-content: space-between;
}

.scroller {
  overflow-x: hidden;
  height: 100%;
}
.pagination-item {
  position: relative;
  height: 60px;
}
</style>
