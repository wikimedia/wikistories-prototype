<template>
    <div class="view search-wp">
        <form>
            <router-link to='Story'><div class="back"/></router-link>
            <div class="label">{{ $i18n('search-box') }}</div>
            <input class="query" type="text" :placeholder="[[ $i18n('search-box') ]]" :value="query" @input="onInput" v-focus />
            <div class="icon"/>
            <div v-if="query" class="close" @click="onClear"/>
        </form>
        <div v-if="loading" class="loading-bar"></div>
        <ListView :items="searchResults"/>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'
    import ListView from '@components/ListView.vue'
    export default {
      name: 'SearchWikipedia',
      components: { ListView },
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
    .search-wp .back {
      background-image: url(../images/back.svg);
      width: 16px;
			height: 16px;
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
    .search-wp .listview {
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
