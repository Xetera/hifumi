<template>
  <b-pagination @change="change" total="20" />
</template>

<script>
import BPagination from "buefy/src/components/pagination/Pagination";
export default {
  name: "ServerImagePaginator",
  components: { BPagination },
  props: {
    total: Number,
    change: Function
  }
};
</script>

<style scoped></style>
