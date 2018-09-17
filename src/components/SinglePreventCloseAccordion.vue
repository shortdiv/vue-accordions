<template>
  <Accordion
    :stateReducer="this.combineReducers(singleOpen, preventClose)"
  >
    <template slot="contents-are" slot-scope="{ handleItemClick, openIndices, isOpen }">
      <AccordionItem
        v-for="(item, index) in items" :key="item.title">
        <AccordionButton
          :style="{textAlign: 'left', minWidth: '80px'}"
          :isOpen="isOpen(openIndices, index)"
          :handleItemClick="handleItemClick"
          :itemIndex="index"
        >
          {{ item.title }}
            <span>{{ isOpen(openIndices, index) ? '👇' : '👉' }}</span>
        </AccordionButton>
        <AccordionContents
          :style="{overflowY: 'hidden', textAlign: 'justify'}"
          :isOpen="isOpen(openIndices, index)"
        >
          {{item.contents}}
        </AccordionContents>
      </AccordionItem>
    </template>
  </Accordion>
</template>

<script>
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import AccordionButton from "./AccordionButton";
import AccordionContents from "./AccordionContents";
import { singleOpen, preventClose, combineReducers } from "../utils/reducers";

export default {
  name: "SinglePreventCloseAccordion",
  components: {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionContents
  },
  props: {
    items: { type: Array }
  },
  data() {
    return {
      singleOpen: () => {},
      preventClose: () => {},
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

<style lang="scss" scoped>
</style>
