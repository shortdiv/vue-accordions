<template>
  <button 
    :class="{ 'open-style' : isOpen }"
    ref="accordionButton"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "AccordionButton",
  props: {
    isOpen: { type: Boolean },
    handleItemClick: { type: Function }
  },
  mounted() {
    this.$refs.accordionButton.onclick = () => {
      this.handleItemClick();
    };
  }
};
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  flex: 1;
  paddingtop: 10;
  paddingbottom: 10;
  fontsize: 20;
  border: none;
  &:focus {
    outline: none;
    backgroundcolor: #c9c9c9;
  }
}
.open-style {
  background-color: #d9d9d9;
}
</style>
