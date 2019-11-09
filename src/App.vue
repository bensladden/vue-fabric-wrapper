<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <fabric-canvas>
      <fabric-rectangle :id="1"></fabric-rectangle>
      <fabric-circle :id="2"></fabric-circle>
      <fabric-ellipse :id="3"></fabric-ellipse>
    </fabric-canvas>
  </div>
</template>

<script>
import FabricCanvas from "./components/FabricCanvas.vue";
import FabricRectangle from "./components/FabricRectangle.vue";
import FabricCircle from "./components/FabricCircle.vue";
import FabricEllipse from "./components/FabricEllipse.vue";

export default {
  name: "app",
  components: {
    FabricCanvas,
    FabricRectangle,
    FabricCircle,
    FabricEllipse
  },
  data() {
    return {};
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
