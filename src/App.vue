<template>
  <div id="app">
    <h1>Vue Fabric Wrapper: Examples</h1>
    <h2>StickMan</h2>
    <stick-man />
    <h2>Animation</h2>
    <animation />
    <fabric-canvas :height="400" :width="400" @object-moved="objMoved">
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
      <fabric-grid :id="567432"></fabric-grid>
      <fabric-svg-from-url :id="'ttyuud'"></fabric-svg-from-url>
    </fabric-canvas>
  </div>
</template>

<script>
import StickMan from "./examples/StickMan";
import Animation from "./examples/Animation";
import FabricAnimation from "./components/FabricAnimation";
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
import FabricGrid from "./components/FabricGrid";

export default {
  name: "App",
  components: {
    StickMan,
    Animation,
    FabricCanvas,
    FabricGradient,
    FabricGroup,
    FabricPolygon,
    FabricPolyline,
    FabricSvgFromUrl,
    FabricText,
    FabricShadow,
    FabricGrid
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
    }
  }
};
</script>
<style lang="scss">
$blue: #007bff;
$indigo: #6610f2;
$purple: #6f42c1;
$pink: #e83e8c;
$red: #dc3545;
$orange: #fd7e14;
$yellow: #ffc107;
$green: #28a745;
$teal: #20c997;
$cyan: #17a2b8;
$white: #fff;
$gray: #6c757d;
$gray-dark: #343a40;
$light: #f8f9fa;
$dark: #343a40;

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-outline-blue {
  color: $blue;
  border-color: $blue;
}

.btn-outline-blue:hover {
  color: $white;
  background-color: $blue;
}
</style>
