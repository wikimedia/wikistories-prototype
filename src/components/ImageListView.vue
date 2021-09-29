<template>
    <div class="imagelistview">
        <div class="imagelistview__list-wrapper">
            <div class="imagelistview__list imagelistview__list--image">
                <a v-for="item in items" :key="item.title" href="#" :title="item.title" class="sdms-image-result sdms-image-result--portrait" :style="{width: `${item.width}px`}" >
                    <img :src="item.thumb" :alt="item.title" class="sd-image" style="height: 100% !important; max-width: 3777px !important; max-height: 4343px;" />
                </a>
                <!-- <a href="https://commons.wikimedia.org/wiki/File:Kaio_tegata.jpg" title="File:Kaio tegata.jpg" class="sdms-image-result sdms-image-result--portrait" style="width: 156px;">
                    <img data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Kaio_tegata.jpg/180px-Kaio_tegata.jpg" alt="Kaio tegata.jpg" loading="lazy" class="sd-image" style="height: 100% !important; max-width: 3777px !important; max-height: 4343px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Kaio_tegata.jpg/180px-Kaio_tegata.jpg" />
                </a>
                <a href="https://commons.wikimedia.org/wiki/File:Kaio_tegata.jpg" title="File:Kaio tegata.jpg" class="sdms-image-result sdms-image-result--portrait" style="width: 156px;">
                    <img data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Kaio_tegata.jpg/180px-Kaio_tegata.jpg" alt="Kaio tegata.jpg" loading="lazy" class="sd-image" style="height: 100% !important; max-width: 3777px !important; max-height: 4343px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Kaio_tegata.jpg/180px-Kaio_tegata.jpg" />
                </a>
                <a href="https://commons.wikimedia.org/wiki/File:Kaio-1.jpg" title="File:Kaio-1.jpg" class="sdms-image-result" style="width: 240px;">
                    <img data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Kaio-1.jpg/240px-Kaio-1.jpg" alt="Kaio-1.jpg" loading="lazy" class="sd-image" style="height: 100% !important; max-width: 2048px !important; max-height: 1536px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Kaio-1.jpg/240px-Kaio-1.jpg" />
                </a>
                <a href="https://commons.wikimedia.org/wiki/File:KaioDeAlmeida.png" title="File:KaioDeAlmeida.png" class="sdms-image-result sdms-image-result--portrait" style="width: 120px;">
                    <img data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/KaioDeAlmeida.png/120px-KaioDeAlmeida.png" alt="KaioDeAlmeida.png" loading="lazy" class="sd-image" style="height: 100% !important; max-width: 246px !important; max-height: 369px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/KaioDeAlmeida.png/120px-KaioDeAlmeida.png" />
                </a>
                <a href="https://commons.wikimedia.org/wiki/File:Kaio_Pantale%C3%A3o_2019.jpg" title="File:Kaio Pantaleão 2019.jpg" class="sdms-image-result sdms-image-result--portrait" style="width: 171px;">
                    <img data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kaio_Pantale%C3%A3o_2019.jpg/180px-Kaio_Pantale%C3%A3o_2019.jpg" alt="Kaio Pantaleão 2019.jpg" loading="lazy" class="sd-image" style="height: 100% !important; max-width: 909px !important; max-height: 954px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kaio_Pantale%C3%A3o_2019.jpg/180px-Kaio_Pantale%C3%A3o_2019.jpg" />
                </a> -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ImageListView',
        props: [ 'items' ]
    }
</script>

<style>
    .imagelistview {
        width: 100%;
        height: 100%;
        background-color: #fff;
        text-align: left;
        overflow: hidden;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        margin: 6px 0 16px;
    }

    .imagelistview__list-wrapper {
        -ms-flex-pack: justify;
        justify-content: space-between;
        width: auto;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        -ms-flex-order: 1;
        order: 1;
        width: 100%;
    }
    .imagelistview__list--image {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin: -8px;
        max-width: calc(100% + 16px);
    }

    .imagelistview__list {
        align-content: flex-start;
        justify-content: flex-start;
    }

    .imagelistview__list .sdms-image-result {
        -ms-flex-pack: justify;
        justify-content: space-between;
        width: auto;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        -ms-flex-order: 1;
        order: 1;
        justify-content: center;
    }
    .sdms-image-result {
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        background-color: #eaecf0;
        box-sizing: border-box;
        height: 180px;
        margin: 8px;
        transition: box-shadow 100ms ease,outline 100ms ease;
    }
    .sdms-image-result img {
        height: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: center center;
        pointer-events: none;
        width: 100%;
    }
</style>
