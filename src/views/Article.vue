<template>
    <div class="view">
        <Back></Back>
        <div class="article" @mouseup="onAfterSelect" @touchend="onAfterSelect" v-html="currentArticle"></div>
        <div :style="selectionToolbarStyle" class="toolbar">
            <div @click="onUseText">Use this text</div>
            <div @click="onDismiss">Dismiss</div>
        </div>
    </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import Back from '@components/Back.vue'

  export default {
    name: 'Article',
    props: ['article'],
    components: { Back },
    data: () => {
      return {
        selectionToolbarStyle: {
          display: 'none',
          position: 'absolute'
        },
        selectedText: null
      }
    },
    computed: mapGetters( ['currentArticle'] ),
    methods: {
      ...mapActions( ['fetchArticle', 'setText', 'setImg'] ),
      onAfterSelect: function (e) {
        e.preventDefault()
        const s = document.getSelection()
        const r = s && s.getRangeAt( 0 )
        if ( r && !r.collapsed ) {
          const rect = r.getBoundingClientRect()
          this.selectedText = s.toString()
          this.selectionToolbarStyle.display = 'flex'
          this.selectionToolbarStyle.top = ( rect.top - 43 ) + 'px';
          this.selectionToolbarStyle.left = rect.left + 'px';
        } else {
          this.selectionToolbarStyle.display = 'none'
        }
      },
      onUseText: function () {
        this.setText( this.selectedText )
        this.$router.push( { name: 'Story' } )
      },
      onDismiss: function () {
        this.selectionToolbarStyle.display = 'none'
      },
    },
    created: function () {
      this.fetchArticle( this.article )
    },
  }
</script>
<style>
    .toolbar {
        display: flex;
        flex-direction: row;
        align-content: stretch;
        align-items: center;
        background-color: dimgray;
    }

    .toolbar > div {
        flex: auto;
        margin: 10px;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }

    .article {
        overflow: scroll;
        padding: 0 16px 0 16px;
        position: absolute;
        top: 36px;
        bottom: 0;
        right: 0;
        left: 0;
    }

    .article p {
        position: inherit;
    }

    .article section {
        display: block !important;
    }

    .article figure {
        width: 100% !important;
        max-width: 100% !important;
        margin: 0;
    }
</style>
