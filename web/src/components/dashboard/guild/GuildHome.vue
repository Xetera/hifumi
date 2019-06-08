<template>
  <div>
    <div>
      <p>{{ guild.name }}</p>
    </div>
    <div>contributors</div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { graphql } from "@/graphql";
import { contributors } from "@/graphql/queries";

export default {
  name: "GuildHome",
  computed: {
    ...mapState("guild", ["contributors"]),
    ...mapGetters(["guild"])
  },
  apollo: {
    contributors: {
      query: graphql(contributors),
      variables() {
        return {
          guild: this.guild.guild_id
        };
      },
      data({ data }) {
        console.log(data);
        this.$store.commit(
          "guild/setContributors",
          data.images_aggregate.aggregate.count
        );
      }
    }
  }
};
</script>

<style scoped></style>
