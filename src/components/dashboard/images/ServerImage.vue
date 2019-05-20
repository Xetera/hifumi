<template>
  <div class="image-wrapper">
    <img :src="proxyImage" alt="image" v-if="url" />
  </div>
</template>

<script>
import { proxy } from "@/config";

export default {
  name: "ServerImage",
  props: {
    url: String
  },
  computed: {
    proxyImage() {
      return proxy(this.url);
    }
  }
};
</script>

<style scoped></style>
