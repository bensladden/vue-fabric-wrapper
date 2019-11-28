<template>
  <div>
    <canvas id="c" :width="width" :height="height"></canvas>
    <slot></slot>
  </div>
</template>

<script>
let canvasEvents = [
  //Static Canvas events
  "before:render",
  "after:render",
  "canvas:cleared",
  "object:added",
  "object:removed",
  //Canvas events
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

import * as fabric from "fabric";
import fabricStaticCanvas from "./fabricStaticCanvas";
import Vue from "vue";

export default {
  name: "FabricCanvas",
  mixins: [fabricStaticCanvas],
  props: {
    backgroundColor: { type: String, required: false, default: "" },
    width: { type: Number, required: false, default: 600 },
    height: { type: Number, required: false, default: 400 }
  },
  data() {
    return {
      canvas: null,
      type: "canvas"
    };
  },
  provide() {
    return {
      $canvas: () => this.canvas,
      $group: () => null,
      fabric
    };
  },
  mounted() {
    this.canvas = new fabric.Canvas("c");
    canvasEvents.forEach(event => {
      let vueEvent = event.split(":").join("-");
      this.canvas.on(event, e => {
        this.$emit(vueEvent, e);
      });
    });
  },
  beforeDestroy() {
    canvasEvents.forEach(event => {
      let vueEvent = event.split(":").join("-");
      this.canvas.off(event, this.$emit(vueEvent));
    });
  }
};
</script>

<style>
canvas {
  border: 1px solid;
}
</style>
