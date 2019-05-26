<template>
  <ul>
    <li v-for="tag in tags" :key="tag.name">
      <a>{{ tag.name }}</a>
    </li>
  </ul>
</template>

<script>
import { imageTags, imageTagsAggregate } from "@/graphql/subscriptions";
import { graphql } from "@/graphql";
import { mapGetters, mapState } from "vuex";

export default {
  name: "MenuTags",
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
      },
      max_image_tags: {
        query: graphql(imageTagsAggregate),
        variables() {
          return { where: this.where };
        },
        result({ data }) {
          console.log("image tags aggregate");
          console.log(data);
        }
      }
    }
  }
};
</script>

<style scoped></style>
