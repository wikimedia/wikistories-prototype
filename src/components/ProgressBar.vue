<template>
  <div class="progress-container">
    <div v-for="n in storyLength" :key="n" class="progress">
      <div :class="{ loading: currentFrame.id === n, paused: isPaused, loaded: currentFrame.id > n}" :style="{ animationDuration: animationDuration }"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProgressBar',
  props: ['frameDuration','isPaused'],
  computed: {
    ...mapGetters(['currentFrame', 'storyLength']),
    animationDuration: function () {
      return this.frameDuration / 1000 + 's'
    }
  }
}
</script>

<style scoped>
  .progress-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 10px 0;
  }
  .progress {
    height: 4px;
    flex-grow: 1;
    margin: 0 5px;
    display: flex;
    background-color: #C4C4C4;
  }
  .progress .loading {
    height: 100%;
    width: 100%;
    background-color: #FFFFFF;
    animation-name: loading;
    animation-iteration-count: 1;
  }
  .progress .paused {
    animation-play-state: paused;
  }
  .progress .loaded {
    height: 100%;
    width: 100%;
    background-color: #FFFFFF;
  }
  @keyframes loading {
    from { width: 0%; } 
    to { width: 100%; }
  }
</style>

