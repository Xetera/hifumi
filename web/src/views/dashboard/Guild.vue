<template>
  <div class="dashboard">
    <GuildHeader :banner="guild.banner" :server-image="guild.icon" :name="guild.name" />
    <router-view class="fullwidth"></router-view>
  </div>
</template>

<script>
import { images, imagesAggregate } from "@/graphql/subscriptions";
import { graphql } from "@/graphql";
import { mapGetters, mapState } from "vuex";
import GuildHeader from "../../components/dashboard/guild/GuildHeader";

export default {
  name: "Guild",
  components: { GuildHeader },
  computed: {
    ...mapGetters(["guild"]),
    ...mapState("images", ["limit", "offset", "where"])
  },
  props: {
    guild_id: String
  },
  watch: {
    "$route.params.guild_id": async function(id) {
      await this.$store.commit("images/reset");
      return this.$store.dispatch("images/setWhereGuild", id);
    }
  },
  async created() {
    await this.$store.dispatch(
      "images/setWhereGuild",
      this.$route.params.guild_id
    );
  },
  apollo: {
    $subscribe: {
      image_tags: {
        query: graphql(imagesAggregate),
        variables() {
          return {
            where: this.where
          };
        },
        result({ data }) {
          this.$store.commit("images/setTotal", data.images.aggregate.count);
        }
      },
      images: {
        query: graphql(images),
        variables() {
          const { where, limit, offset } = this;
          return {
            where,
            limit,
            offset
          };
        },
        result({ data }) {
          return this.$store.commit("images/setImages", data.images);
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
.menu-transition {
  animation: slide-down 0.3s ease-in-out;
}
.dashboard {
  @include flex-col;
  width: 100%;
  overflow-y: auto;
}
@keyframes slide-down {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}
</style>
