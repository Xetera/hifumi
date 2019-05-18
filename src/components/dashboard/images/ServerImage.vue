<template>
  <div class="image-wrapper">
    <img :src="proxyImage" alt="image" />
  </div>
</template>

<script>
import { proxy } from "@/config";

export default {
  name: "ServerImage",
  props: {
    url: String,
    image_tags: Array
  },
  computed: {
    proxyImage() {
      return proxy(this.url);
    }
  }
};
</script>

<style scoped>
.image-wrapper {
  width: 200px;
}
</style>
