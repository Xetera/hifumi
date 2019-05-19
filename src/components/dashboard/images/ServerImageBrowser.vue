<template>
  <div class="image-grid">
    <ServerImageGrid>
      <div v-for="image in images" :key="image.url">
        <ServerImage v-bind="image" />
      </div>
    </ServerImageGrid>
    <ServerImagePaginator />
  </div>
</template>

<script>
import ServerImage from "./ServerImage";
import gql from "graphql-tag";
import { images } from "@/graphql/subscriptions";
import ServerImageGrid from "@/components/dashboard/images/ServerImageGrid";
import ServerImagePaginator from "@/components/dashboard/images/ServerImagePaginator";
import { mapState } from "vuex";

export default {
  name: "ServerImageBrowser",
  components: { ServerImagePaginator, ServerImageGrid, ServerImage },
  computed: mapState("images", ["images", "page", "where"]),
  apollo: {
    $subscribe: {
      images: {
        query: gql`
          ${images}
        `,
        variables() {
          return {
            where: this.where
          };
        },
        result({ data }) {
          console.log(data);
          return this.$store.dispatch("images/setImages", data.images);
        }
      }
    }
  }
};
</script>

<style scoped>
.image-grid {
  width: 100%;
}
</style>
