<script>
import fabricObject from "./fabricObject";
export default {
  name: "fabric-circle",
  inject: ["eventBus", "fabricWrapper"],
  mixins: [fabricObject],
  props: {
    top: {
      type: Number,
      default: 40
    },
    left: {
      type: Number,
      default: 0
    },
    radius: {
      type: Number,
      default: 50
    },
    fill: {
      type: String,
      default: "blue"
    }
  },
  data() {
    return {
      circle: null
    };
  },
  render(h) {
    return this.$slots.default ? h("div", this.$slots.default) : undefined;
  },
  created() {
    this.eventBus.$on("canvasCreated", () => {
      this.circle = new this.fabric.Circle({ ...this.definedProps });
      this.canvas.add(this.circle);
      this.eventBus.$emit("objectCreated", this.id);
    });
  },
  methods: {},
  beforeDestroy() {}
};
</script>
