<template>
    <div id="loading cntr" style="background-color:#f1f2f3;height:100vh;text-align:center;margin-top:-6vh">
      <img
        class="img"
        src="../assets/loading.gif"
        alt="loading..."
        style="width:10vw"/>
        <!-- <p class="ibn" style="font-size:2vh;color:gray"></p> -->
    </div>
  </template>
  
  <script>
  export default {
    name: "LoadingScreen"
  };
  </script>

<style>
.img {
  position: relative;
  margin: auto;
  margin-top: 20%;
}
</style>