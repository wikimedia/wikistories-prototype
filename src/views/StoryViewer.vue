<template>
  <div class="viewer" :style="currentFrame.style">
    <div class="progress-container">
      <div v-for="n in storyLength" :key="n" class="progress">
        <div v-if="currentFrame.id === n" class="loading"></div>
        <div v-else-if="currentFrame.id > n" class="loaded"></div>
      </div>
    </div>
    <div class="story-text" v-if="currentFrame.text">{{ currentFrame.text }}</div>
    <div class="restart-btn" v-if="currentFrame.id === storyLength" @click="selectFrame(1)">Start again</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'StoryViewer',
  data: () => {
    return {
      frameDuration: 2000
    }
  },
  computed: mapGetters(['currentFrame', 'storyLength']),
  methods: {
    ...mapActions(['selectFrame']),
    playNextFrame: (currentFrameId, nextFrame, duration) => {
      const timeoutId = setTimeout( () => {
        nextFrame(currentFrameId + 1)
        clearTimeout(timeoutId)
      }, duration)
    }
  },
  beforeMount: function() {
    if (this.currentFrame.id > 1) {
      this.selectFrame(1)
    }
  },
  mounted: function() {
    if (this.currentFrame.id < this.storyLength) {
      this.playNextFrame(this.currentFrame.id, this.selectFrame, this.frameDuration)
    }
  },
  updated: function() {
    if (this.currentFrame.id < this.storyLength) {
      this.playNextFrame(this.currentFrame.id, this.selectFrame, this.frameDuration)
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
  .story-text {
    position: absolute;
    bottom: 80px;
    left: 20px;
    right: 20px;
    border-radius: 10px;
    background-color: white;
    margin: 0;
    padding: 10px;
  }
  .restart-btn {
    position: absolute;
    bottom: 20px;
    left: 0px;
    right: 0px;
    margin: auto;
    background-color: white;
    padding: 8px;
    font-weight: bold;
    width: 90px;
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
    /* TODO - ideally the animation duration is
    set as var related to frameDuration  */
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
