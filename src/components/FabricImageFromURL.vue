<script>
import fabricObject from "./fabricObject";
export default {
  name: "fabric-image-from-URL",
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
      type: "image",
      customWatch: ["url"]
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
          this.createImage();
        }
      },
      immediate: true
    },
    url(newValue) {
      if (this.parentItem) {
        if (this.image) {
          this.destroyImage();
        }
        this.createImage();
      }
    }
  },
  methods: {
    createImage() {
      this.fabric.Image.fromURL(
        this.url,
        img => {
          this.image = img;
          this.$emit("image-loaded", img);
          if (this.parentType == "group") {
            this.parentItem.addWithUpdate(this.image);
          } else {
            this.canvas.add(this.image);
          }
          this.createEvents();
          this.createWatchers();
        },
        { ...this.definedProps }
      );
    },
    destroyImage() {
      this.destroyEvents();
      if (this.parentType == "group") {
        if (this.group) {
          this.group.removeWithUpdate(this.image);
        }
      } else {
        if (this.canvas) {
          this.canvas.remove(this.image);
        }
        this.image = null;
      }
    }
  }
};
</script>
