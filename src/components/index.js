import Vue from "vue";
import FabricCanvas from "./FabricCanvas.vue";
import FabricCircle from "./FabricCircle.vue";
import FabricEllipse from "./FabricEllipse.vue";
import FabricGrid from "./FabricGrid.vue";
import FabricGroup from "./FabricGroup.vue";
import FabricImageFromURL from "./FabricImageFromURL.vue";
import FabricLine from "./FabricLine.vue";
import FabricRectangle from "./FabricRectangle.vue";
import FabricText from "./FabricText.vue";
import FabricTriangle from "./FabricTriangle.vue";

const VueFabric = {
  FabricCanvas,
  FabricCircle,
  FabricEllipse,
  FabricGrid,
  FabricGroup,
  FabricImageFromURL,
  FabricLine,
  FabricRectangle,
  FabricText,
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
  FabricGrid,
  FabricGroup,
  FabricImageFromURL,
  FabricLine,
  FabricRectangle,
  FabricText,
  FabricTriangle
};
