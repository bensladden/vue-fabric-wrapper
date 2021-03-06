<template>
  <div>
    <fabric-rectangle
      :id="id + 'rect'"
      :width="gridWidth"
      :height="gridHeight"
      :stroke="'#ccc'"
      :fill="'transparent'"
      :selectable="false"
    ></fabric-rectangle>
    <fabric-line
      v-for="(line, index) in verticalLines"
      v-bind="line"
      :id="id + 'v' + index"
      :key="id + 'v' + index"
    ></fabric-line>
    <fabric-line
      v-for="(line, index) in horizontalLines"
      v-bind="line"
      :id="id + 'h' + index"
      :key="id + 'h' + index"
    ></fabric-line>
    <fabric-line
      :id="id + 'leftGuideLine'"
      :visible="showLeftGuideLine"
      :x1="objectMovingLeft"
      :y1="0"
      :x2="objectMovingLeft"
      :y2="gridHeight"
      :stroke="'rgba(102,153,255,0.5)'"
      :selectable="false"
    ></fabric-line>
    <fabric-line
      :id="id + 'rightGuideLine'"
      :visible="showRightGuideLine"
      :x1="objectMovingLeft + objectMovingWidth"
      :y1="0"
      :x2="objectMovingLeft + objectMovingWidth"
      :y2="gridHeight"
      :stroke="'rgba(102,153,255,0.5)'"
      :selectable="false"
    ></fabric-line>
    <fabric-line
      :id="id + 'topGuideLine'"
      :visible="showTopGuideLine"
      :x1="0"
      :y1="objectMovingTop"
      :x2="gridWidth"
      :y2="objectMovingTop"
      :stroke="'rgba(102,153,255,0.5)'"
      :selectable="false"
    ></fabric-line>
    <fabric-line
      :id="id + 'bottomGuideLine'"
      :visible="showBottomGuideLine"
      :x1="0"
      :y1="objectMovingTop + objectMovingHeight"
      :x2="gridWidth"
      :y2="objectMovingTop + objectMovingHeight"
      :selectable="false"
      :stroke="'rgba(102,153,255,0.5)'"
    ></fabric-line>
  </div>
</template>

<script>
import FabricLine from "./FabricLine.vue";
import FabricRectangle from "./FabricRectangle.vue";
export default {
  props: {
    id: { type: [Number, String], required: true },
    gridSize: { type: Number, default: 30 },
    gridHeight: { type: Number, default: 300 },
    gridWidth: { type: Number, default: 300 },
    showGuideLines: { type: Boolean, default: true },
    snappable: { type: Boolean, default: true }
  },
  components: {
    FabricLine,
    FabricRectangle
  },
  inject: ["$canvas"],
  data() {
    return {
      horizontalLines: [],
      verticalLines: [],
      objectMoving: false,
      objectMovingLeft: 0,
      objectMovingTop: 0,
      objectMovingHeight: 0,
      objectMovingWidth: 0,
      showLeftGuideLine: false,
      showRightGuideLine: false,
      showTopGuideLine: false,
      showBottomGuideLine: false
    };
  },
  computed: {
    numberofVerticalLines() {
      return parseInt(this.gridWidth / this.gridSize);
    },
    numberofHorizontalLines() {
      return parseInt(this.gridHeight / this.gridSize);
    },
    canvas() {
      return this.$canvas();
    },
    canvasExists() {
      if (typeof this.canvas === typeof undefined) {
        return false;
      }
      if (this.canvas == null) {
        return false;
      }
      return true;
    }
  },
  watch: {
    $props: {
      handler() {
        this.setup();
      },
      deep: true,
      immediate: true
    },
    canvasExists: {
      handler(newValue) {
        if (newValue) {
          this.canvas.on("object:moved", () => {
            this.finishMove();
          });
          this.canvas.on("object:moving", e => {
            this.checkSnap(e);
          });
        }
      },
      immediate: true
    }
  },
  methods: {
    async setup() {
      this.horizontalLines = [];
      this.verticalLines = [];
      await this.$nextTick();
      for (let i = 1; i < this.numberofVerticalLines; i++) {
        this.verticalLines.push({
          stroke: "#ccc",
          selectable: false,
          x1: i * this.gridSize,
          y1: 0,
          x2: i * this.gridSize,
          y2: this.gridHeight
        });
      }
      for (let i = 1; i < this.numberofHorizontalLines; i++) {
        this.horizontalLines.push({
          stroke: "#ccc",
          selectable: false,
          x1: 0,
          y1: i * this.gridSize,
          x2: this.gridWidth,
          y2: i * this.gridSize
        });
      }
    },
    checkSnap(e) {
      let snapThres = 4;
      this.objectMoving = true;
      this.objectMovingLeft = e.target.left;
      this.objectMovingTop = e.target.top;
      this.objectMovingHeight = e.target.height * e.target.scaleY;
      this.objectMovingWidth = e.target.width * e.target.scaleX;

      if (
        Math.round((e.target.left / this.gridSize) * snapThres) % snapThres ==
        0
      ) {
        e.target.set(
          "left",
          Math.round(e.target.left / this.gridSize) * this.gridSize
        );
        if (this.showGuideLines) {
          this.showLeftGuideLine = true;
        }
      } else {
        this.showLeftGuideLine = false;
      }

      if (
        Math.round((e.target.top / this.gridSize) * snapThres) % snapThres ==
        0
      ) {
        e.target.set(
          "top",
          Math.round(e.target.top / this.gridSize) * this.gridSize
        );
        if (this.showGuideLines) {
          this.showTopGuideLine = true;
        }
      } else {
        this.showTopGuideLine = false;
      }

      if (
        Math.round(
          ((e.target.left + this.objectMovingWidth) / this.gridSize) * snapThres
        ) %
          snapThres ==
        0
      ) {
        e.target.set(
          "left",
          Math.round((e.target.left + this.objectMovingWidth) / this.gridSize) *
            this.gridSize -
            this.objectMovingWidth
        );
        if (this.showGuideLines) {
          this.showRightGuideLine = true;
        }
      } else {
        this.showRightGuideLine = false;
      }

      if (
        Math.round(
          ((e.target.top + this.objectMovingHeight) / this.gridSize) * snapThres
        ) %
          snapThres ==
        0
      ) {
        e.target.set(
          "top",
          Math.round((e.target.top + this.objectMovingHeight) / this.gridSize) *
            this.gridSize -
            this.objectMovingHeight
        );
        if (this.showGuideLines) {
          this.showBottomGuideLine = true;
        }
      } else {
        this.showBottomGuideLine = false;
      }
    },
    finishMove() {
      this.objectMoving = false;
      this.showLeftGuideLine = false;
      this.showRightGuideLine = false;
      this.showTopGuideLine = false;
      this.showBottomGuideLine = false;
      this.objectMovingLeft = 0;
      this.objectMovingTop = 0;
      this.objectMovingHeight = 0;
      this.objectMovingWidth = 0;
    }
  }
};
</script>

<style></style>
