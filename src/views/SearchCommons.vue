<template>
    <div class="view search-wp">
        <form>
            <router-link to='Story'><div class="back"/></router-link>
            <div class="label">{{ $i18n('search-media') }}</div>
            <input class="query" type="text" :placeholder="[[ $i18n('search-media') ]]" :value="commonsQuery" @input="onInput" />
            <div class="icon"/>
            <div v-if="commonsQuery" class="close" @click="onClear"/>
        </form>
        <ImageListView :items="searchCommonsResults"/>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'
    import ImageListView from '@components/ImageListView.vue'
    export default {
      name: 'SearchWikipedia',
      components: { ImageListView },
      methods: {
        ...mapActions(['searchCommons', 'clearCommons']),
        onInput: function(e) {
          e.preventDefault()
          this.searchCommons(e.target.value)
        },
        onClear: function(e) {
          e.preventDefault();
          this.clearCommons();
        }
      },
      computed: mapGetters(['searchCommonsResults', 'commonsQuery'])
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
