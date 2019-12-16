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
      v-for="(dot,index) in dots"
      :id="id+'dot'+index"
      :key="id+'dot'+index"
      :left="dot.left"
      :top="dot.top"
      :radius="1"
      :stroke="'#ccc'"
      :fill="'#ccc'"
      :selectable="false"
    ></fabric-circle>
    <!-- <fabric-line v-if="showGuideLines" :stroke="'rgba(102,153,255,0.5)'"></fabric-line> -->
  </div>
</template>

<script>
import FabricCircle from "./FabricCircle.vue";
import FabricRectangle from "./FabricRectangle.vue";
// import FabricLine from "./FabricLine.vue";
export default {
  props: {
    id: { type: [Number, String], required: true },
    gridSize: { type: Number, default: 30 },
    gridHeight: { type: Number, default: 300 },
    gridWidth: { type: Number, default: 300 },
    showGuideLines: { type: Boolean, default: false }
  },
  components: {
    FabricCircle,
    FabricRectangle
    // FabricLine
  },
  data() {
    return {
      dots: []
    };
  },
  computed: {
    cols() {
      return parseInt(this.gridWidth / this.gridSize);
    },
    rows() {
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
      this.dots = [];
      await this.$nextTick();
      for (let i = 1; i < this.rows; i++) {
        for (let j = 1; j < this.cols; j++) {
          this.dots.push({ left: j * this.gridSize, top: i * this.gridSize });
        }
      }
    }
  }
};
</script>

<style></style>
