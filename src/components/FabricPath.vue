<script>
import fabricObject from "./fabricObject";
export default {
  name: "fabric-path",
  mixins: [fabricObject],
  props: {
    path: {
      type: [String, Array],
      default: "M 0 0 L 200 100 L 170 200 z"
    },
    fill: { type: String, default: "purple" },
    stroke: { type: String, default: "purple" }
  },
  data() {
    return {
      pathObj: null,
      type: "path",
      customWatch: ["path"]
    };
  },
  render(h) {
    return this.$slots.default ? h("div", this.$slots.default) : undefined;
  },
  watch: {
    parentItem: {
      handler(newValue) {
        if (newValue) {
          //Parent is created
          this.pathObj = new this.fabric.Path(this.path, {
            ...this.definedProps
          });
          if (this.parentType == "group") {
            this.parentItem.addWithUpdate(this.pathObj);
          } else {
            this.canvas.add(this.pathObj);
          }
          this.createEvents();
          this.createWatchers();
        }
      },
      immediate: true
    },
    path(newValue) {
      if (this.item) {
        if (this.parentType === "canvas") {
          this.destroyEvents();
          this.canvas.remove(this.item);
          this.pathObj = new this.fabric.Path(newValue, {
            ...this.definedProps
          });
          this.canvas.add(this.pathObj);
        }
        if (this.parentType === "group") {
          this.destroyEvents();
          this.parentItem.remove(this.item);
          this.pathObj = new this.fabric.Path(newValue, {
            ...this.definedProps
          });
          this.parentItem.addWithUpdate(this.pathObj);
        }
      }
    }
  }
  //   beforeDestroy() {
  //     this.destroyEvents();
  //   }
};
</script>
