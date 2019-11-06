<template>
  <canvas id="c" :width="width" :height="height">
    <slot></slot>
  </canvas>
</template>

<script>
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

import { Canvas, Rect } from "fabric";

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
  provide() {
    return {
      canvas: this.canvas
    };
  },
  methods: {},
  mounted() {
    this.canvas = new Canvas("c");
    let rect = new Rect({
      top: 10,
      left: 10,
      width: 60,
      height: 60,
      fill: "green"
    });

    canvasEvents.forEach(event => {
      let attrs = {};
      for (const key of Object.keys(this.$attrs)) {
        attrs["$" + key] = this.$attrs[key];
      }
      this.canvas.on(event, e => {
        this.$emit(event, { ...e, ...attrs });
      });
    });

    this.canvas.add(rect);
  },
  watch: {},
  beforeDestroy() {
    canvasEvents.forEach(event => this.canvas.off(event, this.$emit(event)));
  }
};
</script>

<style>
canvas {
  border: 1px solid;
}
</style>