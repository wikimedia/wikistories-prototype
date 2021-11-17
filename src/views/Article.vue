<template>
    <div class="view">
        <Back></Back>
        <div class="article" v-html="currentArticle"></div>
        <div :style="selectionToolbarStyle" class="toolbar">
            <div @touchstart="onUseText">{{ $i18n('btn-highlight') }}</div>
            <div @click="onDismiss">{{ $i18n('btn-clear') }}</div>
        </div>
        <div class="article-overlay" v-if="showImages" @click="dismissImages"></div>
        <ArticleImages :images="articleImages" :onSubmit="onUseImage" v-if="showImages" class="images" />
    </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import Back from '@components/Back.vue'
  import ArticleImages from '@components/ArticleImages.vue'

  export default {
    name: 'Article',
    props: ['article'],
    components: { Back, ArticleImages },
    data: () => {
      return {
        selectionToolbarStyle: {
          display: 'none',
          position: 'absolute'
        },
        selectedText: null,
        showImages: false,
        images: []
      }
    },
    computed: {
      ...mapGetters( ['currentArticle'] ),
      articleImages: () => {
        return Array.from(document.querySelector('.article').querySelectorAll(('img'))).map(img => {
          return {
            src: img.src
          }
        })
      }
    },
    methods: {
      ...mapActions( ['fetchArticle', 'setText', 'setImg'] ),
      setToolbarDisplay: function (display) {
        if ( this.selectionToolbarStyle.display !== display ) {
          this.selectionToolbarStyle.display = display
        }
      },
      showSelectionToolbar: function () {
        this.setToolbarDisplay( 'flex' )
      },
      hideSelectionToolbar: function () {
        this.setToolbarDisplay( 'none' )
      },
      onSelectionChange: function () {
        const s = document.getSelection()
        if ( s.isCollapsed ) {
          this.hideSelectionToolbar()
        } else {
          this.selectedText = s.toString()
          this.showSelectionToolbar()
        }
      },
      onUseText: function (e) {
        e.preventDefault()
        e.stopPropagation()
        this.hideSelectionToolbar()
        this.showImages = true
      },
      onUseImage: function(img) {
        this.setText( this.selectedText )
        this.setImg(img)
        this.$router.push( { name: 'Story' } )
      },
      dismissImages: function () {
        this.showImages = false
      },
      onDismiss: function () {
        this.hideSelectionToolbar()
      },
    },
    created: function () {
      this.fetchArticle( this.article )
    },
    mounted() {
      document.addEventListener( 'selectionchange', this.onSelectionChange )
    },
    beforeUnmount() {
      document.removeEventListener( 'selectionchange', this.onSelectionChange )
    }
  }
</script>
<style>
    .toolbar {
        display: flex;
        flex-direction: row;
        align-content: stretch;
        align-items: center;
        background-color: black;
        opacity: 0.75;
        bottom: 0;
        width: 100%;
        line-height: 4em;
    }

    .toolbar > div {
        flex: auto;
        margin: 0;
        padding: 0;
        color: white;
        cursor: pointer;
        text-align: center;
    }

    .toolbar > div:nth-of-type(1) {
        border-right: solid white 1px;
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
    .article-overlay {
        background-color: black;
        opacity: 0.6;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .view .images {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>
