<template>
  <div class="viewer" :style="currentFrame.style" @mousedown="handlePause" @touchstart="beginPause" @touchend="endPause">
    <ProgressBar :isPaused="isPaused" :frameDuration="frameDuration" />
    <div class="story-text" v-if="currentFrame.text" v-html="currentFrame.text"></div>
    <ImageAttribution />
    <div class="restart-btn" v-if="storyEnd" @click="restartStory">{{ $i18n('btn-restart-story') }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ImageAttribution from '@components/ImageAttribution.vue'
import ProgressBar from '@components/ProgressBar.vue'
export default {
  name: 'StoryViewer',
  data: () => {
    return {
      frameDuration: 6000,
      frameStarting: null,
      frameRemaining: null,
      storyEnd: false,
      currentTimeout: null,
      isPaused: false
    }
  },
  components: {
    ImageAttribution,
    ProgressBar
  },
  computed: {
    ...mapGetters(['currentFrame', 'storyLength'])
  },
  methods: {
    ...mapActions(['selectFrame']),
    setFrameTimeout: function(f) {
      const duration = this.frameRemaining ? this.frameRemaining : this.frameDuration
      this.frameStarting = Date.now()
      this.currentTimeout = setTimeout( () => {
        f()
        this.frameRemaining = null
        this.frameStarting = null
        this.currentTimeout = null
      }, duration)
    },
    playNextFrame: function() {
      const playNext = () => this.selectFrame(this.currentFrame.id + 1)
      this.setFrameTimeout(playNext)
    },
    restartStory: function() {
      this.storyEnd = false
      this.selectFrame(1)
      this.frameRemaining = null
      this.frameStarting = null
      this.currentTimeout = null
    },
    endStory: function() {
      const end = () => this.storyEnd = true
      this.setFrameTimeout(end)
    },
    isPauseAction: function(e) {
      const invalidClick = e.target.className === 'restart-btn'
      return !invalidClick && !this.storyEnd
    },
    beginPause: function(e) {
      this.frameRemaining = this.frameDuration - Math.abs(this.frameStarting - Date.now())
      if (this.isPauseAction(e)) {
        e.preventDefault()
        e.stopPropagation()
        clearTimeout(this.currentTimeout)
        this.currentTimeout = null
        this.isPaused = true
      }
    },
    endPause: function(e) {
      if (this.isPauseAction(e)) {
        e.preventDefault()
        e.stopPropagation()
        this.isPaused = false
      }
    },
    handlePause: function(e) {
      if (this.isPauseAction(e)) {
        this.isPaused ? this.endPause(e) : this.beginPause(e)
      }
    }
  },
  beforeMount: function() {
    if (this.currentFrame.id > 1) {
      this.restartStory()
    }
  },
  mounted: function() {
    if (this.currentFrame.id < this.storyLength) {
      this.playNextFrame()
    }
  },
  updated: function() {
    if (this.currentFrame.id < this.storyLength && !this.isPaused) {
      this.playNextFrame()
    } else if(!this.storyEnd && !this.isPaused) {
      this.endStory()
    }
  }
}
</script>

<style scoped>
  .viewer {
    height: 100%;
    width: 100%;
    position: relative;
    text-align: center;
  }
  .story-text {
    position: absolute;
    bottom: 90px;
    left: 20px;
    right: 20px;
    border-radius: 10px;
    background-color: white;
    margin: 0;
    padding: 10px;
  }
  .restart-btn {
    position: absolute;
    bottom: 40px;
    left: 0px;
    right: 0px;
    margin: auto;
    background-color: white;
    padding: 8px;
    font-weight: bold;
    width: 90px;
    cursor: pointer;
  }
</style>
