<template>
  <div>
    <Label>Current Tags</Label>
    <h2 v-if="!currentTags.length" class="current-tags-placeholder">
      Click on an available tag to filter results
    </h2>
    <div class="image-current-tags">
      <div
        v-for="tag in currentTags"
        :key="tag.name"
        class="image-current-tag-wrapper"
      >
        <CurrentTag :name="tag.name" @close="add" />
      </div>
    </div>
  </div>
</template>

<script>
import Label from "../../Label";
import CurrentTag from "./CurrentTag";
import { mapState } from "vuex";
export default {
  name: "CurrentTags",
  components: { CurrentTag, Label },
  computed: mapState("images", ["currentTags"]),
  methods: {
    add(tag) {
      this.$store.dispatch("images/removeSelected", tag);
    }
  }
};
</script>

<style scoped lang="scss">
.image-current-tag-wrapper {
  margin-top: 10px;
  margin-right: 10px;
}
.image-current-tags {
  display: flex;
  flex-flow: row wrap;
}
  .current-tags-placeholder {
    display: flex;
    align-items: center;
    min-height: 44px;
  }
</style>
