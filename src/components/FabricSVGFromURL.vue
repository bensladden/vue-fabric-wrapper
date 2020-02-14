<template>
  <fabric-group :id="id" v-bind.sync="groupProps">
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

//Props to change via interaction and need to be emitted for prop.sync usage
const EMIT_PROPS = [
  "angle",
  "height",
  "left",
  "originX",
  "originY",
  "scaleX",
  "scaleY",
  "skewX",
  "skewY",
  "top",
  "width"
];

//Monitor the group Object and emit an update to allow .sync usage
const watchEmitProp = (key, deep) => ({
  handler(newValue) {
    //If the prop caused the update there is no point emitting it back
    if (this.$attrs[key] === newValue) {
      return;
    }
    this.$emit("update:" + key, newValue);
  },
  deep
});
//Monitor the Props and update the item with the changed value
const watchAttrs = (key, deep) => ({
  handler(newValue) {
    if (this.groupProps[key] === newValue) {
      return;
    }
    this.groupProps[key] = newValue;
  },
  deep
});

export default {
  name: "fabric-svg-from-URL",
  inject: ["fabric"],
  inheritAttrs: false,
  components: {
    fabricGroup,
    fabricPath
  },
  props: {
    id: { type: [Number, String], required: true },
    url: { type: String, default: "../svg/pipe.svg" }
  },
  data() {
    return {
      objs: null,
      groupProps: null,
      customWatch: ["url"]
    };
  },
  created() {
    this.groupProps = this.$attrs; //any props that are not in the prop definition are assuemed to be for the group
    this.createSVG();
    this.createGroupAttrWatchers();
    this.createFabricItemWatchers();
  },
  watch: {
    url(newValue) {
      if (this.objs) {
        this.destroySVG();
      }
      this.createSVG();
    }
  },
  methods: {
    createSVG() {
      this.fabric.loadSVGFromURL(this.url, (objs, options) => {
        this.objs = objs;
      });
    },
    destroySVG() {
      this.objs = null;
    },
    createFabricItemWatchers() {
      //Setup Watchers for emmit sync option
      EMIT_PROPS.forEach(prop => {
        this.$watch("groupProps." + prop, watchEmitProp(prop, true));
      });
    },
    createGroupAttrWatchers() {
      //Setup prop watches to sync with fabric
      Object.keys(this.$attrs).forEach(key => {
        //Custom watch check to make sure the mixin also does not genearte a watch
        if (typeof this.customWatch !== typeof undefined) {
          if (this.customWatch.includes(key)) {
            return;
          }
        }
        this.$watch("$attrs." + key, watchAttrs(key, true));
      });
    }
  },
  beforeDestroy() {
    this.destroySVG();
  }
};
</script>
