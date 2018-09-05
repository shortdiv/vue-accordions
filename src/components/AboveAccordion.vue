<template>
  <Accordion>
    <template slot-scope="{ handleItemClick, openIndices, isOpen }">
      <AccordionItem v-for="(item, index) in items" :key="item.title">
        <AccordionContents
          :style="{ overflowY: 'hidden', textAlign: 'justify' }"
          :isOpen="isOpen(openIndices, index)"
        >
          {{item.contents}}
        </AccordionContents>
        <AccordionButton
          :style="{ textAlign: 'left', minWidth: 80 }"
          :isOpen="isOpen(openIndices, index)"
          :handleItemClick="handleItemClick"
          :itemIndex="index"
        >
          {{ item.title }}
          <span>{{ isOpen(openIndices, index) ? '👆' : '👉'}}</span>
        </AccordionButton>
      </AccordionItem>
    </template>
  </Accordion>
</template>

<script>
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import AccordionButton from "./AccordionButton";
import AccordionContents from "./AccordionContents";

export default {
  name: "AboveAccordion",
  components: {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionContents
  },
  props: {
    items: { type: Array }
  }
};
</script>

<style scoped>
</style>
