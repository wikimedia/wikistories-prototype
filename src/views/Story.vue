<template>
<div class="view story">
    <CurrentFrame />
    <Frames />
    <SearchToolbar />
</div>
</template>
<script>
import CurrentFrame from '@components/CurrentFrame.vue'
import Frames from '@components/Frames.vue'
import SearchToolbar from '@components/SearchToolbar.vue'

export default {
  name: 'Story',
  components: {
        CurrentFrame,
        Frames,
        SearchToolbar
  }
}
</script>
<style>
    .story {
        display: flex;
        flex-direction: column;
    }
</style>