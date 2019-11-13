<script>
import fabricObject from "./fabricObject";
export default {
  name: "fabric-text",
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
    fontFamily: {
      type: String,
      default: "Times New Roman"
    },
    fontSize: {
      type: Number,
      default: 40
    },
    fontStyle: {
      type: String,
      default: "normal"
    },
    fontWeight: {
      type: [Number, String],
      default: "normal"
    },
    text: {
      type: String,
      required: true
    },
    textAlign: {
      type: String,
      default: "left"
    },
    textBackgroundColor: String
  },
  data() {
    return {
      textObj: null,
      type: "text"
    };
  },
  render(h) {
    return this.$slots.default ? h("div", this.$slots.default) : undefined;
  },
  created() {
    this.eventBus.$on("canvasCreated", () => {
      this.textObj = new this.fabric.Text(this.text, { ...this.definedProps });
      this.canvas.add(this.textObj);
      this.eventBus.$emit("objectCreated", this.id);
    });
  },
  methods: {},
  beforeDestroy() {}
};
</script>
