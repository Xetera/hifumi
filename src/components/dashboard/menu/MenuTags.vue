<template>
  <div>
    <ul>
      <li v-for="tag in tags" :key="tag.name">
        <a>{{ tag.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { imageTags, imageTagsAggregate } from "@/graphql/subscriptions";
import { graphql } from "@/graphql";
import { mapState } from "vuex";

export default {
  name: "MenuTags",
  computed: mapState("tags", ["tags", "tagCount"]),
  apollo: {
    $subscribe: {
      image_tags: {
        query: graphql(imageTags),
        async result({ data }) {
          console.log("image tags");
          console.log(data);
          await this.$store.dispatch("tags/setTags", data.tags);
        }
      },
      max_image_tags: {
        query: graphql(imageTagsAggregate),
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
