<template>
  <fabric-group v-bind="$props">
    <fabric-path
      v-for="(path, index) in objs"
      :id="id + '_' + index"
      :key="id + '_' + index"
      v-bind="path"
    ></fabric-path>
  </fabric-group>
</template>

<script>
import fabricGroup from "./FabricGroup";
import fabricPath from "./FabricPath";

export default {
  name: "fabric-svg-from-URL",
  inject: ["fabric"],
  components: {
    fabricGroup,
    fabricPath
  },
  props: {
    id: { type: [Number, String], required: true },
    url: { type: String, default: "../svg/pipe.svg" },
    top: {
      type: Number,
      default: 80
    },
    left: {
      type: Number,
      default: 80
    }
  },
  data() {
    return {
      objs: null
    };
  },
  created() {
    this.fabric.loadSVGFromURL(this.url, (objs, options) => {
      this.objs = objs;
      console.log("objs", this.objs);
    });
  },

  methods: {},
  beforeDestroy() {}
};
</script>
