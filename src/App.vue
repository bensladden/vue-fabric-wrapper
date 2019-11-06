<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <fabric-canvas></fabric-canvas>
  </div>
</template>

<script>
import FabricCanvas from "./components/FabricCanvas.vue";
import FabricRectangle from "./components/FabricRectangle.vue";
export default {
  name: "app",
  components: {
    FabricCanvas,
    FabricRectangle
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
