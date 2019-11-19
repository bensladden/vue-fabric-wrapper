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
  watch: {
    parentItem: {
      handler(newValue) {
        if (newValue) {
          //Parent is created
          this.polygon = new this.fabric.Polygon(this.points, {
            ...this.definedProps
          });
          if (this.parentType == "group") {
            this.parentItem.addWithUpdate(this.polygon);
          } else {
            this.canvas.add(this.polygon);
          }
          this.createWatchers();
        }
      },
      immediate: true
    }
  },
  methods: {},
  beforeDestroy() {}
};
</script>
