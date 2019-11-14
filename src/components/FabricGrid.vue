<template>
  <fabric-group :id="id">
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
  </fabric-group>
</template>

<script>
import FabricGroup from "./FabricGroup.vue";
import FabricLine from "./FabricLine.vue";
export default {
  props: {
    gridSize: { type: Number, default: 10 },
    gridHeight: { type: Number, default: 100 },
    gridWidth: { type: Number, default: 100 }
  },
  components: {
    FabricGroup,
    FabricLine
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
  methods: {
    setup() {
      this.horizontalLines = [];
      this.verticalLines = [];
      for (let i = 0; i < this.numberofVerticalLines; i++) {
        this.verticalLines.push({
          stroke: "#ccc",
          selectable: false,
          points: [0, i * this.gridSize, this.gridWidth, i * this.gridSize]
        });
        this.horizontalLines.push({
          stroke: "#ccc",
          selectable: false,
          points: [i * this.gridSize, 0, i * this.gridSize, this.gridHeight]
        });
      }
    }
  }
};
</script>

<style></style>
