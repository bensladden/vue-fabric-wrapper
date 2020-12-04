<script>
import fabricObject from "./fabricObject";

export default {
  name: "FabricSvgFromURLSimple",
  mixins: [fabricObject],
  props: {
    id: { type: [Number, String], required: true },
    url: { type: String, required: true },
  },
  data() {
    return {
      type: "svg",
      customWatch: ["url"],
    };
  },
  computed: {
    canvas() {
      return this.$canvas();
    },
  },
  watch: {
    url() {
      this.createSVG();
    },
    parentItem: {
      handler(val) {
        if (val) {
          this.createSVG();
          this.createEvents();
          this.createWatchers();
        }
      },
      immediate: true,
    },
  },
  methods: {
    async createSVG() {
      const group = new this.fabric.Group([], { id: this.id });
      this.canvas.add(group);
      this.fabric.loadSVGFromURL(this.url, (objects, options) => {
        objects.forEach((o) => group.addWithUpdate(o, options));

        group.set({ ...this.definedProps }).setCoords();
        this.canvas.renderAll();
      });
    },
  },
  inject: ["$canvas", "fabric"],
  render(h) {
    return this.$slots.default ? h("div", this.$slots.default) : undefined;
  },
};
</script>
