<template>
    <div class="view search-wp">
        <div class="header">
          <router-link to='Story'><div class="back"/></router-link>
        </div>
        <SearchForm 
          :label="$i18n('search-box')" 
          :placeholder="$i18n('search-box')"
          :query="query"
          :loading="loading"
          :onInput="onInput"
          :onClear="onClear"
        />
        <ListView :items="searchResults"/>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'
    import ListView from '@components/ListView.vue'
    import SearchForm from '@components/SearchForm.vue'
    export default {
      name: 'SearchWikipedia',
      components: { ListView, SearchForm },
      methods: {
        ...mapActions(['search', 'clear']),
        onInput: function(e) {
          e.preventDefault()
          this.search(e.target.value)
        },
        onClear: function(e) {
          e.preventDefault();
          this.clear();
        }
      },
      computed: mapGetters(['loading', 'searchResults', 'query'])
    }
</script>
<style>
    .search-wp {
        font-family: Helvetica Neue;
        padding: 0 22px;
    }
    .search-wp .header {
      position: relative;
      height: 40px;
    }
    .search-wp .header .info {
      position: absolute;
      margin: 15px 0;
      left: 50px;
      font-family: Helvetica Neue;
      font-style: normal;
      font-weight: normal;
      font-size: 17.6px;
      line-height: 25px;
      color: #000000;
    }
    .search-wp .header .back {
      background-image: url(../images/back.svg);
      position: absolute;
      width: 16px;
			height: 16px;
      left: 0;
      margin: 20px 0;
      cursor: pointer;
    }
    .search-wp .listview {
      max-height: calc( 100vh - 147px );
      overflow: scroll;
    }
</style>
