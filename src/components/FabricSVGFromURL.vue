<template>
  <fabric-group :id="id">
    <fabric-path
      v-for="(path, index) in objs"
      :id="id + '_' + index"
      :key="id + '_' + index"
      :path="path.d"
    ></fabric-path>
  </fabric-group>
</template>

<script>
import fabricGroup from "./FabricGroup";
import fabricPath from "./FabricPath";

export default {
  name: "fabric-svg-from-URL",
  mixins: [fabricObject], //Assists in passing the required props on.
  components: {
    fabricGroup,
    fabricPath
  },
  props: {
    id: { type: [Number, String], required: true },
    url: { type: String, default: "../svg/pipe.svg", required: true },
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
