<template>
    <div class="view">
        <div class="toolbar">
            <div @click="onBack">Back</div>
            <div @click="onConfirm">Confirm</div>
        </div>
        <div class="article" @mouseup="onMouseUp" v-html="currentArticle"></div>
        <div :style="selectionToolbarStyle">
            <div @click="onUseText">Use this text</div>
            <div @click="onDismiss">Dismiss</div>
        </div>
    </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'Article',
    props: ['article'],
    data: () => {
      return {
        selectionToolbarStyle: {
          display: 'none',
          position: 'absolute',
          bottom: 0
        },
        selectedText: null
      }
    },
    computed: mapGetters( ['currentArticle'] ),
    methods: {
      ...mapActions( ['fetchArticle', 'setText', 'setImg'] ),
      onBack: function () {
        this.$router.go( -1 )
      },
      onConfirm: function () {
      },
      onMouseUp: function () {
        const s = document.getSelection()
        const r = s && s.getRangeAt( 0 )
        if ( r && !r.collapsed ) {
          const rect = r.getBoundingClientRect()
          this.selectedText = s.toString()
          this.selectionToolbarStyle.display = 'block'
          this.selectionToolbarStyle.top = ( rect.top - rect.height ) + 'px';
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
        width: 100vw;
        height: 45px;
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
        padding: 32px 16px 0 16px;
        position: absolute;
        top: 45px;
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
