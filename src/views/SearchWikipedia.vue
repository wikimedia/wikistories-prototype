<template>
    <div class="view search-wp">
        <form @submit="onSubmit($event, query)">
            <div class="label">{{ $i18n('search-box') }}</div>
            <input class="query" type="text" :placeholder="[[ $i18n('search-box') ]]" v-model="query"/>
            <input class="submit" type="submit" :value="[[ $i18n('search-text') ]]"/>
        </form>
        <listView :items="searchResults"/>
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
        padding: 0 22px;
    }
    .search-wp form {
      text-align: left;
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
      max-width: 70%;
    }
    .search-wp .submit {
      width: 78px;
      height: 36px;
      font-weight: bold;
      font-size: 16px;
      color: #fff;
      background: #2A4B8D;
      border-radius: 0px 2px 2px 0px;
      flex: none;
      order: 0;
      flex-grow: 0;
    }
</style>
