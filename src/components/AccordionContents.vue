<template>
  <transition :name="transitionName">
    <div :class="{ 'accordion-contents': true, 'open': isOpen }">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: "AccordionContents",
  props: {
    isOpen: { type: Boolean },
    transitionName: { type: String, default: "slide-up" }
  }
};
</script>

<style lang="scss">
.accordion-contents {
  max-height: 0;
  transition: max-height 0.8s cubic-bezier(0, 0.5, 0.5, 1);
}
.open {
  max-height: 300px;
}
</style>
