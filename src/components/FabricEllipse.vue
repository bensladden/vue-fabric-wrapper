<script>
import fabricObject from "./fabricObject";
export default {
  name: "fabric-ellipse",
  mixins: [fabricObject],
  props: {
    top: {
      type: Number,
      default: 20
    },
    left: {
      type: Number,
      default: 20
    },
    rx: {
      type: Number,
      default: 40
    },
    ry: {
      type: Number,
      default: 60
    },
    fill: {
      type: String,
      default: "Green"
    }
  },
  data() {
    return {
      ellipse: null,
      type: "ellipse"
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
          this.ellipse = new this.fabric.Ellipse({ ...this.definedProps });
          if (this.parentType == "group") {
            this.parentItem.addWithUpdate(this.ellipse);
          } else {
            this.canvas.add(this.ellipse);
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
