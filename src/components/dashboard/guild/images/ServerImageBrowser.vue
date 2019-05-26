<template>
  <div class="grid-wrapper">
    <vue-custom-scrollbar class="scroller">
      <ServerImageGrid>
        <div v-for="image in images" :key="image.url">
          <ServerImage v-bind="image" />
        </div>
      </ServerImageGrid>
    </vue-custom-scrollbar>
    <ServerImagePaginator class="pagination-item" />
  </div>
</template>

<script>
import ServerImage from "./ServerImage";
import ServerImageGrid from "@/components/dashboard/guild/images/ServerImageGrid";
import ServerImagePaginator from "@/components/dashboard/guild/images/ServerImagePaginator";
import { mapState } from "vuex";
import VueCustomScrollbar from "vue-custom-scrollbar/src/vue-scrollbar";

export default {
  name: "ServerImageBrowser",
  components: {
    VueCustomScrollbar,
    ServerImagePaginator,
    ServerImageGrid,
    ServerImage
  },
  computed: {
    ...mapState("images", ["images", "page"]),
    ...mapState(["guilds", "currentGuild"])
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
