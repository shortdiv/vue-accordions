<template>
  <Accordion
    :stateReducer="this.combineReducers(singleOpen, preventClose)"
  >
    <template slot-scope="{ handleItemClick, openIndices, isOpen }">
      <slot
        :handleItemClick="handleItemClick"
        :openIndices="openIndices"
        :isOpen="isOpen"
      ></slot>
    </template>
  </Accordion>
</template>

<script>
import Accordion from "./Accordion.vue";
import { singleOpen, preventClose, combineReducers } from "../utils/reducers";

export default {
  name: "Tabs",
  components: {
    Accordion
  },
  data() {
    return {
      singleOpen: null,
      preventClose: null,
      combineReducers: () => {}
    };
  },
  mounted() {
    this.singleOpen = singleOpen;
    this.preventClose = preventClose;
    this.combineReducers = combineReducers;
  }
};
</script>

<style scoped>
</style>
