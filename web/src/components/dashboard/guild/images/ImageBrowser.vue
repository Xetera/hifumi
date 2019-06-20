<template>
  <vue-custom-scrollbar class="scroller">
    <div class="grid-wrapper">
      <div class="images-filter-field">
        <SearchTitle
          search="Newgame"
          :tags="['hifumi', 'cute']"
          :results="images.length"
        />
        <div class="margin-top image-page-search">
          <SearchBar class="padding-top" />
        </div>

        <div class="margin-top">
          <CurrentTags />
        </div>

        <div class="margin-top">
          <AvailableTags />
        </div>
      </div>

      <b-modal :active.sync="modalOpen">
        <ImageModal v-bind="modal" />
      </b-modal>
      <div class="margin-top">
        <ServerImageGrid v-if="images.length > 0" >
          <!--        <b-loading :active.sync="loading" />-->
          <ServerImage
            v-for="image in images"
            :key="image.url"
            v-bind="image"
            @open-modal="openModal"
          />
        </ServerImageGrid>
      </div>
      <div v-if="images.length === 0">
        <p>Looks like this server hasn't tagged any images yet</p>
      </div>
    </div>
  </vue-custom-scrollbar>
</template>

<script>
import ServerImage from "./Image";
import ServerImageGrid from "@/components/dashboard/guild/images/ImageGrid";
import { mapState } from "vuex";
import VueCustomScrollbar from "vue-custom-scrollbar/src/vue-scrollbar";
import BModal from "buefy/src/components/modal/Modal";
import ImageModal from "@/components/dashboard/guild/images/ImageModal";
import SearchBar from "./SearchBar";
import SearchTitle from "./SearchTitle";
import AvailableTags from "./AvailableTags";
import CurrentTags from "./CurrentTags";

export default {
  name: "ImageBrowser",
  components: {
    CurrentTags,
    AvailableTags,
    SearchTitle,
    SearchBar,
    ImageModal,
    BModal,
    VueCustomScrollbar,
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
    ...mapState("images", ["images", "page", "loading"]),
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
.images-filter-field {
  background: #202226;
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
  /*padding: 3%;*/
  width: 100%;
  max-height: 100%;
  height: 100%;
  overflow-y: auto;
}

.scroller {
  overflow-x: hidden;
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
