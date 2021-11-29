<template>
  <div class="viewer" :style="currentFrame.style" @click="handlePause">
    <div class="progress-container">
      <div v-for="n in storyLength" :key="n" class="progress">
        <div v-if="currentFrame.id === n && !isPaused" class="loading"></div>
        <div v-else-if="currentFrame.id === n && isPaused" class="paused"></div>
        <div v-else-if="currentFrame.id > n" class="loaded"></div>
      </div>
    </div>
    <div class="story-text" v-if="currentFrame.text" v-html="currentFrame.text"></div>
    <ImageAttribution />
    <div class="restart-btn" v-if="storyEnd" @click="restartStory">{{ $i18n('btn-restart-story') }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ImageAttribution from '@components/ImageAttribution.vue'
export default {
  name: 'StoryViewer',
  data: () => {
    return {
      frameDuration: 2000,
      storyEnd: false,
      currentTimeout: null,
      isPaused: false
    }
  },
  components: {
    ImageAttribution
  },
  computed: mapGetters(['currentFrame', 'storyLength']),
  methods: {
    ...mapActions(['selectFrame']),
    playNextFrame: function() {
      this.currentTimeout = setTimeout( () => {
        this.selectFrame(this.currentFrame.id + 1)
        clearTimeout(this.currentTimeout)
      }, this.frameDuration)
    },
    restartStory: function() {
      this.storyEnd = false
      this.selectFrame(1)
    },
    endStory: function() {
      this.currentTimeout = setTimeout( ()=> {
        this.storyEnd = true
        clearTimeout(this.currentTimeout)
      }, this.frameDuration)
    },
    beginPause: function() {
      console.log('beginPause');
      this.isPaused = true
      clearTimeout(this.currentTimeout)
      this.currentTimeout = null
    },
    endPause: function() {
      console.log('endPause');
      this.isPaused = false
    },
    handlePause: function(e) {
      console.log('handlePause - e...', e);
      const invalidClick = e.target.className === 'restart-btn'
      if ( !this.isPaused && !invalidClick ) {
        this.beginPause()
      } else {
        this.endPause()
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
    /* TODO - ideally the animation duration is
    set as var related to frameDuration  */
    animation-duration: 2s; 
  }
  .progress .paused {
    height: 100%;
    width: 50%;
    background-color: #C4C4C4;
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
