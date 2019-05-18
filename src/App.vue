<template>
  <div id="app">
    <transition name="fade">
      <TheLoadingScreen v-if="!ready" />
    </transition>
    <TheNavbar />
    <router-view />
  </div>
</template>

<script>
import TheLoadingScreen from "./components/TheLoadingScreen";
import { snackbar } from "./utils/ui";
import TheNavbar from "@/components/dashboard/TheNavbar";

const OOPS_MESSAGE_TIMEOUT = 6500;

export default {
  components: { TheLoadingScreen, TheNavbar },
  created() {
    this.checkStatus();
    setTimeout(this.handleTimeout, OOPS_MESSAGE_TIMEOUT);
  },
  methods: {
    async checkStatus() {
      await this.$store.dispatch("checkLogin");
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
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
