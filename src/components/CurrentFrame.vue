<template>
    <div class="current-frame" :style="currentFrame.style">
        <p v-if="currentFrame.text" v-html="currentFrame.text"></p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'CurrentFrame',
        computed: mapGetters(['currentFrame'])
    }
</script>

<style scoped>
    .current-frame {
        height: 85%;
        height: calc(var(--vh, 1vh) * 100 - 110px);
        width: 100vw;
        position: relative;
        text-align: center;
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
