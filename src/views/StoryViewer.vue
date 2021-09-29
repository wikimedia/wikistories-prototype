<template>
  <div class="viewer" :style="currentFrame.style">
    <p v-if="currentFrame.text">{{ currentFrame.text }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'StoryViewer',
  computed: mapGetters(['currentFrame']),
  methods: {
    ...mapActions(['selectFrame']),
    playNextFrame: (currentFrameId, nextFrame) => {
      const timeoutId = setTimeout( () => {
        nextFrame(currentFrameId + 1)
        clearTimeout(timeoutId)
      }, 2000)
    }
  },
  mounted: function() {
    const currentFrameId = this.$store.getters.currentFrame.frameId
    const storyEnd = this.$store.getters.framesLength
    if (currentFrameId < storyEnd) {
      this.playNextFrame(currentFrameId, this.selectFrame)
    }
  },
  updated: function() {
    const currentFrameId = this.$store.getters.currentFrame.frameId
    const storyEnd = this.$store.getters.framesLength
    if (currentFrameId < storyEnd) {
      this.playNextFrame(currentFrameId, this.selectFrame)
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