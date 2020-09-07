<template>
  <div id="app">
    <fabric-canvas ref="fc" :height="400" :width="800">
      <fabric-group ref="tableGroup" :id="entity.id" :selectable="true">
        <fabric-rectangle
          :stroke="'#000'"
          :strokeWidth="1"
          ref="lines"
          v-for="(column, idx) in entity.columns"
          :id="`entity-${entity.id}-path-${idx}`"
          :key="`entity-${entity.id}-path-${idx}`"
          :width="200"
          :top="(50 * idx)"
          :height="50"
        />
      </fabric-group>
    </fabric-canvas>
    <button @click="addColumn">Add Column</button>
  </div>
</template>

<script>
import vueFabricWrapper from "../components/";

export default {
  name: "App",
  components: {
    FabricCanvas: vueFabricWrapper.FabricCanvas,
    FabricGroup: vueFabricWrapper.FabricGroup,
  },
  computed: {
    canvas() {
      return this.$refs.fc.canvas;
    }
  },
  data() {
    return {
      entity: {
        id: "uuid",
        name: "table",
        type: "table",
        columns: [{ name: "Column", nullable: false, primary: false }],
        geo: { x1: 0, x2: 200, height: 50, top: 0 }
      }
    };
  },
  methods: {
    addColumn() {
      this.entity.columns.push({ name: "Column2" });
      setTimeout(() => {
        this.canvas.requestRenderAll();
      }, 100);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
