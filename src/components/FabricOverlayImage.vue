<script>
import fabricObject from "./fabricObject";

//Monitor the Props and update the item with the changed value
const watchOverlayProp = (key, deep) => ({
  handler(newValue) {
    //If the prop did not cause the update there is no updating the canvas
    if (typeof this.image == "undefined") {
      return;
    }
    if (key === "id") {
      this.image.id = newValue;
      return;
    }
    if (this.image.get(key) === newValue) {
      return;
    }
    this.image.set(key, newValue);
    this.canvas.renderAll();
  },
  deep
});

export default {
  name: "fabric-overlay-image",
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
              this.$emit("image-loaded", img);
              this.canvas.setOverlayImage(this.image, () => {
                this.canvas.renderAll();
              });
              this.createOverlayPropWatchers();
            },
            { ...this.definedProps }
          );
        }
      },
      immediate: true
    }
  },
  methods: {
    createOverlayPropWatchers() {
      //Setup prop watches to sync with fabric
      Object.keys(this.$props).forEach(key => {
        this.$watch(key, watchOverlayProp(key, true));
      });
    }
  },
  beforeDestroy() {}
};
</script>
