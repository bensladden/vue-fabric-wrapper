<template>
  <div id="app">
    <h1>Vue Fabric Wrapper: Examples</h1>
    <h2>StickMan</h2>
    <stick-man />
    <h2>Animation</h2>
    <animation />
    <h2>Line Grid</h2>
    <line-grid />
    <h2>Dot Grid</h2>
    <dot-grid />
    <fabric-canvas
      :height="400"
      :width="400"
      @object-moved="objMoved"
      @drop="objDropped"
    >
      <fabric-background-image :id="345667"></fabric-background-image>
      <fabric-group :id="3421">
        <fabric-polygon :id="342101">
          <fabric-gradient
            :x1="0"
            :x2="0"
            :y1="0"
            :y2="1"
            :gradientUnits="'percentage'"
            :colorStops="{ 0: '#000', 1: '#fff' }"
          ></fabric-gradient>
          <fabric-shadow
            :offsetX="25"
            :offsetY="25"
            :color="'rgba(0,0,0,.3)'"
          ></fabric-shadow>
        </fabric-polygon>
        <fabric-text :id="342104" :text="'hello stick man'"></fabric-text>
      </fabric-group>
      <fabric-polyline :id="342102"></fabric-polyline>
      <fabric-svg-from-url :id="'ttyuud'"></fabric-svg-from-url>
    </fabric-canvas>
    <div id="drag1" @dragstart="dragStart" class="draggable" draggable></div>
  </div>
</template>

<script>
import StickMan from "./examples/StickMan";
import Animation from "./examples/Animation";
import LineGrid from "./examples/LineGrid";
import DotGrid from "./examples/DotGrid";
import FabricAnimation from "./components/FabricAnimation";
import FabricBackgroundImage from "./components/FabricBackgroundImage";
import FabricCanvas from "./components/FabricCanvas";
import FabricCircle from "./components/FabricCircle";
import FabricEllipse from "./components/FabricEllipse";
import FabricGradient from "./components/FabricGradient.vue";
import FabricGroup from "./components/FabricGroup";
import FabricImageFromUrl from "./components/FabricImageFromURL";
import FabricLine from "./components/FabricLine";
import FabricPolygon from "./components/FabricPolygon";
import FabricPolyline from "./components/FabricPolyine";
import FabricText from "./components/FabricText";
import FabricSvgFromUrl from "./components/FabricSVGFromURL";
import FabricTriangle from "./components/FabricTriangle";
import FabricRectangle from "./components/FabricRectangle";
import FabricShadow from "./components/FabricShadow";

export default {
  name: "App",
  components: {
    StickMan,
    Animation,
    LineGrid,
    DotGrid,
    FabricBackgroundImage,
    FabricCanvas,
    FabricGradient,
    FabricGroup,
    FabricPolygon,
    FabricPolyline,
    FabricSvgFromUrl,
    FabricText,
    FabricShadow
  },
  data() {
    return {
      startAnimation: false,
      headPosLeft: 250,
      headPosTop: 125,
      bodyPosLeft: 250,
      bodyPosTop: 175,
      waistPosLeft: 250,
      waistPosTop: 250,
      leftHandPosLeft: 175,
      leftHandPosTop: 225,
      rightHandPosLeft: 325,
      rightHandPosTop: 225,
      leftFootPosLeft: 200,
      leftFootPosTop: 350,
      rightFootPosLeft: 300,
      rightFootPosTop: 350
    };
  },
  methods: {
    objMoved(e) {
      console.log("objMoved", e);
    },
    objDropped(e) {
      // eslint-disable-next-line no-console
      console.log(e);
    },
    dragStart(e) {
      // eslint-disable-next-line no-console
      console.log(e);
      e.dataTransfer.setData("text/plain", "mmmmmeeeee");
    }
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
.draggable {
  display: inline-block;
  width: 100px;
  background-color: purple;
  height: 100px;
}
</style>
