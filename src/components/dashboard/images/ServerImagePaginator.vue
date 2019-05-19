<template>
  <b-pagination
    @change="change"
    :total="total"
    :current="current"
    :per-page="limit"
  />
</template>

<script>
import BPagination from "buefy/src/components/pagination/Pagination";
import { mapState } from "vuex";
import { imagesAggregate } from "@/graphql/subscriptions";
import gql from "graphql-tag";
export default {
  name: "ServerImagePaginator",
  components: { BPagination },
  computed: mapState("images", ["total", "current", "where"]),
  apollo: {
    $subscribe: {
      image_tags: {
        query: gql`
          ${imagesAggregate}
        `,
        variables() {
          return {
            where: this.where
          };
        },
        result({ data }) {
          console.log(data);
        }
      }
    }
  }
};
</script>

<style scoped></style>
