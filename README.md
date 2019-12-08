# vue-fabric-wrapper

<p align="center">
	<img src="https://flat.badgen.net/github/branches/bensladden/vue-fabric" alt="branches">
	<img src="https://flat.badgen.net/github/releases/bensladden/vue-fabric" alt="releases">
	<img src="https://flat.badgen.net/github/open-issues/bensladden/vue-fabric" alt="openIssues">
	<img src="https://flat.badgen.net/github/last-commit/bensladden/vue-fabric" alt="lastCommit">
	<img src="https://flat.badgen.net/github/license/bensladden/vue-fabric" alt="license">
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/c31e91bb-b672-483c-bf98-1582de3cfaec/deploy-status)](https://app.netlify.com/sites/vue-fabric-wrapper/deploys)

Stick Man Example: [![Edit StickMan](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/stickman-rltsr?fontsize=14&hidenavigation=1&theme=dark)


## Currently implemented the following Fabric Objects:
  Fabric.Canvas,
  Fabric.Circle,
  Fabric.Ellipse,
  Fabric.Group,
  Fabric.ImageFromURL,
  Fabric.Line,
  Fabric.Path,
  Fabric.Polygon,
  Fabric.Polyline,
  Fabric.Rectangle,
  Fabric.SVGFromURL,
  Fabric.Text,
  Fabric.Triangle

## ⚙️ Installation
```sh
$ npm install vue-fabric-wrapper
```
## 📄 Documents
[Link](https://vue-fabric-wrapper.netlify.com/)

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
## 🚀 How to use in Nuxt
Create Plugin with the following example code
```
import Vue from 'vue';
import vueFabricWrapper from 'vue-fabric-wrapper';

Vue.component("FabricCanvas", vueFabricWrapper.FabricCanvas)
Vue.component("FabricCircle", vueFabricWrapper.FabricCircle)
```

Add this to nuxt.config and use mode client
```
module.exports = {
	plugins: [
			{ src: "@/plugins/fabric.js", mode: "client" }
		]
}
```

Finally use client-only to render only on the client side
```
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

## ⭐️ Show Your Support
Please give a ⭐️ if this project helped you!


## 👏 Contributing

If you have any questions or requests or want to contribute to `vue-fabric-wrapper` or other packages, please write the [issue](https://github.com/bensladden/vue-fabric-wrapper/issues) or give me a Pull Request freely.

## 🐞 Bug Report

If you find a bug, please report to us opening a new [Issue](https://github.com/bensladden/vue-fabric-wrapper/issues) on GitHub.

## ⚙️ Development
### `npm run serve`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.