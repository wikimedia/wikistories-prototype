<template>
    <div class="listview">
        <div class="item" v-for="item in items" :key="item.title">
            <router-link :to="item.goto">
                <div class="img" :style="{backgroundImage: `url(${item.thumb})` }"/>
                <div class="info">
                    <div class="title">{{item.title}}</div>
                    <div class="description">{{item.desc}}</div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListView',
        props: [ 'items' ]
    }
</script>

<style>
    .listview {
          width: 100%;
          background-color: #fff;
          text-align: left;
          overflow: hidden;
    }
    .listview .item {
          width: 100%;
          height: 60px;
          margin: 0;
          padding: 2.5px 0;
          display: flex;
          justify-content: space-between;
          text-align: left;
    }

    .listview .item a {
          all: inherit;
          padding: 0;
    }

    .listview .item .img {
            min-width: 60px;
            height: 100%;
            display: flex;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            background-color: #C4C4C4;
    }
    
    .listview .item .info {
            height: 100%;
            overflow: hidden;
            display: flex;
            flex: auto;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
    }

    .listview .item .info .title {
              font-size: 15px;
              font-weight: 700;
              color: #000;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
    }

    .listview .item .info .description {
              font-size: 13px;
              font-weight: 400;
              color: #54595D;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
    }
</style>
