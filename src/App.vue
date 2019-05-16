<template>
  <transition name="fade">
    <LoadingScreen v-if="!ready" />
    <div id="app" v-if="ready">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </div>
  </transition>
</template>

<script>
import LoadingScreen from "./components/LoadingScreen";
import { snackbar } from "./utils/ui";

const OOPS_MESSAGE_TIMEOUT = 6500;

export default {
  components: { LoadingScreen },
  mounted() {
    this.checkStatus();
    setTimeout(this.handleTimeout, OOPS_MESSAGE_TIMEOUT);
  },
  methods: {
    async checkStatus() {
      try {
        await this.$store.dispatch("checkLogin");
        console.log(this.$store.isAuthed);
      } catch (err) {
        console.err(err);
      }
    },
    handleTimeout() {
      if (!this.ready) {
        this.ready = true;
        snackbar.serverDown();
      }
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
