<template>
  <div>
    <fabric-canvas :id="'gridtesting2'" :height="400" :width="400">
      <fabric-dot-grid
        :id="'gridtesting2'"
        :gridSize="gridSize"
        :gridHeight="gridHeight"
        :gridWidth="gridWidth"
      ></fabric-dot-grid>
      <fabric-rectangle :id="'rectGridTesting2'"></fabric-rectangle>
    </fabric-canvas>
    <b-container>
      <b-row>
        <b-col>Grid Size:</b-col>
        <b-col>
          <b-form-input
            type="number"
            v-model.number="gridSize"
            min="10"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>Grid Height:</b-col>
        <b-col>
          <b-form-input
            type="number"
            v-model.number="gridHeight"
            min="100"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>Grid Width:</b-col>
        <b-col>
          <b-form-input
            type="number"
            v-model.number="gridWidth"
            min="100"
          ></b-form-input>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import vueFabricWrapper from "../components/";

export default {
  name: "Grid",
  components: {
    FabricCanvas: vueFabricWrapper.FabricCanvas,
    FabricRectangle: vueFabricWrapper.FabricRectangle,
    FabricDotGrid: vueFabricWrapper.FabricDotGrid
  },
  data() {
    return {
      gridSize: 20,
      gridHeight: 400,
      gridWidth: 400
    };
  },
  methods: {}
};
</script>
