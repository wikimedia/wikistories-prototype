<template>
    <div class="view publish">
        <div class="header">
            <h2 class="title">Tiger</h2>
            <div class="img-preview" :style="imgSyle"></div>
        </div>
        <div class="main">
            <label for="title">Title</label>
            <input type="text" id="title" placeholder="Title" /><br />
            <label for="tags">Tags</label>
            <input type="text" id="tags" placeholder="Tags" /><br />
        </div>
        <router-link to="/viewer">{{ $i18n('btn-publish-wikistory') }}</router-link>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'Publish',
        computed: {
          ...mapGetters(['thumbnails']),
          imgSyle: function () {
              return this.thumbnails[0].style
          }
        }
    }
</script>
<style scoped>
    .publish {
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: stretch;
    }
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .header, .main {
        border-bottom: solid #C4C4C4 1px;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
    input {
        margin: 10px;
        width: 80vw;
    }
    .img-preview {
        height: 64px;
        width: 32px;
    }
</style>