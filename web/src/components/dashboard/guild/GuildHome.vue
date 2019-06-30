<template>
  <div>
    <div v-for="contributor in contributors" :key="contributor.user.user_id">
      <div>{{ contributor.user.name }} contributors</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import { graphql } from "@/graphql";
import { contributors } from "@/graphql/queries";

export default {
  name: "GuildHome",
  computed: {
    ...mapState("guild", ["contributors"]),
    ...mapGetters(["guild"])
  },
  methods: mapMutations("guild", ["setContributors"]),
  apollo: {
    contributors: {
      query: graphql(contributors),
      variables() {
        return {
          guild_id: this.guild.guild_id
        };
      },
      result({ data }) {
        console.log(data.contributors);
        this.setContributors(data.contributors);
      }
    }
  }
};
</script>

<style scoped></style>
