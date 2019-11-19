<script>
import fabricObject from "./fabricObject";
import fabricCollection from "./fabricCollection";
export default {
  name: "fabric-group",
  inject: ["eventBus", "fabricWrapper"],
  mixins: [fabricObject, fabricCollection],
  props: {
    subTargetCheck: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      group: null,
      type: "group"
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
          this.group = new this.fabric.Group([], { ...this.definedProps });
          if (this.parentType == "group") {
            this.parentItem.addWithUpdate(this.group);
          } else {
            this.canvas.add(this.group);
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
