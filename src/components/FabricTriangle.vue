<script>
import fabricObject from "./fabricObject";
export default {
  name: "fabric-triangle",
  inject: ["fabricWrapper"],
  mixins: [fabricObject],
  props: {
    top: {
      type: Number,
      default: 80
    },
    left: {
      type: Number,
      default: 120
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
      default: "yellow"
    }
  },
  data() {
    return {
      triangle: null,
      type: "triangle"
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
          this.triangle = new this.fabric.Triangle({ ...this.definedProps });
          if (this.parentType == "group") {
            this.parentItem.addWithUpdate(this.triangle);
          } else {
            this.canvas.add(this.triangle);
          }
          this.createEvents();
          this.createWatchers();
        }
      },
      immediate: true
    }
  },
  methods: {},
  beforeDestroy() {}
};
</script>
