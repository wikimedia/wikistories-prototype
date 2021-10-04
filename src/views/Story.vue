<template>
<div class="view story">
    <PrimaryButton class="publish-button" :text="$i18n('btn-publish')" :onClick="() => this.$router.push( { name: 'Publish' } )" />
    <CurrentFrame />
    <Frames />
    <SearchToolbar />
</div>
</template>
<script>
import CurrentFrame from '@components/CurrentFrame.vue'
import Frames from '@components/Frames.vue'
import SearchToolbar from '@components/SearchToolbar.vue'
import PrimaryButton from '@components/PrimaryButton.vue'

export default {
  name: 'Story',
  components: {
        CurrentFrame,
        Frames,
        SearchToolbar,
        PrimaryButton
  }
}
</script>
<style>
    .story {
        display: flex;
        flex-direction: column;
    }
</style>
<style scoped>
    .publish-button {
        position: absolute;
        right: 24px;
        top: 24px;
    }
</style>