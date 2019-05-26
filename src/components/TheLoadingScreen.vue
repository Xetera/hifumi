<template>
  <div class="loading-container">
    <video src="../assets/loading.webm" class="loading" autoplay loop></video>
  </div>
</template>

<style scoped>
.loading-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f5b7fb;
  transition: 0.4s ease-in-out;
}
.loading {
  position: absolute;
  width: 65%;
}
@media (max-width: 767px) {
  .loading {
    width: 100%;
  }
}
</style>
