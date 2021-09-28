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
      data: () => {
        return { begin: true, r: { b: { n: null, o: 0 }, e: { n: null, o: 0 } }, t: '' }
      },
      computed: mapGetters(['currentArticle']),
      methods: {
        ...mapActions(['fetchArticle', 'setText']),
        onBack: function() {
          this.$router.go(-1)
        },
        onConfirm: function() {
          if (this.t) {
            this.setText( this.t )
            this.$router.push({name: 'Story'})
          }
        },
        onClick: function(e) {
          e.preventDefault()
          const r = document.caretRangeFromPoint(e.clientX, e.clientY)
          const selection = document.getSelection()
          const range = selection.getRangeAt(0)
          console.log('compare point', range.comparePoint(r.startContainer, r.startOffset))
          // console.log('START_TO_START', range.compareBoundaryPoints(Range.START_TO_START, r))
          // console.log('START_TO_END', range.compareBoundaryPoints(Range.START_TO_END, r))
          // console.log('END_TO_END', range.compareBoundaryPoints(Range.END_TO_END, r))
          // console.log('END_TO_START', range.compareBoundaryPoints(Range.END_TO_START, r))
          // if (range.compareBoundaryPoints(Range.START_TO_START, r) === 1) {
          //   console.log('before')
          // } else if (range.compareBoundaryPoints(Range.END_TO_END, r) === -1) {
          //   console.log('after')
          // } else {
          //   console.log('inside')
          // }
          if ( this.r.b.n && this.r.e.n) {
            return;
          }
          if (this.begin) {
            this.r.b.n = r.startContainer
            this.r.b.o = r.startOffset
            this.begin = false
            if (this.r.e.n === null) {
              this.r.e.n = r.startContainer
              this.r.e.o = r.startOffset + 1
            }
          } else {
            this.r.e.n = r.startContainer
            this.r.e.o = r.startOffset
            this.begin = true
          }
          selection.setBaseAndExtent(this.r.b.n, this.r.b.o, this.r.e.n, this.r.e.o)
          this.t = selection.toString()
        }
      },
      created: function () {
        this.fetchArticle(this.article)
      },
      // updated: () => {
      //   document.addEventListener('selectionchange', () => {
      //     console.log(document.getSelection());
      //   });
      // }
    }
</script>
<style>
    .toolbar {
        width: 100vw;
        /*height: 20px;*/
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
    }
    .article p {
        /*cursor: pointer;*/
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
</style>
