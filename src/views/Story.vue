<template>
<div class="view story">
    <PrimaryButton class="publish-button"
        v-if="canPublish"
        :text="$i18n('btn-publish')"
        :onClick="onPublish"
    />
    <CurrentFrame />
    <Frames />
    <SearchToolbar />
</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
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
  },
  methods: {
      ...mapActions(['setCreationDate', 'fetchImgAttribution']),
      onPublish: function() {
        this.setCreationDate(); 
        this.$router.push( { name: 'Publish' } );
      }
  },
  computed: {
    ...mapGetters(['currentFrame', 'storyLength', 'valid', 'attributionData']),
    canPublish: function () {
      return this.valid && this.currentFrame.id === this.storyLength
    }
  },
  mounted: function() {
    const imgAttribution = this.attributionData
    if (imgAttribution[0].title !== '') {
      imgAttribution.forEach(e => {
        if (!e.attribution) {
          this.fetchImgAttribution({ id: e.id, title: e.title } )
        }
      })
    }
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