<template>
    <div class="view search-wp">
        <form @submit="onSubmit($event, query)">
            <h3>Search Wikipedia</h3>
            <input type="text" placeholder="Search Wikipedia" v-model="query"/>
            <input type="submit" />
        </form>
        <div class="results">
            <div class="result" v-for="result in searchResults" :key="result.title">
                <router-link :to="{ name: 'BrowseArticle', params: { article: result.title } }">
                    <img :src="result.thumb" />
                    <div>{{result.title}}</div>
                    <div>{{result.desc}}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
      name: 'SearchWikipedia',
      data: () => {
        return {
          query: ''
        }
      },
      methods: {
        ...mapActions(['search']),
        onSubmit: function(e, query) {
          e.preventDefault()
          this.search(query)
        }
      },
      computed: mapGetters(['searchResults'])
    }
</script>
<style>
    .search-wp {
        height: 100%;
        overflow: scroll;
    }
</style>
