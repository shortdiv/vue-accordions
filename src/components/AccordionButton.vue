<template>
  <transition name="slide-drawer">
    <button
      :class="{ 'open-style' : isOpen, 'dark': theme === 'dark' }"
      ref="accordionButton"
    >
      <slot />
    </button>
  </transition>
</template>

<script>
export default {
  name: "AccordionButton",
  props: {
    isOpen: { type: Boolean },
    handleItemClick: { type: Function }
  },
  inject: ["theme"],
  mounted() {
    this.$refs.accordionButton.onclick = () => {
      this.$emit("on-click");
    };
  }
};
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  flex: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
  border: none;
  &:focus {
    outline: none;
    background-color: #c9c9c9;
  }
  &.dark {
    background-color: #444444;
  }
}
.open-style {
  background-color: #d9d9d9;
}
.slide-drawer-enter-active,
.slide-drawer-leave-active {
  transition: opacity 6s;
}
.slide-drawer-enter,
slide-drawer-leave-to {
  opacity: 0;
}
</style>
