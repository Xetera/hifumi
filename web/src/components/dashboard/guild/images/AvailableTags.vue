<template>
  <div>
    <Label>Available Tags - {{ tags.length }}</Label>
    <div class="available-tags">
      <div v-if="!tags.length">
        Looks like you don't have any tagged images
      </div>
      <div
        class="available-tag-wrapper"
        v-for="tag in tags"
        :key="tag.name"
        @click="add(tag)"
      >
        <AvailableTag :name="tag.name" :count="tag.count" />
      </div>
    </div>
  </div>
</template>

<script>
import { imageTags } from "@/graphql/subscriptions";
import { graphql } from "@/graphql";
import { mapGetters, mapState } from "vuex";
import AvailableTag from "./AvailableTag";
import Label from "../../Label";

export default {
  name: "AvailableTags",
  components: { Label, AvailableTag },
  computed: {
    ...mapGetters(["guild"]),
    ...mapState("images", ["where", "tags"])
  },
  methods: {
    add(tag) {
      this.$store.dispatch("images/addSelected", tag.name)
    }
  },
  apollo: {
    $subscribe: {
      image_tags: {
        query: graphql(imageTags),
        variables() {
          return { where: this.where };
        },
        async result({ data }) {
          console.log("image tags");
          console.log(data);
          await this.$store.dispatch("images/setTags", data.tags);
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
.available-tag-wrapper {
  margin-top: 10px;
  margin-right: 10px;
}
.available-tags {
  display: flex;
  flex-flow: row wrap;
}
</style>
