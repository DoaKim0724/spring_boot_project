<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <router-view></router-view>
  <!-- <img :src='image'/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default{
     data: () => ({
        image: "https://reqres.in/img/faces/1-image.jpg"
    })
}
</script>

<style>
</style>
