<template>
    <div class="view search-wp">
        <form @submit="onSubmit">
            <div class="label">{{ $i18n('search-box') }}</div>
            <input class="query" type="text" :placeholder="[[ $i18n('search-box') ]]" v-model="query" required/>
            <input class="submit" type="submit" :value="[[ $i18n('search-text') ]]"/>
            <div class="icon"/>
            <div v-if="query" class="close"  v-on:click="onClear"/>
        </form>
        <ListView :items="searchResults"/>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'
    import ListView from '@components/ListView.vue'
    export default {
      name: 'SearchWikipedia',
      components: { ListView },
      data: () => {
        return {
          query: ''
        }
      },
      methods: {
        ...mapActions(['search']),
        onSubmit: function(e) {
          const queryString = this.query.trim()
          e.preventDefault()
          this.search(queryString)
        },
        onClear: function(e) {
          e.preventDefault();
          this.query = '';
        }
      },
      computed: mapGetters(['searchResults'])
    }
</script>
<style>
    .search-wp {
        font-family: Helvetica Neue;
        padding: 0 22px;
    }
    .search-wp form {
      position: relative;
      text-align: left;
      padding: 10px 0;
    }
    .search-wp .listview {
      max-height: calc( 100vh - 91px );
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
    .search-wp .submit {
      width: 78px;
      height: 36px;
      font-weight: bold;
      font-size: 16px;
      color: #fff;
      background: #2A4B8D;
      border-radius: 0px 2px 2px 0px;
      position: absolute;
      margin-left: -78px;
      text-align: center;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
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
			right: 83px;
			padding: 0;
    }
</style>
