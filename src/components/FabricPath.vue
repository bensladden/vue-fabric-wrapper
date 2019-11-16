<script>
import fabricObject from "./fabricObject";
export default {
  name: "fabric-path",
  inject: ["eventBus", "fabricWrapper"],
  mixins: [fabricObject],
  props: {
    d: {
      type: String,
      default: "M 0 0 L 200 100 L 170 200 z"
    },
    fill: { type: String, default: "purple" },
    stroke: { type: String, default: "purple" }
  },
  data() {
    return {
      path: null,
      type: "path"
    };
  },
  render(h) {
    return this.$slots.default ? h("div", this.$slots.default) : undefined;
  },
  created() {
    if (this.$parent.type === "canvas") {
      this.eventBus.$on("canvasCreated", () => {
        this.path = new this.fabric.Path(this.d, {
          ...this.definedProps
        });
        this.canvas.add(this.path);
        this.eventBus.$emit("objectCreated", this.id);
      });
    }
    if (this.$parent.type === "group") {
      this.eventBus.$on("groupCreated", id => {
        if (id === this.$parent.id) {
          this.path = new this.fabric.Path(this.d, {
            ...this.definedProps
          });
          this.$parent.item.addWithUpdate(this.path);
          this.eventBus.$emit("objectCreated", this.id);
        }
      });
    }
  },
  methods: {},
  beforeDestroy() {}
};
</script>
