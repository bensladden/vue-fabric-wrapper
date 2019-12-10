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
    gridWidth: { type: Number, default: 300 }
  },
  components: {
    FabricLine,
    FabricRectangle
  },
  data() {
    return {
      horizontalLines: [],
      verticalLines: []
    };
  },
  computed: {
    numberofVerticalLines() {
      return parseInt(this.gridWidth / this.gridSize);
    },
    numberofHorizontalLines() {
      return parseInt(this.gridHeight / this.gridSize);
    }
  },
  watch: {
    $props: {
      handler() {
        this.setup();
      },
      deep: true,
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
    }
  }
};
</script>

<style></style>
