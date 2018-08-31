export default {
  props: {
    theme: { type: String, default: "light" }
  },
  render() {
    return this.$scopedSlots.default(this)[0];
  },
  provide() {
    return {
      theme: this.theme
    };
  }
};
