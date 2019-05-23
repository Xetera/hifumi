<template>
  <div class="server-image-wrapper">
    <img class="server-image" :src="proxyImage" alt="image" v-if="url" />
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

<style scoped lang="scss">
@import "../../../assets/scss/variables";
.server-image-wrapper {
  cursor: pointer;
  box-shadow: $shadow;
  width: $image-width;
  background-color: $background-darker;
  padding: 5px;
  height: $image-height + 50px;
  display: flex;
}
.server-image {
  width: $image-width;
  height: $image-height;
}
</style>
