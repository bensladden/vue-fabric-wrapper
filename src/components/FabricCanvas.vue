<template>
  <div>
    <canvas :id="id"></canvas>
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
  "dragover",
  "dragenter",
  "dragleave",
  "drop"
];

import * as fabric from "fabric";
import fabricStaticCanvas from "./fabricStaticCanvas";

export default {
  name: "FabricCanvas",
  mixins: [fabricStaticCanvas],
  props: {
    id: { type: String, required: false, default: "c" },
    altActionKey: { type: String, required: false, default: "shiftKey" },
    // altSelectionKey,
    centeredKey: { type: String, required: false, default: "altKey" },
    centeredRotation: { type: Boolean, required: false, default: false },
    centeredScaling: { type: Boolean, required: false, default: false },
    containerClass: {
      type: String,
      required: false,
      default: "canvas-container"
    },
    defaultCursor: { type: String, required: false, default: "default" },
    fireMiddleClick: { type: Boolean, required: false, default: false },
    fireRightClick: { type: Boolean, required: false, default: false },
    freeDrawingCursor: { type: String, required: false, default: "crosshair" },
    hoverCursor: { type: String, required: false, default: "move" },
    isDrawingMode: { type: Boolean, required: false, default: false },
    moveCursor: { type: String, required: false, default: "move" },
    notAllowedCursor: { type: String, required: false, default: "not-allowed" },
    perPixelTargetFind: { type: Boolean, required: false, default: false },
    preserveObjectStacking: { type: Boolean, required: false, default: false },
    rotationCursor: { type: String, required: false, default: "crosshair" },
    selection: { type: Boolean, required: false, default: true },
    selectionBorderColor: {
      type: String,
      required: false,
      default: "rgba(255, 255, 255, 0.3)"
    },
    selectionColor: {
      type: String,
      required: false,
      default: "rgba(100, 100, 255, 0.3)"
    },
    // selectionDashArray: {
    //   type: Array,
    //   required: false,
    //   default: () => []
    // },
    selectionFullyContained: { type: Boolean, required: false, default: false },
    selectionKey: { type: String, required: false, default: "shiftKey" },
    selectionLineWidth: { type: Number, required: false, default: 1 },
    skipTargetFind: { type: Boolean, required: false, default: false },
    snapAngle: { type: Number, required: false, default: 0 },
    // snapThreshold,
    stopContextMenu: { type: Boolean, required: false, default: false },
    targetFindTolerance: { type: Number, required: false, default: 0 },
    // targets
    uniScaleKey: { type: String, required: false, default: "shiftKey" },
    uniScaleTransform: { type: Boolean, required: false, default: false },

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
  methods: {
    createEvents() {
      canvasEvents.forEach(event => {
        let vueEvent = event.split(":").join("-");
        this.canvas.on(event, e => {
          this.$emit(vueEvent, e);
        });
      });
    }
  },
  computed: {
    definedProps() {
      const obj = { ...this.$props };
      Object.keys(obj).forEach(key => {
        if (obj[key] === undefined) {
          delete obj[key];
        }
      });
      return obj;
    }
  },
  mounted() {
    this.canvas = new fabric.Canvas(this.id, {
      ...this.definedProps
    });
    this.createEvents();
  },
  beforeDestroy() {
    canvasEvents.forEach(event => {
      let vueEvent = event.split(":").join("-");
      this.canvas.off(event, this.$emit(vueEvent));
    });
  },
  watch: {
    canvas: {
      handler(newValue) {
        this.$emit("canvas-updated", this.canvas);
      },
      deep: true,
      initial: true
    },
    height(newValue) {
      this.canvas.setHeight(newValue);
      this.canvas.renderAll();
      this.canvas.calcOffset();
    },
    width(newValue) {
      this.canvas.setWidth(newValue);
      this.canvas.renderAll();
      this.canvas.calcOffset();
    },
    backgroundColor(newValue) {
      this.canvas.setBackgroundColor(newValue, () => {
        this.canvas.renderAll();
      });
    },
    overlayColor(newValue) {
      this.canvas.setOverlayColor(newValue, () => {
        this.canvas.renderAll();
      });
    }
  }
};
</script>

<style>
canvas {
  border: 1px solid;
}
</style>
