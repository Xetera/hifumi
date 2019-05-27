<template>
  <div class="grid-wrapper">
    <b-modal :active.sync="modalOpen">
      <ImageModal v-bind="modal" />
    </b-modal>
    <vue-custom-scrollbar class="scroller">
      <ServerImageGrid>
        <div v-for="image in images" :key="image.url">
          <ServerImage v-bind="image" @open-modal="openModal" />
        </div>
      </ServerImageGrid>
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
  @include flex-col;
  padding: 10px;
  width: 100%;
  max-height: 100%;
  height: 100%;
  overflow-y: auto;
  justify-content: space-between;
}

.scroller {
  overflow-x: hidden;
}
.pagination-item {
  position: relative;
}
</style>
