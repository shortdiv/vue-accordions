<template>
  <div class="accordion-button">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.accordion-button {
  display: grid;
  grid-template: auto auto;
  grid-gap: 4px;
  grid-auto-flow: row;
}
</style>
