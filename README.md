# vue-fabric

[![Netlify Status](https://api.netlify.com/api/v1/badges/c31e91bb-b672-483c-bf98-1582de3cfaec/deploy-status)](https://app.netlify.com/sites/vue-fabric-wrapper/deploys)

## 🚀 How to use

```vue
<template>
    <div id="app">
        <h1>Vue-Fabric-Wrapper</h1>
        <fabric-canvas>
            <fabric-rectangle :id="1"></fabric-rectangle>
            <fabric-circle :id="2"></fabric-circle>
            <fabric-ellipse :id="3"></fabric-ellipse>
            <fabric-triangle :id="4"></fabric-triangle>
            <fabric-image-from-URL :id="5" :left.sync="left"></fabric-image-from-URL>
        </fabric-canvas>
    </div>
</template>

<script>
import FabricCanvas from "./components/FabricCanvas.vue";
import FabricRectangle from "./components/FabricRectangle.vue";
import FabricCircle from "./components/FabricCircle.vue";
import FabricEllipse from "./components/FabricEllipse.vue";
import FabricTriangle from "./components/FabricTriangle.vue";
import FabricImageFromURL from "./components/FabricImageFromURL.vue";

export default {
    name: "app",
    components: {
        FabricCanvas,
        FabricRectangle,
        FabricCircle,
        FabricEllipse,
        FabricTriangle,
        FabricImageFromURL
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
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
