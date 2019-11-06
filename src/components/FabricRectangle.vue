<script>
import { Rect } from "fabric";
export default {
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

  inject: ["canvas"],
  data() {
    return {
      c: this.canvas
    };
  },
  render(h) {
    return this.$slots.default ? h("div", this.$slots.default) : undefined;
  },
  mounted() {},
  watch: {
    c: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          console.log("canvas for child", this.c);
          console.log(
            "creating rectange with props:",
            JSON.stringify(this.$props)
          );
          let rect = new Rect({ ...this.$props });
          this.c.add(rect);
        }
      }
    }
  }
};
</script>

<style>
</style>