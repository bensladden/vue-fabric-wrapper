<template>
  <canvas id="canvas" ref="canvas" :width="width+'px'" :height="height+'px'">
    <slot></slot>
  </canvas>
</template>

<script>
import Fabric from "Fabric";

let canvasEvents = [
  "object:modified",
  "object:rotated",
  "object:scaled",
  "object:moved",
  "object:skewed",
  "object:rotating",
  "object:scaling",
  "object:moving",
  "object:skewing",
  "before:transform",
  "before:selection:cleared",
  "selection:cleared",
  "selection:updated",
  "selection:created",
  "path:created",
  "mouse:down",
  "mouse:move",
  "mouse:up",
  "mouse:down:before",
  "mouse:move:before",
  "mouse:up:before",
  "mouse:over",
  "mouse:out",
  "mouse:dblclick",
  "event:dragover",
  "event:dragenter",
  "event:dragleave",
  "event:drop"
];

export default {
  name: "FabricCanvas",
  props: {
    backgroundColor: { type: String, required: false, default: "" },

    width: { type: Number, required: false, default: 200 },
    height: { type: Number, required: false, default: 200 }
  },
  data() {
    return {
      canvas: null
    };
  },
  methods: {},
  mounted() {
    this.canvas = new Fabric.canvas("canvas");
    canvasEvents.forEach(event => {
      let attrs = {};
      for (const key of Object.keys(this.$attrs)) {
        attr["$" + key] = this.$attrs[key];
      }

      this.canvas.on(event, e => {
        this.$emit(event, { ...e, ...attrs });
      });
    });
  },
  watch: {},
  beforeDestroy() {
    canvasEvents.forEach(event => this.canvas.off(event, this.$emit(event)));
  }
};
</script>

<style>
</style>