<template>
  <div class="images-title-wrapper">
    <h1 class="images-title">{{ searchString }}</h1>
<!--    <p v-if="results" class="images-count">{{ results }} results</p>-->
  </div>
</template>

<script>
export default {
  name: "SearchTitle",
  props: {
    results: {
      type: Number,
      optional: true
    },
    search: {
      type: String,
      optional: true
    },
    tags: {
      type: Array,
      optional: true
    }
  },
  computed: {
    searchString() {
      if (!this.results && !this.search) {
        return "All images";
      }
      if (!this.tags) {
        return this.search;
      }
      const tags = this.tags.join(" & ");
      if (!this.search) {
        return tags;
      }
      return [this.search, tags].join(" with ");
    }
  }
};
</script>

<style scoped>
.images-title-wrapper {
  display: inline-flex;
  align-items: center;
}

.images-title {
  font-size: 24px;
  font-weight: 300;
}
  .images-count {
    font-size: 20px;
  }
</style>
