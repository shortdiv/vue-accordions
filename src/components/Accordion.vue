<template>
  <div>
    <slot 
      :handleItemClick="handleItemClick"
      :openIndices="openIndexes"
    />
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      openIndexes: [0]
    };
  },
  methods: {
    handleItemClick(idx) {
      const closing = this.openIndexes.includes(idx);
      this.openIndexes = closing
        ? this.openIndexes.filter(i => i !== idx)
        : [...this.openIndexes, idx];
      // return {
      //   type: closing ? 'closing' : 'opening',
      //   openIndexes: closing
      //   ? this.openIndexes.filter(i => i !== idx)
      //   : [...this.openIndexes, idx]
      // }
    }
  }
  // render (h) {
  //   // const children = [];
  //   // Object.keys(this.$slots).forEach((key) => {
  //   //   Array.prototype.push.apply(children, this.$slots[key]);
  //   // });

  //   var s = h(
  //     'template',
  //     {},
  //     this.$slots.default
  //   )
  //   return (<template>{this.$slots.default}</template>)
  // }
};
</script>

<style lang="scss" scoped>
</style>
