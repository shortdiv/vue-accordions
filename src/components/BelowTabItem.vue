<template>
  <div :class="{ 'accordion-tab': true, 'open-tab': isOpen }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BelowTabItem",
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
.accordion-tab {
  opacity: 0;
  top: 300px;
  transition: all 0.1s cubic-bezier(0, 0.5, 0.5, 1);
}

.open-tab {
  opacity: 1;
  top: 0;
}
</style>
