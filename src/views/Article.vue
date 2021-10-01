<template>
    <div class="view">
        <Back></Back>
        <div class="article" @mouseup="onAfterSelect" @touchend="onAfterSelect" v-html="currentArticle"></div>
        <div :style="selectionToolbarStyle" class="toolbar">
            <div @click="onUseText">Highlight</div>
            <div @click="onDismiss">Clear</div>
        </div>
        <div class="article-overlay" v-if="showImages"></div>
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
      showSelectionToolbar: function (rangeRect) {
        this.selectionToolbarStyle.display = 'flex'
        this.selectionToolbarStyle.top = ( rangeRect.top - 43 ) + 'px';
        this.selectionToolbarStyle.left = rangeRect.left + 'px';
      },
      hideSelectionToolbar: function () {
        this.selectionToolbarStyle.display = 'none'
      },
      onAfterSelect: function (e) {
        e.preventDefault()
        const s = document.getSelection()
        const r = s && s.getRangeAt(0)
        if ( r && !r.collapsed ) {
          this.selectedText = s.toString()
          this.showSelectionToolbar(r.getBoundingClientRect())
        } else {
          this.hideSelectionToolbar()
        }
      },
      onUseText: function () {
        this.hideSelectionToolbar()
        this.showImages = true
      },
      onUseImage: function(img) {
        this.setText( this.selectedText )
        this.setImg(img)
        this.$router.push( { name: 'Story' } )
      },
      onDismiss: function () {
        this.hideSelectionToolbar()
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
