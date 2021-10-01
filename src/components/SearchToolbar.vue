<template>
    <div class="search-toolbar">
        <router-link to="/searchcommons">Commons</router-link>
        <router-link to="/searchwikipedia">Wikipedia</router-link>
    </div>
</template>
<script>
    export default {
      name: 'SearchToolbar'
    }
</script>
<style>
    .search-toolbar {
        border-top: solid black 1px;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
</style>
