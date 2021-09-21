<template>
    <div class="view article" v-html="currentArticle"></div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
      name: 'BrowseArticle',
      props: ['article'],
      computed: mapGetters(['currentArticle']),
      methods: mapActions(['fetchArticle']),
      created: function () {
        this.fetchArticle(this.article)
      }
    }
</script>
<style>
    .article {
        height: 100%;
        overflow: scroll;
    }
</style>
