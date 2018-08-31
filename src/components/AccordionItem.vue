<template>
  <div :class="{'accordion-button': true, 'dark': theme === 'dark' }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "AccordionItem",
  inject: ["theme"]
};
</script>


<style lang="scss" scoped>
.accordion-button {
  display: grid;
  grid-template: auto auto;
  grid-gap: 4px;
  grid-auto-flow: row;

  &.dark {
    background-color: black;
    color: white;
  }
}
</style>
