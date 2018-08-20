<template>
  <div :class="{open: isOpen, closed: !isOpen}">
    <slot />
  </div>
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
.open {
  max-height: 130;
}
.closed {
  max-height: 0;
}
</style>
