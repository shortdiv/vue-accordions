<template>
  <div>
    <slot 
      :handleItemClick="handleItemClick"
      :openIndices="openIndexes"
      :isOpen="isOpen"
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
    isOpen(openIndices, index) {
      return openIndices.includes(index);
    },
    handleItemClick(idx) {
      const closing = this.openIndexes.includes(idx);
      const allChanges = {
        type: closing ? "closing" : "opening",
        openIndexes: closing
          ? this.openIndexes.filter(i => i !== idx)
          : [...this.openIndexes, idx]
      };
      this.openIndexes =
        typeof this.stateReducer === "function"
          ? this.stateReducer({ openIndexes: this.openIndexes }, allChanges)
              .openIndexes
          : allChanges.openIndexes;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
