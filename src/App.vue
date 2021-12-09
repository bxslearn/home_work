<template>
  <div id="app">
    <Topnav></Topnav>
    <router-view/>
    <Bottom></Bottom>
  </div>
</template>
<script>
  import Topnav from "./components/topnav/topnav";
  import Bottom from "./components/bottom/bottom"
  export default {
    name: 'App',
    components:{
      Topnav,
      Bottom
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
