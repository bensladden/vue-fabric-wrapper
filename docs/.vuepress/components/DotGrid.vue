<template>
  <div v-if="FabricCanvas && FabricRectangle && FabricDotGrid">
    <fabric-canvas :id="'gridtesting2'" :height="400" :width="400">
      <fabric-dot-grid
        :id="'gridtesting2'"
        :gridSize="gridSize"
        :gridHeight="gridHeight"
        :gridWidth="gridWidth"
      ></fabric-dot-grid>
      <fabric-rectangle :id="'rectGridTesting2'"></fabric-rectangle>
    </fabric-canvas>
  </div>
</template>

<script>
export default {
  name: "Grid",
  data() {
    return {
      FabricCanvas: null,
      FabricRectangle: null,
      FabricDotGrid: null,
      gridSize: 40,
      gridHeight: 400,
      gridWidth: 400
    };
  },
  mounted() {
    import("../../../src/components").then(mod => {
      this.FabricCanvas = mod.FabricCanvas;
      this.FabricDotGrid = mod.FabricDotGrid;
      this.FabricRectangle = mod.FabricRectangle;
    });
  },
  methods: {}
};
</script>
