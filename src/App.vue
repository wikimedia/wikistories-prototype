<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted: () => {
      setStylePropertyVh();
      window.addEventListener('resize', setStylePropertyVh );
    },
    beforeUnmount: () => {
      window.removeEventListener('resize', setStylePropertyVh );
    }
  }

  // app height and sticky footer
  const setStylePropertyVh = () => {
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
</script>

<style>
body {
  background-color: black;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  background-color: white;
  width: 100vw;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
}
.view {
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
}
</style>
