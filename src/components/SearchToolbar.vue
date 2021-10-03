<template>
    <div class="search-toolbar">
        <router-link to="/searchcommons" class="commons logo">{{ $i18n('wikimedia-commons') }}</router-link>
        <router-link to="/searchwikipedia" class="wikipedia logo">{{ $i18n('wikipedia') }}</router-link>
    </div>
</template>
<script>
    export default {
      name: 'SearchToolbar'
    }
</script>
<style scoped>
    .search-toolbar {
        border-top: solid black 1px;
        padding: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .commons {
        background-image: url(../images/commons.png);
    }
    .wikipedia {
        background-image: url(../images/wikipedia.png);
    }
    .logo {
        background-repeat: no-repeat;
        background-position: top;
        background-size: 30px;
        padding-top: 30px;
        text-decoration: none;
        color: black;
    }
</style>
