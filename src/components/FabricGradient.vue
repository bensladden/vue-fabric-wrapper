<script>
export default {
  render(h) {
    return this.$slots.default ? h("div", this.$slots.default) : undefined;
  },
  props: {
    gradientKey: { type: String, default: "fill" },
    offsetX: { type: Number, default: 0 },
    offsetY: { type: Number, default: 0 },
    gradientTransform: { type: Array, default: null },
    gradientUnits: {
      type: String,
      default: "pixels",
      validator: function(value) {
        return ["percentage", "pixels"].indexOf(value) !== -1;
      }
    },
    gradientType: {
      type: String,
      default: "linear",
      validator: function(value) {
        return ["linear", "radial"].indexOf(value) !== -1;
      }
    },
    x1: { type: Number, default: 0 },
    y1: { type: Number, default: 0 },
    x2: { type: Number, default: 0 },
    y2: { type: Number, default: 0 },
    r1: { type: Number, default: 0 },
    r2: { type: Number, default: 0 },
    colorStops: {
      type: Object,
      default: function() {
        return {};
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
    },
    options() {
      let coords = {};
      if (this.gradientType === "linear") {
        coords = {
          x1: this.x1,
          x2: this.x2,
          y1: this.y1,
          y2: this.y2
        };
      } else {
        coords = {
          r1: this.r1,
          r2: this.r2
        };
      }
      let opts = {
        type: this.gradientType,
        ...coords,
        colorStops: this.colorStops,
        gradientUnits: this.gradientUnits,
        offsetX: this.offsetX,
        offsetY: this.offsetY
      };
      if (this.gradientTransform) {
        opts.gradientTransform = this.gradientTransform;
      }
      return opts;
    },
    validOptions() {
      if (!Object.keys(this.colorStops).length) {
        return false;
      }
      return true;
    }
  },
  watch: {
    item(newValue) {
      this.updategradient();
    },
    $props: {
      handler() {
        this.updategradient();
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    updategradient() {
      if (this.validOptions && this.item) {
        this.item.setGradient(this.gradientKey, this.options);
      }
    }
  }
};
</script>
