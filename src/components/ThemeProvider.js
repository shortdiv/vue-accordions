export default {
  props: {
    theme: { type: String, default: "light" }
  },
  render() {
    return this.$slots.default[0];
  },
  provide() {
    return {
      theme: this.theme
    };
  }
};
