<template>
    <div class="view article" v-html="currentArticle" @click="onClick"></div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
      name: 'BrowseArticle',
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
    }
    p {
        cursor: pointer;
    }
    .selected-text {
        background-color: yellow;
    }
</style>
