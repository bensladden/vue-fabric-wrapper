<script>
import fabricObject from "./fabricObject";
export default {
  name: "fabric-text",
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
  watch: {
    parentItem: {
      handler(newValue) {
        if (newValue) {
          //Parent is created
          this.textObj = new this.fabric.Text(this.text, {
            ...this.definedProps
          });
          if (this.parentType == "group") {
            this.parentItem.addWithUpdate(this.textObj);
          } else {
            this.canvas.add(this.textObj);
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
