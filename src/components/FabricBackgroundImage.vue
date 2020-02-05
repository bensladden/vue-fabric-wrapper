<script>
import fabricObject from "./fabricObject";
export default {
  name: "fabric-BackgroundImage",
  mixins: [fabricObject],
  props: {
    url: { type: String, default: "../vue.png" },
    top: {
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
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
  watch: {
    parentItem: {
      handler(newValue) {
        if (newValue) {
          //Parent is created
          this.fabric.Image.fromURL(
            this.url,
            img => {
              this.image = img;
              this.canvas.setBackgroundImage(this.image, () => {
                this.canvas.renderAll();
              });
            },
            { ...this.definedProps }
          );
        }
      },
      immediate: true
    }
  },
  methods: {},
  beforeDestroy() {}
};
</script>
