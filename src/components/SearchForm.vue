<template>
    <form @submit="onSubmit($event)">
        <div class="label">{{ label }}</div>
        <input class="query" type="text" :placeholder="placeholder" :value="query" @input="onInput" v-focus />
        <div class="icon"/>
        <div v-if="query" class="close" @click="onClear"/>
        <div v-if="loading" class="loading-bar"></div>
    </form>
</template>
<script>
    export default {
        name: 'SearchForm',
        props: [ 'label', 'placeholder', 'query', 'loading', 'onInput', 'onClear'],
        methods: {
          onSubmit: e => e.preventDefault()
        }
    }
</script>

<style scoped>
    form {
      position: relative;
      text-align: left;
      padding: 10px 0;
    }
    .label {
      font-size: 18px;
      font-style: normal;
      font-weight: bold;
      line-height: 25px;
      letter-spacing: 0px;
      margin: 5px 0;
    }
    .query {
      height: 36px;
      border: 2px solid #3366CC;
      box-sizing: border-box;
      border-radius: 2px;
      padding-left: 35px;
      width: 100%;
    }
    .icon {
      background-image: url(../images/search.svg);
      width: 20px;
      height: 20px;
      position: absolute;
      bottom: 18px;
      left: 10px;
    }
    .close {
      background-image: url(../images/close.svg);
      width: 20px;
      height: 20px;
      position: absolute;
      bottom: 18px;
      right: 10px;
      padding: 0;
      cursor: pointer;
    }
    .loading-bar {
      position: absolute;
      height: 3px;
      width: 130px;
      border-radius: 3px;
      margin-top: 10px;
      background: #3366cc;
      animation-name: loader;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: ease;
    }
    @keyframes loader {
      0%   {transform: translateX(0px);}
      50%  {transform: translateX(calc( 100vw - 175px ));}
      100% {transform: translateX(0px);}
    }
    @keyframes loader-desktop {
      0%   {transform: translateX(0px);}
      50%  {transform: translateX(calc( 500px - 175px ));}
      100% {transform: translateX(0px);}
    }
    @media screen and (min-width: 500px) {
      .loading-bar {
        animation-name: loader-desktop;
      }
    }
</style>
