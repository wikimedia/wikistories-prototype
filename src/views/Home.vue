<template>
  <div class="view home">
    <div class="center">
      <b>Welcome to Wikistories</b>
      <router-link to="/story" class="create-story">Create a story</router-link>
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
    background-color: blue;
    color: white;
    padding: 10px;
    font-weight: bold;
    text-decoration: none;
    margin-top: 10px;
  }
</style>