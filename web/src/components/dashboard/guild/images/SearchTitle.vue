<template>
  <div class="images-title-wrapper">
    <h1 class="images-title">{{ search }}</h1>
    <h2 v-if="results">{{ results }} results</h2>
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
      optional: true,
      default: "All Images"
    }
  }
};
</script>

<style scoped>
.images-title-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.images-title {
  font-size: 24px;
  font-weight: 300;
}
</style>
