<template>
  <div>
    <Label>Current Tags</Label>
    <CurrentTag name="hifumi" />
  </div>
</template>

<script>
import Label from "../../Label";
import CurrentTag from "./CurrentTag";
export default {
  name: "CurrentTags",
  components: { CurrentTag, Label }
};
</script>

<style scoped></style>
