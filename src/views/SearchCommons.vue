<template>
    <div class="view search-wp">
        <div class="header">
          <router-link to='Story'><div class="back"/></router-link>
          <router-link to='Story' v-if="selection.length"><div class="next"/></router-link>
          <span class="info" v-if="selection.length">{{ $i18n( 'search-media-info', selection.length ) }}</span>
        </div>
        <form>
            <div class="label">{{ $i18n('search-media') }}</div>
            <input class="query" type="text" :placeholder="[[ $i18n('search-media') ]]" :value="commonsQuery" @input="onInput" />
            <div class="icon"/>
            <div v-if="commonsQuery" class="close" @click="onClear"/>
        </form>
        <div v-if="commonsLoading" class="loading-bar"></div>
        <ImageListView :items="commonsResults" :onItemSelect="onItemSelect" :selected="selection"/>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'
    import ImageListView from '@components/ImageListView.vue'
    export default {
      name: 'SearchWikipedia',
      components: { ImageListView },
      methods: {
        ...mapActions(['selectCommons', 'searchCommons', 'clearCommons']),
        onInput: function(e) {
          e.preventDefault()
          this.searchCommons(e.target.value)
        },
        onClear: function(e) {
          e.preventDefault();
          this.clearCommons();
        },
        onItemSelect: function( data ) {
          this.selectCommons( data );
        }
      },
      computed: mapGetters(['selection', 'commonsLoading', 'commonsResults', 'commonsQuery'])
    }
</script>
<style>
    .search-wp {
        font-family: Helvetica Neue;
        padding: 0 22px;
    }
    /* @todo header component */
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
    .search-wp .header .next {
      background-image: url(../images/back.svg);
      position: absolute;
      transform: scaleX(-1); 
      width: 16px;
			height: 16px;
      right: 0;
      margin: 20px 0;
      cursor: pointer;
    }
    .search-wp .loading-bar {
      position: absolute;
      height: 3px;
      width: 130px;
      border-radius: 3px;
      background: #3366cc;
      animation-name: 'loader';
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: ease;
    }
    @keyframes loader {
      0%   {transform: translateX(0px);}
      50%  {transform: translateX(calc( 100vw - 175px ) );}
      100% {transform: translateX(0px);}
    }
    .search-wp form {
      position: relative;
      text-align: left;
      padding: 10px 0;
    }
    .search-wp .imagelistview {
      max-height: calc( 100vh - 147px );
      overflow: scroll;
    }
    .search-wp .label {
      font-size: 18px;
      font-style: normal;
      font-weight: bold;
      line-height: 25px;
      letter-spacing: 0px;
      margin: 5px 0;
    }
    .search-wp .query {
      height: 36px;
      border: 2px solid #3366CC;
      box-sizing: border-box;
      border-radius: 2px;
      padding-left: 35px;
      width: 100%;
    }
    .search-wp .icon {
      background-image: url(../images/search.svg);
      width: 20px;
			height: 20px;
			position: absolute;
			bottom: 18px;
			left: 10px;
    }
    .search-wp .close {
      background-image: url(../images/close.svg);
			width: 20px;
			height: 20px;
			position: absolute;
			bottom: 18px;
			right: 10px;
			padding: 0;
      cursor: pointer;
    }
</style>
