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

export default {
  name: "ServerImageBrowser",
  components: { ServerImagePaginator, ServerImageGrid, ServerImage },
  data() {
    return {
      images: []
    };
  },
  apollo: {
    $subscribe: {
      images: {
        query: gql`
          ${images}
        `,
        variables() {
          return {
            where: {}
          };
        },
        result({ data }) {
          this.images = data.images;
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
