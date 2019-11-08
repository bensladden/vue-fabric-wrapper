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

import * as fabric from "fabric";
import Vue from "vue";
export default {
  name: "FabricCanvas",
  props: {
    backgroundColor: { type: String, required: false, default: "" },
    width: { type: Number, required: false, default: 200 },
    height: { type: Number, required: false, default: 200 }
  },
  data() {
    return {
      fabricWrapper: {
        canvas: null,
        fabric
      },
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      fabricWrapper: this.fabricWrapper,
      eventBus: this.eventBus
    };
  },
  methods: {},
  mounted() {
    this.fabricWrapper.canvas = new fabric.Canvas("c");
    this.eventBus.$emit("canvasCreated");
    canvasEvents.forEach(event => {
      this.fabricWrapper.canvas.on(event, e => {
        this.eventBus.$emit(event, e);
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
canvas {
  border: 1px solid;
}
</style>
