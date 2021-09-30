<template>
    <div class="current-frame" :style="currentFrame.style">
        <router-link
            class="btn-search-wiki"
            to="/searchwikipedia"
            v-if="currentFrame.noImage">Search Wikipedia</router-link>
        <p v-if="currentFrame.text" v-html="currentFrame.text"></p>
        <!-- temp here -->
        <router-link
            to="/searchcommons"
            v-if="currentFrame.noImage">Search Media</router-link>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'CurrentFrame',
        computed: mapGetters(['currentFrame'])
    }
</script>

<style>
    .current-frame {
        height: 80%;
        width: 100vw;
        position: relative;
        text-align: center;
    }
    .btn-search-wiki {
        background-color: white;
        padding: 10px;
        border-radius: 4px;
        position: absolute;
        top: 20px;
        left: 20px;
        right: 20px;
    }
    p {
        position: absolute;
        bottom: 20px;
        left: 20px;
        right: 20px;
        border-radius: 10px;
        background-color: white;
        margin: 0;
        padding: 10px;
    }
</style>
