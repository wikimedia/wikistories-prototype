<template>
    <div class="view search-cm">
        <Navigator 
          :onBack="() => this.$router.push( { name: 'Story' } )"
          :onNext="selection.length && editStory" 
          :info="selection.length && $i18n( 'search-media-info', selection.length )"
        />
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
    import Navigator from '@components/Navigator.vue'

    export default {
      name: 'SearchWikipedia',
      components: { ImageListView, SearchForm, Navigator },
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
              text: item.desc,
              imgTitle: item.title,
              attribution: item.attribution
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
    .search-cm .imagelistview {
      max-height: calc( 100vh - 147px );  
    }
</style>
