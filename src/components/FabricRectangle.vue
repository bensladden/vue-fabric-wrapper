<script>
import fabricObject from "./fabricObject";
export default {
  name: "fabric-rect",
  mixins: [fabricObject],
  props: {
    top: {
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
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
      default: "red"
    }
  },
  data() {
    return {
      rect: null,
      type: "rect"
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
          if (this.parentType == "group") {
            // props should be relative to the group
            this.definedProps.left += this.parentItem.get('left')
            this.definedProps.top += this.parentItem.get('top')
            this.rect = new this.fabric.Rect(this.definedProps);
            this.parentItem.addWithUpdate(this.rect);
          } else {
            this.rect = new this.fabric.Rect({ ...this.definedProps });
            this.canvas.add(this.rect);
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
