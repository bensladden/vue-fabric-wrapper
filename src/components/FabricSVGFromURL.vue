<template>
  <fabric-group :id="id">
    <!-- <fabric-path
      v-for="(path, index) in objs"
      :id="id + '_' + index"
      :key="id + '_' + index"
      :d="path.d"
    ></fabric-path>-->
  </fabric-group>
</template>

<script>
import fabricGroup from "./FabricGroup";
//import fabricPath from "./FabricPath";

export default {
  name: "fabric-svg-from-URL",
  inject: ["fabricWrapper"],
  components: {
    fabricGroup
    //fabricPath
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
  //   created() {
  //     if (this.$parent.type === "canvas") {
  //       this.eventBus.$on("canvasCreated", () => {
  //         this.fabricWrapper.fabric.loadSVGFromURL(this.url, (objs, options) => {
  //           this.objs = this.fabricWrapper.fabric.util.groupSVGElements(
  //             objs,
  //             options
  //           );
  //           console.log("objs", this.objs.getObjects());
  //         });
  //       });
  //     }
  //     if (this.$parent.type === "group") {
  //       this.eventBus.$on("groupCreated", id => {
  //         if (id === this.$parent.id) {
  //           this.fabricWrapper.fabric.loadSVGFromURL(this.url, objs => {
  //             this.objs = objs;
  //           });
  //         }
  //       });
  //     }
  //   },
  methods: {},
  beforeDestroy() {}
};
</script>
