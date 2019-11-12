export default {
  name: "fabric-collection",
  props: {},
  computed: {},
  methods: {
    add(obj) {
      this.item.add(obj);
    },
    getObjects(type) {
      let t = type || "";
      this.item.getObjects(t);
    },
    remove(obj) {
      this.item.remove(obj);
    }
  }
};
