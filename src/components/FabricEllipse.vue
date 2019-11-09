<script>
import fabricObject from "./fabricObject";
export default {
  name: "fabric-ellipse",
  inject: ["eventBus", "fabricWrapper"],
  mixins: [fabricObject],
  props: {
    top: {
      type: Number,
      default: 20
    },
    left: {
      type: Number,
      default: 20
    },
    rx: {
      type: Number,
      default: 40
    },
    ry: {
      type: Number,
      default: 60
    },
    fill: {
      type: String,
      default: "Green"
    }
  },
  data() {
    return {
      ellipse: null
    };
  },
  render(h) {
    return this.$slots.default ? h("div", this.$slots.default) : undefined;
  },
  created() {
    this.eventBus.$on("canvasCreated", () => {
      this.ellipse = new this.fabric.Ellipse({ ...this.definedProps });
      this.canvas.add(this.ellipse);
      this.eventBus.$emit("objectCreated", this.id);
    });
  },
  methods: {},
  beforeDestroy() {}
};
</script>
