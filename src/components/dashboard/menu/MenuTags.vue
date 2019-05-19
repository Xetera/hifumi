<template>
  <div></div>
</template>

<script>
import { imageTagsAggregate } from "@/graphql/subscriptions";
import { graphql } from "@/graphql";

export default {
  name: "MenuTags",
  apollo: {
    $subscribe: {
      image_tags: {
        query: graphql(imageTagsAggregate)
      },
      max_image_tags: {
        query: graphql(imageTagsAggregate),
        result({ data }) {
          console.log("image tags");
          console.log(data);
        }
      }
    }
  }
};
</script>

<style scoped></style>
