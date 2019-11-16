# vue-fabric

<p align="center">
	<img src="https://flat.badgen.net/github/branches/bensladden/vue-fabric" alt="branches">
	<img src="https://flat.badgen.net/github/releases/bensladden/vue-fabric" alt="releases">
	<img src="https://flat.badgen.net/github/open-issues/bensladden/vue-fabric" alt="openIssues">
	<img src="https://flat.badgen.net/github/last-commit/bensladden/vue-fabric" alt="lastCommit">
	<img src="https://flat.badgen.net/github/license/bensladden/vue-fabric" alt="license">
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/c31e91bb-b672-483c-bf98-1582de3cfaec/deploy-status)](https://app.netlify.com/sites/vue-fabric-wrapper/deploys)

[![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-template-rltsr?fontsize=14&hidenavigation=1&theme=dark)


## 🚀 How to use

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
