<template>
  <div class="home">
    <WelcomeScreen />
  </div>
</template>

<script>
import WelcomeScreen from "../components/home/WelcomeScreen";

export default {
  name: "home",
  components: { WelcomeScreen },
  mounted() {
    console.log(this.$store.getters.isAuthed);
  }
};
</script>
<style>
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
