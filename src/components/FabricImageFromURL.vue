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
      image: null,
      type: "image"
    };
  },
  render(h) {
    return this.$slots.default ? h("div", this.$slots.default) : undefined;
  },
  created() {
    if (this.$parent.type === "canvas") {
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
    }
    if (this.$parent.type === "group") {
      this.eventBus.$on("groupCreated", id => {
        if (id === this.$parent.id) {
          this.fabric.Image.fromURL(
            this.url,
            img => {
              this.image = img;
              this.$parent.item.addWithUpdate(this.image);
              this.eventBus.$emit("objectCreated", this.id);
            },
            { ...this.definedProps }
          );
        }
      });
    }
  },
  methods: {},
  beforeDestroy() {}
};
</script>
