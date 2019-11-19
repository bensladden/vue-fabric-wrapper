<script>
import fabricObject from "./fabricObject";
export default {
  name: "fabric-circle",
  inject: ["eventBus", "fabricWrapper"],
  mixins: [fabricObject],
  props: {
    top: {
      type: Number,
      default: 40
    },
    left: {
      type: Number,
      default: 0
    },
    radius: {
      type: Number,
      default: 50
    },
    fill: {
      type: String,
      default: "blue"
    }
  },
  data() {
    return {
      circle: null,
      type: "circle"
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
          this.circle = new this.fabric.Circle({ ...this.definedProps });
          if (this.parentType == "group") {
            this.parentItem.addWithUpdate(this.circle);
          } else {
            this.canvas.add(this.circle);
          }
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
