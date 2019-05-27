<template>
  <div>
    <img :src="url" alt="modal-image" />
  </div>
</template>

<script>
export default {
  name: "ImageModal",
  props: {
    user: Object,
    url: String
  }
};
</script>

<style scoped></style>
