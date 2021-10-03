<template>
<div class="view story">
    <router-link class="publish-button" to="/publish">{{ $i18n('btn-publish') }}</router-link>
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
    .publish-button {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 100;
        background-color: white;
        border-radius: 10px;
        padding: 10px;
    }
</style>