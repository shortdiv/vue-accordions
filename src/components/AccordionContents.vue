<template>
  <transition :name="transitionName">
    <div class="accordion-contents" v-show="isOpen">
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
  max-height: 300px;
  opacity: 1;
}
</style>
