<script>
export default {
  render(h) {
    return this.$slots.default ? h("div", this.$slots.default) : undefined;
  },
  props: {
    start: { type: Boolean, default: false },
    animateKeys: {
      type: Object,
      default: function() {
        return {};
      }
    },
    animateDuration: { type: Number, default: 500 },
    animateEasing: {
      type: String,
      default: "",
      validator: function(value) {
        return (
          [
            "",
            "easeInQuad",
            "easeOutQuad",
            "easeInOutQuad",
            "easeInCubic",
            "easeOutCubic",
            "easeInOutCubic",
            "easeInQuart",
            "easeOutQuart",
            "easeInOutQuart",
            "easeInQuint",
            "easeOutQuint",
            "easeInOutQuint",
            "easeInSine",
            "easeOutSine",
            "easeInOutSine",
            "easeInExpo",
            "easeOutExpo",
            "easeInOutExpo",
            "easeInCirc",
            "easeOutCirc",
            "easeInOutCirc",
            "easeInElastic",
            "easeOutElastic",
            "easeInOutElastic",
            "easeInBack",
            "easeOutBack",
            "easeInOutBack",
            "easeInBounce",
            "easeOutBounce",
            "easeInOutBounce"
          ].indexOf(value) !== -1
        );
      }
    }
  },
  inject: ["$canvas", "fabric", "$item"],
  computed: {
    canvas() {
      return this.$canvas();
    },
    item() {
      return this.$item();
    },
    definedProps() {
      const obj = { ...this.$props };
      Object.keys(obj).forEach(key => {
        if (obj[key] === undefined) {
          delete obj[key];
        }
      });
      return obj;
    }
  },
  watch: {
    start: {
      handler(newValue) {
        if (newValue) {
          if (Object.keys(this.animateKeys).length >= 1) {
            this.animate();
          }
        }
      },
      immediate: false
    }
  },
  methods: {
    animate() {
      let easing = {};
      if (this.animationEasing !== "") {
        easing = { easing: this.fabric.util.ease[this.animationEasing] };
      }
      this.item.animate(this.animateKeys, {
        duration: this.animateDuration,
        ...easing,
        onChange: () => {
          this.canvas.renderAll();
          this.$emit("step", this.item);
        },
        onComplete: () => {
          this.$emit("complete", this.item);
          this.$emit("update:start", false);
        }
      });
    }
  }
};
</script>
