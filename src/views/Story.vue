<template>
    <div class="view">
        <div class="story">
            <CurrentFrame />
        </div>
        <div class="footer">
            <Frames />
            <SearchToolbar />
        </div>
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
        height: 100%;
    }
    .footer {
        position: fixed;
        bottom: 0px;
        background: #FFFFFF;
    }
</style>