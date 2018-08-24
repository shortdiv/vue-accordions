<template>
  <div :class="{ 'accordion-above-tab': true, 'open-above-tab': isOpen }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AboveTabItem",
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
.accordion-above-tab {
  opacity: 0;
  bottom: 30px;
}
.open-above-tab {
  opacity: 1;
  bottom: 0;
  transition: all 0.1s cubic-bezier(0, 0.5, 0.5, 1);
}
</style>
