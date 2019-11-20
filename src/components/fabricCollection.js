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
      if (this.item) {
        return this.item.getObjects(t);
      }
      return [];
    },
    remove(obj) {
      this.item.remove(obj);
    }
  }
};
