<template>
  <div id="app">
    <transition name="fade">
      <LoadingScreen v-if="!ready" />
    </transition>
    <router-view />
  </div>
</template>

<script>
import LoadingScreen from "./components/LoadingScreen";
import { snackbar } from "./utils/ui";

const OOPS_MESSAGE_TIMEOUT = 6500;

export default {
  components: { LoadingScreen },
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
      ready: !this.$store.state.isAuthed
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
