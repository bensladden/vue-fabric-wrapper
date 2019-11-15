<script>
import fabricObject from "./fabricObject";
export default {
  name: "fabric-polyline",
  inject: ["eventBus", "fabricWrapper"],
  mixins: [fabricObject],
  props: {
    points: {
      type: Array,
      default: function() {
        return [
          { x: 10, y: 10 },
          { x: 50, y: 30 },
          { x: 40, y: 70 },
          { x: 60, y: 50 },
          { x: 100, y: 150 },
          { x: 40, y: 100 }
        ];
      }
    },
    stroke: { type: String, default: "red" }
  },
  data() {
    return {
      polyline: null,
      type: "polyline"
    };
  },
  render(h) {
    return this.$slots.default ? h("div", this.$slots.default) : undefined;
  },
  created() {
    if (this.$parent.type === "canvas") {
      this.eventBus.$on("canvasCreated", () => {
        this.polyline = new this.fabric.Polyline(this.points, {
          ...this.definedProps
        });
        this.canvas.add(this.polyline);
        this.eventBus.$emit("objectCreated", this.id);
      });
    }
    if (this.$parent.type === "group") {
      this.eventBus.$on("groupCreated", id => {
        if (id === this.$parent.id) {
          this.polyline = new this.fabric.Polyline(this.points, {
            ...this.definedProps
          });
          this.$parent.item.addWithUpdate(this.polyline);
          this.eventBus.$emit("objectCreated", this.id);
        }
      });
    }
  },
  methods: {},
  beforeDestroy() {}
};
</script>
