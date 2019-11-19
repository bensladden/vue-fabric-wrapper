<script>
import fabricObject from "./fabricObject";
export default {
  name: "fabric-path",
  inject: ["eventBus", "fabricWrapper"],
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
  created() {
    if (this.$parent.type === "canvas") {
      this.eventBus.$on("canvasCreated", () => {
        this.pathObj = new this.fabric.Path(this.path, {
          ...this.definedProps
        });
        this.canvas.add(this.pathObj);
        this.eventBus.$emit("objectCreated", this.id);
      });
    }
    if (this.$parent.type === "group") {
      this.eventBus.$on("groupCreated", id => {
        if (id === this.$parent.id) {
          this.pathObj = new this.fabric.Path(this.path, {
            ...this.definedProps
          });
          this.$parent.item.addWithUpdate(this.pathObj);
          this.eventBus.$emit("objectCreated", this.id);
        }
      });
    }
  },
  watch: {
    path(newValue) {
      if (this.item) {
        this.canvas.remove(this.item);
        if (this.$parent.type === "canvas") {
          this.pathObj = new this.fabric.Path(newValue, {
            ...this.definedProps
          });
          this.canvas.add(this.pathObj);
          this.eventBus.$emit("objectCreated", this.id);
        }
        if (this.$parent.type === "group") {
          this.pathObj = new this.fabric.Path(newValue, {
            ...this.definedProps
          });
          this.$parent.item.addWithUpdate(this.pathObj);
          this.eventBus.$emit("objectCreated", this.id);
        }
      }
    }
  }
  //   beforeDestroy() {
  //     this.destroyEvents();
  //   }
};
</script>
