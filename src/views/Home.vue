<template>
  <div class="view home">
    <div class="center">
      <b>{{ $i18n('welcome') }}</b>
      <router-link to="/story" class="create-story">{{ $i18n('btn-create') }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
<style>
  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .create-story {
    background-color: #3366cc;
    color: white;
    padding: 10px;
    font-weight: bold;
    text-decoration: none;
    margin-top: 10px;
    border-radius: 2px;
  }
</style>