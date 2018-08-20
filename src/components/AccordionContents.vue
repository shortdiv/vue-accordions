<template>
  <transition name="slide-in-out">
  <div :class="{open: isOpen, closed: !isOpen}">
    <slot />
  </div>
  </transition>
</template>

<script>
export default {
  name: "AccordionContents",
  props: {
    isOpen: { type: Boolean }
  }
};
</script>

<style scoped lang="scss">
.slide-in-out-enter-active,
.slide-in-out-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-in-out-enter,
slide-in-out-leave-to {
  max-height: 0;
}

.open {
  transition: max-height 4s;
  max-height: 130;
}
.closed {
  transition: max-height 4s;
  max-height: 0;
}
div {
  overflow-y: hidden;
  text-align: justify;
}
</style>
