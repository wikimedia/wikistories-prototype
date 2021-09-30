<template>
  <div class="viewer" :style="currentFrame.style">
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
</style>
