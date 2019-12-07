<template>
  <div v-if="FabricCanvas && FabricCircle && FabricLine">
    <fabric-canvas :height="400" :width="500">
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
      <fabric-circle
        :id="'body'"
        :left.sync="bodyPosLeft"
        :top.sync="bodyPosTop"
        :strokeWidth="5"
        :radius="12"
        :fill="'#fff'"
        :stroke="'#666'"
        :originX="'center'"
        :originY="'center'"
      ></fabric-circle>
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
      <fabric-circle
        :id="'leftHand'"
        :left.sync="leftHandPosLeft"
        :top.sync="leftHandPosTop"
        :strokeWidth="5"
        :radius="12"
        :fill="'#fff'"
        :stroke="'#666'"
        :originX="'center'"
        :originY="'center'"
      ></fabric-circle>
      <fabric-circle
        :id="'rightHand'"
        :left.sync="rightHandPosLeft"
        :top.sync="rightHandPosTop"
        :strokeWidth="5"
        :radius="12"
        :fill="'#fff'"
        :stroke="'#666'"
        :originX="'center'"
        :originY="'center'"
      ></fabric-circle>
      <fabric-circle
        :id="'leftFoot'"
        :left.sync="leftFootPosLeft"
        :top.sync="leftFootPosTop"
        :strokeWidth="5"
        :radius="12"
        :fill="'#fff'"
        :stroke="'#666'"
        :originX="'center'"
        :originY="'center'"
      ></fabric-circle>
      <fabric-circle
        :id="'rightFoot'"
        :left.sync="rightFootPosLeft"
        :top.sync="rightFootPosTop"
        :strokeWidth="5"
        :radius="12"
        :fill="'#fff'"
        :stroke="'#666'"
        :originX="'center'"
        :originY="'center'"
      ></fabric-circle>
    </fabric-canvas>
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
    import("../../../src/components").then(mod => {
      this.FabricCanvas = mod.FabricCanvas;
      this.FabricCircle = mod.FabricCircle;
      this.FabricLine = mod.FabricLine;
    });
  }
};
</script>

<style>
</style>
