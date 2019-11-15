<script>
import fabricObject from "./fabricObject";
export default {
  name: "fabric-polygon",
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
    fill: { type: String, default: "purple" },
    stroke: { type: String, default: "purple" }
  },
  data() {
    return {
      polygon: null,
      type: "polygon"
    };
  },
  render(h) {
    return this.$slots.default ? h("div", this.$slots.default) : undefined;
  },
  created() {
    if (this.$parent.type === "canvas") {
      this.eventBus.$on("canvasCreated", () => {
        this.polygon = new this.fabric.Polygon(this.points, {
          ...this.definedProps
        });
        this.canvas.add(this.polygon);
        this.eventBus.$emit("objectCreated", this.id);
      });
    }
    if (this.$parent.type === "group") {
      this.eventBus.$on("groupCreated", id => {
        if (id === this.$parent.id) {
          this.polygon = new this.fabric.Polygon(this.points, {
            ...this.definedProps
          });
          this.$parent.item.addWithUpdate(this.polygon);
          this.eventBus.$emit("objectCreated", this.id);
        }
      });
    }
  },
  methods: {},
  beforeDestroy() {}
};
</script>
