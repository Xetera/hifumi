<template>
  <div>
    <Label>Available Tags - {{ tags.length }}</Label>
    <div class="available-tags">
      <div class="available-tag-wrapper" v-for="tag in tags" :key="tag.name">
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
    ...mapState("tags", ["tags", "tagCount"]),
    ...mapState("images", ["where"])
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
          await this.$store.dispatch("tags/setTags", data.tags);
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
