<template>
  <div>
    <div v-for="image in images" :key="image.url">
      <ServerImage v-bind="image" />
    </div>
  </div>
</template>

<script>
import ServerImage from "./ServerImage";
import gql from "graphql-tag";
import { images } from "@/graphql/subscriptions";

export default {
  name: "ServerImageBrowser",
  components: { ServerImage },
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

<style scoped></style>
