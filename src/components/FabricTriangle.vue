<script>
import fabricObject from "./fabricObject";
export default {
  name: "fabric-triangle",
  inject: ["eventBus", "fabricWrapper"],
  mixins: [fabricObject],
  props: {
    top: {
      type: Number,
      default: 80
    },
    left: {
      type: Number,
      default: 120
    },
    width: {
      type: Number,
      default: 50
    },
    height: {
      type: Number,
      default: 50
    },
    fill: {
      type: String,
      default: "yellow"
    }
  },
  data() {
    return {
      triangle: null,
      type: "triangle"
    };
  },
  render(h) {
    return this.$slots.default ? h("div", this.$slots.default) : undefined;
  },
  created() {
    this.eventBus.$on("canvasCreated", () => {
      this.triangle = new this.fabric.Triangle({ ...this.definedProps });
      this.canvas.add(this.triangle);
      this.eventBus.$emit("objectCreated", this.id);
    });
  },
  methods: {},
  beforeDestroy() {}
};
</script>
