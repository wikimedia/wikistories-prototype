<template>
    <div class="view article" v-html="currentArticle" @click="onClick"></div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
      name: 'Article',
      props: ['article'],
      computed: mapGetters(['currentArticle']),
      methods: {
        ...mapActions(['fetchArticle']),
        onClick: ({ target }) => {
          if (target.tagName === 'P') {
            target.classList.toggle('selected-text')
          }
        }
      },
      created: function () {
        this.fetchArticle(this.article)
      }
    }
</script>
<style>
    .article {
        overflow: scroll;
        padding: 32px 16px 0 16px;
    }
    p {
        cursor: pointer;
    }
    .selected-text {
        background-color: yellow;
    }
</style>
