<template>
    <div class="view publish">
        <Navigator :onBack="() => this.$router.push( { name: 'Story' } )" />
        <div :class="{ header:true, error: isFormError }">
            <h2 class="title" ref="title" contenteditable="true" :placeholder="$i18n('publish-edit-title-placeholder')" @input="onInput" autofocus />
            <div class="img-preview" :style="imgSyle"></div>
            <p v-if="isFormError" class="msg">{{ $i18n('publish-edit-error-msg')}}</p>
        </div>
        <div class="main">
            <div class="item">
                <label class="label">{{ $i18n('publish-date') }}</label>
                <p class="info">{{ storyInfo.creationDate | formatDate }}</p>
            </div>
            <div class="item">
                <label class="tags">{{ $i18n('publish-tags') }}</label>
                <p class="info">{{ $i18n('tags-not-set') }}</p>
            </div>
            <div class="item">
                <label class="Language">{{ $i18n('publish-language') }}</label>
                <p class="info">English</p>
            </div>
        </div>
        <PrimaryButton class="confirm-publish" :text="$i18n('btn-publish-wikistory')" :onClick="onPublish" />
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import PrimaryButton from '@components/PrimaryButton.vue'
    import Navigator from '@components/Navigator.vue'

    export default {
        name: 'Publish',
        components: { Navigator, PrimaryButton },
        data: () => {
            return {
                title: '',
                isFormError: null
            }
        },
        methods: {
            ...mapActions(['updateCover']),
            onPublish: function() {
                if ( this.title.trim() ) {
                    this.updateCover( this.title.trim() );
                    this.$router.push( { name: 'StoryViewer' } );
                } else {
                    this.$refs.title.focus()
                    this.isFormError = true;
                }
            },
            onInput(event) {
                this.title = event.target.innerText; // @todo title being set in storyInfo
                if ( this.isFormError !== null) {
                    this.isFormError = !this.title.trim()
                }  
            },
        },
        computed: {
          ...mapGetters(['thumbnails','storyInfo']),
          imgSyle: function () {
              return this.thumbnails[0].style
          }
        }
    }
</script>
<style scoped>
    .publish {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: stretch;
    }
    .header {
        display: flex;
        position: relative;
        flex-direction: row;
        justify-content: space-around;
        border-bottom: solid #BDBDBD 1px;
        padding-bottom: 10px;
        margin-bottom: 22px;
        max-height: 150px;
    }
    .header.error {
        border-color: #DD3333;
    }
    .header .msg {
        position: absolute;
        color: #DD3333;
        bottom: -36px;
        left: 0;
    }
    .header .title {
        flex: 1;
        font-family: Georgia;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 31px;
        color: #333333;
        margin-right: auto;
        overflow: auto;
    }
    .header .title:empty:before {
        content: attr(placeholder);
        color: #828282;
        cursor: text;
    }
    .header .title[contenteditable]:focus {
        outline: none;
    }
    .header .img-preview {
        height: 64px;
        width: 32px;
        margin: auto 0;
    }
    .main {
        border-bottom: solid #BDBDBD 1px;
        padding-bottom: 12px;
    }
    .item {
        margin-bottom: 20px;
    }
    .item .label {
        font-family: Helvetica Neue;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 28px;
        color: #4F4F4F;
    }
    .item .info {
        font-family: Helvetica Neue;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #828282;
        margin: 0;
    }
    .confirm-publish {
        margin: 20px auto;
    }
</style>
