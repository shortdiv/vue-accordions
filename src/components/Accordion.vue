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
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
