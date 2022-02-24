<template>
  <div v-if="loading" class="loading-page">
    <img
      class="h-12 md:h-16 w-auto loader-icon"
      src="../assets/lideka-home-alt.svg"
      alt="Lideka Home"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      setTimeout(() => {
        this.loading = false;
      }, 200);
    },
  },
};
</script>

<style scoped>
@keyframes breathe {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 200;
}
.loader-icon {
  animation: breathe linear 1.1s infinite;
}
</style>
