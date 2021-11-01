<template>
    <div class="current-frame" :style="currentFrame.style">
        <p v-if="currentFrame.text" v-html="currentFrame.text"></p>
        <ImageAttribution />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import ImageAttribution from '@components/ImageAttribution.vue'
    export default {
        name: 'CurrentFrame',
        components: {
            ImageAttribution
        },
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
        bottom: 60px;
        left: 20px;
        right: 20px;
        border-radius: 10px;
        background-color: white;
        margin: 0;
        padding: 10px;
    }
</style>
