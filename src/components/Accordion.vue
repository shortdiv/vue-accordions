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
  props: {
    stateReducer: { type: Function, required: false, default: null }
  },
  data() {
    return {
      openIndexes: [0]
    };
  },
  methods: {
    openIndexAndType(idx) {
      const closing = this.openIndexes.includes(idx);
      return {
        type: closing ? "closing" : "opening",
        openIndexes: closing
          ? this.openIndexes.filter(i => i !== idx)
          : [...this.openIndexes, idx]
      };
    },
    handleItemClick(idx) {
      let obj;
      if (typeof this.stateReducer === "function") {
        obj = this.openIndexAndType(idx);
        obj = this.stateReducer(obj);
      } else {
        obj = this.openIndexAndType(idx);
      }
      this.openIndexes = obj.openIndexes;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
