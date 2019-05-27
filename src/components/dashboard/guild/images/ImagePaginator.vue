<template>
  <div class="wrapper">
    <b-pagination
      size="is-small"
      class="paginator"
      icon-pack="fas"
      order="is-centered"
      :total="total"
      :current="page"
      :per-page="limit"
      @change="change"
    />
  </div>
</template>

<script>
import BPagination from "buefy/src/components/pagination/Pagination";
import { mapState } from "vuex";
export default {
  name: "ImagePaginator",
  components: { BPagination },
  computed: mapState("images", ["total", "current", "where", "limit", "page"]),
  methods: {
    change(count) {
      this.$store.dispatch("images/setPage", count);
    }
  }
};
</script>

<style scoped lang="scss">
.paginator {
  margin: 0 auto;
  width: 80%;
}
.pagination-link {
  color: $primary !important;
}
.wrapper {
  @include center;
}
</style>
