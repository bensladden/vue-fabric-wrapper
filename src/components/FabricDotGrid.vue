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
    <fabric-circle
      v-for="(dot, index) in dots"
      :id="id + 'dot' + index"
      :key="id + 'dot' + index"
      :left="dot.left"
      :top="dot.top"
      :radius="1"
      :stroke="'#ccc'"
      :fill="'#ccc'"
      :selectable="false"
    ></fabric-circle>
    <fabric-line
      :id="id + 'leftGridLine'"
      :opacity="showLeftGridLine && objectMoving ? 0 : 1"
      :stroke="'rgba(102,153,255,0.5)'"
      :x1="objectMovingLeft"
      :y1="0"
      :x2="objectMovingLeft"
      :y2="gridHeight"
      :selectable="false"
    ></fabric-line>
    <fabric-line
      :id="id + 'rightGridLine'"
      :opacity="showRightGridLine && objectMoving ? 0 : 1"
      :stroke="'rgba(102,153,255,0.5)'"
      :x1="objectMovingLeft + objectMovingWidth"
      :y1="0"
      :x2="objectMovingLeft + objectMovingWidth"
      :y2="gridHeight"
      :selectable="false"
    ></fabric-line>
    <fabric-line
      :id="id + 'topGridLine'"
      :opacity="showTopGridLine && objectMoving ? 0 : 1"
      :stroke="'rgba(102,153,255,0.5)'"
      :x1="0"
      :y1="objectMovingTop"
      :x2="gridWidth"
      :y2="objectMovingTop"
      :selectable="false"
    ></fabric-line>
    <fabric-line
      :id="id + 'bottomGridLine'"
      :opacity="showBottomGridLine && objectMoving ? 0 : 1"
      :stroke="'rgba(102,153,255,0.5)'"
      :x1="0"
      :y1="objectMovingTop + objectMovingHeight"
      :x2="gridWidth"
      :y2="objectMovingTop + objectMovingHeight"
      :selectable="false"
    ></fabric-line>
  </div>
</template>

<script>
import FabricCircle from "./FabricCircle.vue";
import FabricRectangle from "./FabricRectangle.vue";
import FabricLine from "./FabricLine.vue";
export default {
  props: {
    id: { type: [Number, String], required: true },
    gridSize: { type: Number, default: 30 },
    gridHeight: { type: Number, default: 300 },
    gridWidth: { type: Number, default: 300 },
    showGuideLines: { type: Boolean, default: false },
    snappable: { type: Boolean, default: false }
  },
  components: {
    FabricCircle,
    FabricRectangle,
    FabricLine
  },
  inject: ["$canvas"],
  data() {
    return {
      dots: [],
      objectMoving: false,
      objectMovingId: 0,
      objectMovingLeft: 0,
      objectMovingTop: 0,
      objectMovingHeight: 0,
      objectMovingWidth: 0,
      showLeftGridLine: false,
      showRightGridLine: false,
      showTopGridLine: false,
      showBottomGridLine: false
    };
  },
  computed: {
    cols() {
      return parseInt(this.gridWidth / this.gridSize);
    },
    rows() {
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
            this.objectMoving = false;
            this.objectMovingLeft = 0;
            this.objectMovingTop = 0;
            this.objectMovingHeight = 0;
            this.objectMovingWidth = 0;
            this.objectMovingId = 0;
          });
          this.canvas.on("object:moving", e => {
            this.trackMove(e);
          });
        }
      },
      immediate: true
    }
  },
  methods: {
    async setup() {
      console.log("dot setup called");
      this.dots = [];
      await this.$nextTick();
      for (let i = 1; i < this.rows; i++) {
        for (let j = 1; j < this.cols; j++) {
          this.dots.push({ left: j * this.gridSize, top: i * this.gridSize });
        }
      }
    },
    trackMove(e) {
      this.objectMoving = true;
      this.objectMovingLeft = e.target.left;
      this.objectMovingTop = e.target.top;
      this.objectMovingHeight = e.target.height;
      this.objectMovingWidth = e.target.width;
      this.objectMovingId = e.target.id;

      if (this.objectMovingLeft % this.gridSize && this.showGuideLines) {
        this.showLeftGridLine = true;
      } else {
        this.showLeftGridLine = false;
      }

      if (
        (this.objectMovingLeft + this.objectMovingWidth) % this.gridSize &&
        this.showGuideLines
      ) {
        this.showRightGridLine = true;
      } else {
        this.showRightGridLine = false;
      }

      if (this.objectMovingTop % this.gridSize && this.showGuideLines) {
        this.showTopGridLine = true;
      } else {
        this.showTopGridLine = false;
      }

      if (
        (this.objectMovingTop + this.objectMovingHeight) % this.gridSize &&
        this.showGuideLines
      ) {
        this.showBottomGridLine = true;
      } else {
        this.showBottomGridLine = false;
      }
    }
  }
};
</script>

<style></style>
