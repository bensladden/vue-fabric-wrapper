<template>
  <div>
    <fabric-canvas :id="'animation'" :height="400" :width="400">
      <fabric-image
        :id="342103"
        :url="'../vue.png'"
        :top="200"
        :left="left"
        :angle="angle"
      >
        <fabric-animation
          :start.sync="startAnimation"
          :animateKeys="{ left: 400, angle: 180 }"
          :animateDuration="2000"
          @complete="reset"
        ></fabric-animation>
      </fabric-image>
    </fabric-canvas>
    <b-button variant="outline-primary" @click="startAnimation = true"
      >animate</b-button
    >
  </div>
</template>

<script>
import vueFabricWrapper from "../components/";

export default {
  name: "Animation",
  components: {
    FabricCanvas: vueFabricWrapper.FabricCanvas,
    FabricImage: vueFabricWrapper.FabricImageFromURL
  },
  data() {
    return {
      startAnimation: false,
      left: 0,
      angle: 0
    };
  },
  methods: {
    reset(evt) {
      this.left = evt.left;
      this.angle = evt.angle;
      this.$nextTick(() => {
        this.left = 0;
        this.angle = 0;
      });
    }
  }
};
</script>
