<template>
    <div class="view">
        <div class="toolbar">
            <div @click="onBack">Back</div>
            <div @click="onConfirm">Confirm</div>
        </div>
        <div class="article" @click="onClick" v-html="currentArticle"></div>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
      name: 'Article',
      props: ['article'],
      computed: mapGetters(['currentArticle']),
      methods: {
        ...mapActions(['fetchArticle', 'setText', 'setImg']),
        onBack: function() {
          this.$router.go(-1)
        },
        onConfirm: function() {
          const selectedText = document.querySelector('.selected-text')
          const text = selectedText && selectedText.innerText

          const selectedImage = document.querySelector('.selected-image')
          const imageSrc = selectedImage && selectedImage.src

            if (text && imageSrc) {
              this.setText(text)
              this.setImg(imageSrc)
              this.$router.push( { name: 'Story' } )
            }
        },
        onClick: function(e) {
          e.preventDefault()
          if (e.target.tagName === 'IMG') {
            const selectedImage = document.querySelector('.selected-image')
            if (selectedImage) {
              selectedImage.classList.remove('selected-image')
              if (selectedImage !== e.target) {
                e.target.classList.add('selected-image')
              }
            } else {
              e.target.classList.add('selected-image')
            }
          } else {
            const selectedText = document.querySelector( '.selected-text' )
            if ( selectedText ) {
              selectedText.classList.remove( 'selected-text' )
              if (selectedText !== e.target) {
                e.target.classList.add('selected-text')
              }
            } else {
              e.target.classList.add( 'selected-text' )
            }
          }
        }
      },
      created: function () {
        this.fetchArticle(this.article)
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
        cursor: pointer;
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
        width: 100%!important;
        max-width: 100%!important;
        margin: 0;
    }
    .selected-text {
        background-color: yellow;
    }
    .selected-image {
        outline: dashed yellow 10px;
    }
</style>
