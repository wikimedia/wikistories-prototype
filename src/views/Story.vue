<template>
<div class="view story">
    <CurrentFrame />
    <Frames />
</div>
</template>
<script>
import CurrentFrame from '../components/CurrentFrame.vue'
import Frames from '../components/Frames.vue'

export default {
  name: 'Story',
  components: {
        CurrentFrame,
        Frames
  }
}
</script>
<style>
    .story {
        display: flex;
        flex-direction: column;
    }
</style>