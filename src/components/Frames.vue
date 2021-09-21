<template>
    <div class="frames">
        <div
                v-for="frame in thumbnails"
                :key="frame.id"
                class="frame"
                :class="{selected: frame.selected}"
                :style="frame.style"
                @click="selectFrame(frame.id)" />
        <div class="frame btn-add-frame" @click="addFrame">+</div>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'Frames',
        computed: mapGetters(['thumbnails']),
        methods: mapActions(['selectFrame', 'addFrame'])
    }
</script>
<style>
    .frames {
        width: 100vw;
        height: 100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow: scroll;
        border-top: solid black 1px;
    }
    .frame {
        width: 25px;
        height: 50px;
        padding: 10px;
        margin: 10px;
        flex: none;
    }
    .btn-add-frame {
        border: dotted black 2px;
        font-size: 24px;
    }
    .selected {
        outline: blue double 4px;
    }

</style>