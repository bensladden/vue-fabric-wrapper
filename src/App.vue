<template>
  <div id="app">
    <h1>Vue-Fabric-Wrapper</h1>
    <fabric-canvas>
      <fabric-rectangle :id="1"></fabric-rectangle>
      <fabric-circle :id="2"></fabric-circle>
      <fabric-ellipse :id="3"></fabric-ellipse>
      <fabric-triangle :id="4"></fabric-triangle>
      <fabric-image-from-URL :id="5" :left.sync="left"></fabric-image-from-URL>
      <fabric-group :id="6" :left="0" :top="0">
        <fabric-rectangle :id="61" :top="10" :fill="'blue'"></fabric-rectangle>
        <fabric-rectangle
          :id="62"
          :left="10"
          :fill="'green'"
        ></fabric-rectangle>
      </fabric-group>
      <fabric-text :id="7" :text="'hello'"></fabric-text>
    </fabric-canvas>

    <button @click="left = 100">Modify Left to 100</button>
  </div>
</template>

<script>
import FabricCanvas from "./components/FabricCanvas.vue";
import FabricGroup from "./components/FabricGroup.vue";
import FabricRectangle from "./components/FabricRectangle.vue";
import FabricCircle from "./components/FabricCircle.vue";
import FabricEllipse from "./components/FabricEllipse.vue";
import FabricTriangle from "./components/FabricTriangle.vue";
import FabricImageFromURL from "./components/FabricImageFromURL.vue";
import FabricText from "./components/FabricText.vue";
export default {
  name: "app",
  components: {
    FabricCanvas,
    FabricGroup,
    FabricRectangle,
    FabricCircle,
    FabricEllipse,
    FabricTriangle,
    FabricImageFromURL,
    FabricText
  },
  data() {
    return {
      left: 80
    };
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
