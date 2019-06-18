<template>
  <v-app dark>
    <!--    <transition name="fade">-->
    <!--      <TheLoadingScreen v-if="!isAuthed" />-->
    <!--    </transition>-->

    <router-view v-if="ready" />
  </v-app>
</template>

<script>
// import TheLoadingScreen from "./components/TheLoadingScreen";
import { snackbar } from "./utils/ui";
import { mapState } from "vuex";

const OOPS_MESSAGE_TIMEOUT = 6500;
export default {
  created() {
    this.checkStatus();
    setTimeout(this.handleTimeout, OOPS_MESSAGE_TIMEOUT);
  },
  computed: mapState(["isAuthed"]),
  methods: {
    async checkStatus() {
      // await this.$store.dispatch("getUser");
      this.ready = true;
    },
    handleTimeout() {
      if (this.ready) {
        return;
      }
      this.ready = true;
      snackbar.serverDown();
    }
  },
  data() {
    return {
      ready: false
    };
  }
};
</script>

<style lang="scss">
@import "assets/scss/variables";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
