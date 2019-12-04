<script>
const watchProp = (key, deep) => ({
  handler(newValue) {
    this.applyshadow();
  },
  deep
});

export default {
  render(h) {
    return this.$slots.default ? h("div", this.$slots.default) : undefined;
  },
  props: {
    affectStroke: { type: Boolean, default: false },
    blur: { type: Number, default: 0 },
    color: { type: String, default: "rgb(0,0,0)" },
    includeDefaultValues: { type: Boolean, default: true },
    nonScaling: { type: Boolean, default: false },
    offsetX: { type: Number, default: 0 },
    offsetY: { type: Number, default: 0 }
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
    $props: {
      handler() {
        this.applyshadow();
      },
      deep: true,
      immediate: true
    },
    item: {
      handler(newValue) {
        if (newValue) {
          this.applyshadow();
        }
      },
      immediate: true
    }
  },
  methods: {
    applyshadow() {
      if (this.item) {
        this.item.setShadow({ ...this.definedProps });
      }
    }
  }
};
</script>
