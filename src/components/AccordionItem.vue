<template>
  <div class="accordion-button">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.accordion-button {
  display: grid;
  gridtemplate: auto auto;
  gridgap: 4;
  gridautoflow: row;
}
</style>
