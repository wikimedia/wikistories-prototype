<template>
    <div class="back" @click="$router.go(-1)"></div>
</template>
<script>
  export default {
    name: 'Back'
  }
</script>
<style scoped>
    .back {
        background-image: url(../images/back.svg);
        background-repeat: no-repeat;
        background-position: center;
        width: 16px;
        height: 16px;
        padding: 10px;
        cursor: pointer;
    }
</style>
