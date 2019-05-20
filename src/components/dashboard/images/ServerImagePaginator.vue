<template>
  <b-pagination
    class="paginator"
    order="is-centered"
    :total="1000"
    :current.sync="current"
    :per-page="limit"
    aria-next-label="Next Page"
    aria-previous-label="Previous Page"
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
  computed: mapState("images", ["total", "current", "where", "limit"]),
  methods() {},
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

<style scoped lang="scss">
@import "../../../assets/scss/_variables.scss";
.paginator {
  margin: 0 auto;
  width: 80%;
}
.pagination-link {
  color: $primary !important;
}
</style>
