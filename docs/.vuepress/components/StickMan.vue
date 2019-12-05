<template>
  <div v-if="FabricCanvas && FabricCircle && FabricLine">
    <component :is="FabricCanvas" :height="400" :width="400">
      <component
        :is="FabricLine"
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
      ></component>
      <component
        :is="FabricLine"
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
      ></component>
      <component
        :is="FabricLine"
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
      ></component>
      <component
        :is="FabricLine"
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
      ></component>
      <component
        :is="FabricLine"
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
      ></component>
      <component
        :is="FabricLine"
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
      ></component>
      <component
        :is="FabricCircle"
        :id="'head'"
        :left.sync="headPosLeft"
        :top.sync="headPosTop"
        :strokeWidth="5"
        :radius="12"
        :fill="'#fff'"
        :stroke="'#666'"
        :originX="'center'"
        :originY="'center'"
      ></component>
      <component
        :is="FabricCircle"
        :id="'body'"
        :left.sync="bodyPosLeft"
        :top.sync="bodyPosTop"
        :strokeWidth="5"
        :radius="12"
        :fill="'#fff'"
        :stroke="'#666'"
        :originX="'center'"
        :originY="'center'"
      ></component>
      <component
        :is="FabricCircle"
        :id="'waist'"
        :left.sync="waistPosLeft"
        :top.sync="waistPosTop"
        :strokeWidth="5"
        :radius="12"
        :fill="'#fff'"
        :stroke="'#666'"
        :originX="'center'"
        :originY="'center'"
      ></component>
      <component
        :is="FabricCircle"
        :id="'leftHand'"
        :left.sync="leftHandPosLeft"
        :top.sync="leftHandPosTop"
        :strokeWidth="5"
        :radius="12"
        :fill="'#fff'"
        :stroke="'#666'"
        :originX="'center'"
        :originY="'center'"
      ></component>
      <component
        :is="FabricCircle"
        :id="'rightHand'"
        :left.sync="rightHandPosLeft"
        :top.sync="rightHandPosTop"
        :strokeWidth="5"
        :radius="12"
        :fill="'#fff'"
        :stroke="'#666'"
        :originX="'center'"
        :originY="'center'"
      ></component>
      <component
        :is="FabricCircle"
        :id="'leftFoot'"
        :left.sync="leftFootPosLeft"
        :top.sync="leftFootPosTop"
        :strokeWidth="5"
        :radius="12"
        :fill="'#fff'"
        :stroke="'#666'"
        :originX="'center'"
        :originY="'center'"
      ></component>
      <component
        :is="FabricCircle"
        :id="'rightFoot'"
        :left.sync="rightFootPosLeft"
        :top.sync="rightFootPosTop"
        :strokeWidth="5"
        :radius="12"
        :fill="'#fff'"
        :stroke="'#666'"
        :originX="'center'"
        :originY="'center'"
      ></component>
    </component>
  </div>
</template>

<script>
export default {
  name: "StickMan",
  data() {
    return {
      FabricCanvas: null,
      FabricCircle: null,
      FabricLine: null,
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
  mounted() {
    let vfw = require("../../../dist/vue-fabric-wrapper.umd");
    console.log("mod", vfw);
    this.FabircCanvas = vfw.VueFabricWrapper.FabricCanvas;
    this.FabricLine = vfw.VueFabricWrapper.FabricLine;
    this.FabricCircle = vfw.VueFabricWrapper.FabricCircle;
    console.log("test2");

    console.log("test");
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
