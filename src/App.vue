<template>
  <div id="app">
    <h1>Vue Fabric Wrapper: Stick Man</h1>
    Original Demo:
    <a href="http://fabricjs.com/stickman">here</a>
    <br />See Demo in CodeSandbox
    <a
      href="https://codesandbox.io/s/vue-template-rltsr?fontsize=14&hidenavigation=1&theme=dark"
      >here</a
    >
    <fabric-canvas :height="400" :width="400" @object-moved="objMoved">
      <fabric-line
        :id="'headToBody'"
        :x1="headPosLeft"
        :y1="headPosTop"
        :x2="bodyPosLeft"
        :y2="bodyPosTop"
        :fill="'red'"
        :stroke="'red'"
        :strokeWidth="5"
        :selectable="false"
        :evented="false"
        :originX="'center'"
        :originY="'center'"
      ></fabric-line>
      <fabric-line
        :id="'bodyToWaist'"
        :x1="bodyPosLeft"
        :y1="bodyPosTop"
        :x2="waistPosLeft"
        :y2="waistPosTop"
        :fill="'red'"
        :stroke="'red'"
        :strokeWidth="5"
        :selectable="false"
        :evented="false"
        :originX="'center'"
        :originY="'center'"
      ></fabric-line>
      <fabric-line
        :id="'bodyToLeftArm'"
        :x1="bodyPosLeft"
        :y1="bodyPosTop"
        :x2="leftHandPosLeft"
        :y2="leftHandPosTop"
        :fill="'red'"
        :stroke="'red'"
        :strokeWidth="5"
        :selectable="false"
        :evented="false"
        :originX="'center'"
        :originY="'center'"
      ></fabric-line>
      <fabric-line
        :id="'bodyToRightArm'"
        :x1="bodyPosLeft"
        :y1="bodyPosTop"
        :x2="rightHandPosLeft"
        :y2="rightHandPosTop"
        :fill="'red'"
        :stroke="'red'"
        :strokeWidth="5"
        :selectable="false"
        :evented="false"
        :originX="'center'"
        :originY="'center'"
      ></fabric-line>
      <fabric-line
        :id="'waistToLeftFoot'"
        :x1="leftFootPosLeft"
        :y1="leftFootPosTop"
        :x2="waistPosLeft"
        :y2="waistPosTop"
        :fill="'red'"
        :stroke="'red'"
        :strokeWidth="5"
        :selectable="false"
        :evented="false"
        :originX="'center'"
        :originY="'center'"
      ></fabric-line>
      <fabric-line
        :id="'waistToRightFoot'"
        :x1="rightFootPosLeft"
        :y1="rightFootPosTop"
        :x2="waistPosLeft"
        :y2="waistPosTop"
        :fill="'red'"
        :stroke="'red'"
        :strokeWidth="5"
        :selectable="false"
        :evented="false"
        :originX="'center'"
        :originY="'center'"
      ></fabric-line>
      <fabric-circle
        :id="'head'"
        :left.sync="headPosLeft"
        :top.sync="headPosTop"
        :strokeWidth="5"
        :radius="12"
        :fill="'#fff'"
        :stroke="'#666'"
        :originX="'center'"
        :originY="'center'"
      ></fabric-circle>
      <fabric-ellipse
        :id="'body'"
        :left.sync="bodyPosLeft"
        :top.sync="bodyPosTop"
        :strokeWidth="5"
        :rx="12"
        :ry="24"
        :fill="'#fff'"
        :stroke="'#666'"
        :originX="'center'"
        :originY="'center'"
      ></fabric-ellipse>
      <fabric-circle
        :id="'waist'"
        :left.sync="waistPosLeft"
        :top.sync="waistPosTop"
        :strokeWidth="5"
        :radius="12"
        :fill="'#fff'"
        :stroke="'#666'"
        :originX="'center'"
        :originY="'center'"
      ></fabric-circle>
      <fabric-triangle
        :id="'leftHand'"
        :left.sync="leftHandPosLeft"
        :top.sync="leftHandPosTop"
        :strokeWidth="5"
        :width="24"
        :height="24"
        :fill="'#fff'"
        :stroke="'#666'"
        :originX="'center'"
        :originY="'center'"
      ></fabric-triangle>
      <fabric-triangle
        :id="'rightHand'"
        :left.sync="rightHandPosLeft"
        :top.sync="rightHandPosTop"
        :strokeWidth="5"
        :width="24"
        :height="24"
        :fill="'#fff'"
        :stroke="'#666'"
        :originX="'center'"
        :originY="'center'"
      ></fabric-triangle>
      <fabric-rectangle
        :id="'leftFoot'"
        :left.sync="leftFootPosLeft"
        :top.sync="leftFootPosTop"
        :strokeWidth="5"
        :width="36"
        :height="24"
        :fill="'#fff'"
        :stroke="'#666'"
        :originX="'center'"
        :originY="'center'"
      ></fabric-rectangle>
      <fabric-rectangle
        :id="'rightFoot'"
        :left.sync="rightFootPosLeft"
        :top.sync="rightFootPosTop"
        :strokeWidth="5"
        :width="36"
        :height="24"
        :fill="'#fff'"
        :stroke="'#666'"
        :originX="'center'"
        :originY="'center'"
      ></fabric-rectangle>
      <fabric-group :id="3421">
        <fabric-polygon :id="342101"></fabric-polygon>
        <fabric-text :id="342104" :text="'hello stick man'"></fabric-text>
      </fabric-group>
      <fabric-polyline :id="342102"></fabric-polyline>
      <fabric-image-from-url :id="342103">
        <fabric-animation
          :animateStart="startAnimation"
          :animateKeys="{ left: 400 }"
          :animateDuration="2000"
        ></fabric-animation>
      </fabric-image-from-url>
      <fabric-grid :id="567432"></fabric-grid>
      <fabric-svg-from-url :id="'ttyuud'"></fabric-svg-from-url>
    </fabric-canvas>
    <button @click="startAnimation = true">animate</button>
  </div>
</template>

<script>
import FabricAnimation from "./components/FabricAnimation";
import FabricCanvas from "./components/FabricCanvas";
import FabricCircle from "./components/FabricCircle";
import FabricEllipse from "./components/FabricEllipse";
import FabricGroup from "./components/FabricGroup";
import FabricImageFromUrl from "./components/FabricImageFromURL";
import FabricLine from "./components/FabricLine";
import FabricPolygon from "./components/FabricPolygon";
import FabricPolyline from "./components/FabricPolyine";
import FabricText from "./components/FabricText";
import FabricSvgFromUrl from "./components/FabricSVGFromURL";
import FabricTriangle from "./components/FabricTriangle";
import FabricRectangle from "./components/FabricRectangle";
import FabricGrid from "./components/FabricGrid";
export default {
  name: "App",
  components: {
    FabricAnimation,
    FabricCanvas,
    FabricCircle,
    FabricEllipse,
    FabricGroup,
    FabricImageFromUrl,
    FabricLine,
    FabricPolygon,
    FabricPolyline,
    FabricSvgFromUrl,
    FabricText,
    FabricTriangle,
    FabricRectangle,
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
