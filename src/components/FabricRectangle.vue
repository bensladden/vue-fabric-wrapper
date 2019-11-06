<script>
import { Rect } from "fabric";
export default {
  inject: ["canvas"],
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
      default: 100
    },
    height: {
      type: Number,
      default: 200
    },
    fill: {
      type: String,
      default: "red"
    }
  },
  mounted() {
    console.log("canvas for child", this.canvas);
    console.log("creating rectange with props:", this.$props);
    let rect = new Rect({ ...this.$props });
    this.canvas.add(rect);
  }
};
</script>

<style>
</style>