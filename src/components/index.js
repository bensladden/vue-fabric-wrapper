import Vue from "vue";
import FabricCanvas from "./FabricCanvas.vue";
import FabricCircle from "./FabricCircle.vue";
import FabricEllipse from "./FabricEllipse.vue";
import FabricImageFromURL from "./FabricImageFromURL.vue";
import FabricRectangle from "./FabricRectangle.vue";
import FabricTriangle from "./FabricTriangle.vue";

// import ResponsiveGridLayout from './ResponsiveGridLayout.vue';

const VueFabric = {
  FabricCanvas,
  FabricCircle,
  FabricEllipse,
  FabricImageFromURL,
  FabricRectangle,
  FabricTriangle
};

Object.keys(VueFabric).forEach(name => {
  Vue.component(name, VueFabric[name]);
});

export default VueFabric;
export {
  FabricCanvas,
  FabricCircle,
  FabricEllipse,
  FabricImageFromURL,
  FabricRectangle,
  FabricTriangle
};
