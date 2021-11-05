<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      setStylePropertyVh() {        
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`); 
      }
    },
    mounted() {
      this.setStylePropertyVh();
      window.addEventListener('resize', this.setStylePropertyVh );
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.setStylePropertyVh );
    }
  }
</script>

<style>
body {
  background-color: black;
  margin: 0;
  padding: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  background-color: white;
  width: 100%;
  max-width: 500px;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
}
.view {
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  position: relative;
}
</style>
