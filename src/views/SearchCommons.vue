<template>
    <div class="view search-cm">
        <div class="header">
          <router-link to='Story'><div class="back"/></router-link>
          <div v-if="selection.length" class="next" @click="editStory"/>
          <span class="info" v-if="selection.length">{{ $i18n( 'search-media-info', selection.length ) }}</span>
        </div>
        <SearchForm 
          :label="$i18n('search-media')" 
          :placeholder="$i18n('search-media')"
          :query="query"
          :loading="loading"
          :onInput="onInput"
          :onClear="onClear"
        />
        <ImageListView :items="results" :onItemSelect="onItemSelect" :selected="selection"/>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'
    import ImageListView from '@components/ImageListView.vue'
    import SearchForm from '@components/SearchForm.vue'

    export default {
      name: 'SearchWikipedia',
      components: { ImageListView, SearchForm },
      methods: {
        ...mapActions('commons', ['select', 'search', 'clear']),
        ...mapActions(['resetFrame']),
        onInput: function(e) {
          e.preventDefault()
          this.search(e.target.value)
        },
        onClear: function(e) {
          e.preventDefault();
          this.clear();
        },
        onItemSelect: function( data ) {
          this.select( data );
        },
        editStory: function(){
          const array = this.selection.map( ( id, index ) => {
            const item = this.results.find( result => result.id === id );
            return {
              id: index + 1,
              img: item.thumb,
              text: item.desc
            }
          })
          this.resetFrame(array)
          this.$router.push( { name: 'Story' } )
        }
      },
      computed: mapGetters('commons', ['selection', 'loading', 'results', 'query']),
    }
</script>
<style>
    .search-cm {
        font-family: Helvetica Neue;
        padding: 0 22px;
    }
    /* @todo header component */
    .search-cm .header {
      position: relative;
      height: 40px;
    }
    .search-cm .header .info {
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
    .search-cm .header .back {
      background-image: url(../images/back.svg);
      position: absolute;
      width: 16px;
			height: 16px;
      left: 0;
      margin: 20px 0;
      cursor: pointer;
    }
    .search-cm .header .next {
      background-image: url(../images/back.svg);
      position: absolute;
      transform: scaleX(-1); 
      width: 16px;
			height: 16px;
      right: 0;
      margin: 20px 0;
      cursor: pointer;
    }
    .search-cm .imagelistview {
      max-height: calc( 100vh - 147px );
      overflow: scroll;
    }
</style>
