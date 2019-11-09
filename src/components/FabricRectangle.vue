<script>
import fabricObject from "./fabricObject";
export default {
  name: "fabric-rect",
  inject: ["eventBus", "fabricWrapper"],
  mixins: [fabricObject],
  props: {
    top: {
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
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
      default: "red"
    }
  },
  data() {
    return {
      rect: null
    };
  },
  render(h) {
    return this.$slots.default ? h("div", this.$slots.default) : undefined;
  },
  created() {
    this.eventBus.$on("canvasCreated", () => {
      console.log("creating Rect");
      this.rect = new this.fabric.Rect({ ...this.definedProps });
      this.canvas.add(this.rect);
      this.eventBus.$emit("objectCreated", this.id);
    });
  },
  methods: {
    init() {}
  }
};
</script>
