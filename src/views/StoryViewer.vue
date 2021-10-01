<template>
  <div class="viewer" :style="currentFrame.style">
    <div class="progress-container">
      <div v-for="n in storyLength" :key="n" class="progress">
        <div v-if="currentFrame.id === n" class="loading"></div>
        <div v-else-if="currentFrame.id > n" class="loaded"></div>
      </div>
    </div>
    <p v-if="currentFrame.text">{{ currentFrame.text }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'StoryViewer',
  computed: mapGetters(['currentFrame', 'storyLength']),
  methods: {
    ...mapActions(['selectFrame']),
    playNextFrame: (currentFrameId, nextFrame) => {
      const timeoutId = setTimeout( () => {
        nextFrame(currentFrameId + 1)
        clearTimeout(timeoutId)
      }, 2000)
    }
  },
  beforeMount: function() {
    if (this.currentFrame.id > 1) {
      this.selectFrame(1)
    }
  },
  mounted: function() {
    if (this.currentFrame.id < this.storyLength) {
      this.playNextFrame(this.currentFrame.id, this.selectFrame)
    }
  },
  updated: function() {
    if (this.currentFrame.id < this.storyLength) {
      this.playNextFrame(this.currentFrame.id, this.selectFrame)
    }
  }
}
</script>

<style>
  .viewer {
    height: 100%;
    width: 100vw;
    position: relative;
    text-align: center;
  }
  p {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    border-radius: 10px;
    background-color: white;
    margin: 0;
    padding: 10px;
  }
  .progress-container {
    display: flex;
    flex-direction: row;
    width: 100vw;
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
    animation-duration: 2s;
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
