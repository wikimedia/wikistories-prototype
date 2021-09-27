<template>
    <div class="view search-wp">
        <form @submit="onSubmit($event, query)">
            <h3 class="label">Search Wikipedia</h3>
            <input type="text" placeholder="Search Wikipedia" v-model="query"/>
            <input type="submit" />
        </form>
        <div class="results">
            <div class="result" v-for="result in searchResults" :key="result.title">
                <!-- <router-link :to="{ name: 'BrowseArticle', params: { article: result.title } }"/> -->
                <div class="img" :style="{backgroundImage: `url(${result.thumb})` }"/>
                <div class="info">
                  <div class="title">{{result.title}}</div>
                  <div class="description">{{result.desc}}</div>
                </div>
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
        font-family: Helvetica Neue;
        overflow: scroll;
    }
    .search-wp .results {
          width: 100%;
          background-color: #fff;
          text-align: left;
          overflow: scroll;
          position: absolute;
    }
    .search-wp .results .result {
          width: 100%;
          height: 60px;
          margin: 0;
          padding: 6px 10px;
          display: flex;
          justify-content: space-between;
          text-align: left;
    }

    .search-wp .results .result .img {
            height: 100%;
            display: flex;
            flex: auto;
            background-repeat: no-repeat;
            background-position: center center;
            border-radius: 4px;
    }
    
    .search-wp .results .result .info {
            height: 100%;
            overflow: hidden;
            display: flex;
            flex: calc( 100vw - 96px );
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
    }

    .search-wp .results .result .info .title {
              font-size: 15px;
              font-weight: 700;
              color: #000;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }

    .search-wp .results .result .info .description {
              font-size: 13px;
              font-weight: 400;
              color: #54595D;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
</style>
