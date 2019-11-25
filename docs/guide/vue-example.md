## 🚀 How to use in Vue

```vue
<template>
  <div id="app">
    <fabric-canvas>
      <fabric-circle :id="3"></fabric-circle>
    </fabric-canvas>
  </div>
</template>

<script>
import vueFabricWrapper from "vue-fabric-wrapper";

export default {
  name: "App",
  components: {
    FabricCanvas: vueFabricWrapper.FabricCanvas,
    FabricCircle: vueFabricWrapper.FabricCircle
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```