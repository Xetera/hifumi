<template>
  <div>
    <img :src="url" alt="image" />
  </div>
</template>

<script>
export default {
  name: "ServerImage",
  props: {
    url: String
  }
};
</script>

<style scoped></style>
