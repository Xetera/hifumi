<template>
  <div class="grid-wrapper">
    <ServerImageGrid>
      <div v-for="image in images" :key="image.url">
        <ServerImage v-bind="image" />
      </div>
    </ServerImageGrid>
    <ServerImagePaginator />
  </div>
</template>

<script>
import ServerImage from "../images/ServerImage";
import gql from "graphql-tag";
import { images } from "@/graphql/subscriptions";
import ServerImageGrid from "@/components/dashboard/images/ServerImageGrid";
import ServerImagePaginator from "@/components/dashboard/images/ServerImagePaginator";
import { mapGetters, mapState } from "vuex";

export default {
  name: "ServerImageBrowser",
  components: { ServerImagePaginator, ServerImageGrid, ServerImage },
  computed: {
    ...mapState("images", ["images", "page"]),
    ...mapGetters("images", ["where"]),
    ...mapState(["guilds", "currentGuild"])
  },
  mounted() {
    console.log(this.$store.getters["images/where"]);
  },
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
          return this.$store.commit("images/setImages", data.images);
        }
      }
    }
  }
};
</script>

<style scoped>
.grid-wrapper {
  width: 100%;
  max-height: 100%;
}
</style>
