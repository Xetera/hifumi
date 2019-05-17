<template>
  <div>Dashboard-sama</div>
</template>

<script>
export default {
  name: "Dashboard",
  async created() {
    console.log("dashboard mounted");

    await this.$store.dispatch("subscribe");
  }
};
</script>

<style scoped></style>
