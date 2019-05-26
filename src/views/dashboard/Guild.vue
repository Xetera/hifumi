<template>
  <div class="dashboard">
    <Menu class="is-hidden-mobile menu-transition" />
    <router-view class="fullwidth"></router-view>
  </div>
</template>

<script>
import Menu from "@/components/dashboard/guild/menu/Menu";
import { images, imagesAggregate } from "@/graphql/subscriptions";
import { graphql } from "@/graphql";
import { mapState } from "vuex";

export default {
  name: "Guild",
  components: { Menu },
  computed: {
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
          const { where } = this;
          return {
            where
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
.fullwidth {
  width: 100%;
}
.dashboard {
  display: flex;
  justify-content: space-between;
  @include on-tablet {
    flex-direction: row;
  }
  width: 100%;
  height: 100%;
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
