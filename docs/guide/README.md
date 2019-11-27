---
sidebar: auto
---
# Guide

## Getting Started
Vue-Fabric-Wrapper provides a number of components that allow you to render a Fabric.js canvas.

## Setup
```bash
npm install vue-fabric-wrapper
```

Add it to your application

```javascript
import vueFabricWrapper from "vue-fabric-wrapper";
```

## How to use in Vue

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

## How to use in Nuxt
Create Plugin with the following example code
```javascript
import Vue from 'vue';
import vueFabricWrapper from 'vue-fabric-wrapper';

Vue.component("FabricCanvas", vueFabricWrapper.FabricCanvas)
Vue.component("FabricCircle", vueFabricWrapper.FabricCircle)
```

Add this to nuxt.config and use mode client
```javascript
module.exports = {
	plugins: [
			{ src: "@/plugins/fabric.js", mode: "client" }
		]
}
```

Finally use client-only to render only on the client side
```html
<template>
  <client-only>
    <fabric-canvas>
      <fabric-circle :id="2"></fabric-circle>
    </fabric-canvas>
  </client-only>
</template>

<script>
export default {

};
</script>

<style>
</style>
```

## Show Your Support
Please give a ⭐️ if this project helped you!


## Contributing

If you have any questions or requests or want to contribute to `vue-fabric-wrapper` or other packages, please write the [issue](https://github.com/bensladden/vue-fabric-wrapper/issues) or give me a Pull Request freely.

## Bug Report

If you find a bug, please report to us opening a new [Issue](https://github.com/bensladden/vue-fabric-wrapper/issues) on GitHub.