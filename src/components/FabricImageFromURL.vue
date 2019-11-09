<script>
import fabricObject from "./fabricObject";
export default {
  name: "fabric-image-from-URL",
  inject: ["eventBus", "fabricWrapper"],
  mixins: [fabricObject],
  props: {
    url: { type: String, default: "../vue.png" },
    top: {
      type: Number,
      default: 80
    },
    left: {
      type: Number,
      default: 80
    }
  },
  data() {
    return {
      image: null
    };
  },
  render(h) {
    return this.$slots.default ? h("div", this.$slots.default) : undefined;
  },
  created() {
    this.eventBus.$on("canvasCreated", () => {
      this.fabric.Image.fromURL(
        this.url,
        img => {
          this.image = img;
          this.canvas.add(this.image);
          this.eventBus.$emit("objectCreated", this.id);
        },
        { ...this.definedProps }
      );
    });
  },
  methods: {},
  beforeDestroy() {}
};
</script>
