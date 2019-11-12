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
  created() {
    this.eventBus.$on("canvasCreated", () => {
      this.group = new this.fabric.Group([], { ...this.definedProps });
      this.canvas.add(this.group);
      this.eventBus.$emit("objectCreated", this.id);
      this.eventBus.$emit("groupCreated", this.id);
    });
  },
  methods: {},
  beforeDestroy() {}
};
</script>
