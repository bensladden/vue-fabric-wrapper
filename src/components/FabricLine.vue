<script>
import fabricObject from "./fabricObject";
export default {
  name: "fabric-line",
  inject: ["eventBus", "fabricWrapper"],
  mixins: [fabricObject],
  props: {
    points: {
      type: Array,
      default: function() {
        return [0, 0, 100, 100];
      }
    },
    fill: { type: String, default: "red" },
    stroke: { type: String, default: "red" }
  },
  data() {
    return {
      line: null,
      type: "line"
    };
  },
  render(h) {
    return this.$slots.default ? h("div", this.$slots.default) : undefined;
  },
  created() {
    if (this.$parent.type === "canvas") {
      this.eventBus.$on("canvasCreated", () => {
        this.line = new this.fabric.Line(this.points, { ...this.definedProps });
        this.canvas.add(this.line);
        this.eventBus.$emit("objectCreated", this.id);
      });
    }
    if (this.$parent.type === "group") {
      this.eventBus.$on("groupCreated", id => {
        if (id === this.$parent.id) {
          this.line = new this.fabric.Line(this.points, {
            ...this.definedProps
          });
          this.$parent.item.addWithUpdate(this.line);
          this.eventBus.$emit("objectCreated", this.id);
        }
      });
    }
  },
  methods: {},
  beforeDestroy() {}
};
</script>
