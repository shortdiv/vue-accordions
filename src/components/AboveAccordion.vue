<template>
  <Accordion>
    <template slot-scope="{ handleItemClick, openIndices }">
      <AccordionItem v-for="(item, index) in items" :key="item.title">
        <AccordionContents :isOpen="isOpen(openIndices, index)">
          {{item.contents}}
        </AccordionContents>
        <AccordionButton
            :isOpen="isOpen(openIndices, index)"
            :handleItemClick="handleItemClick"
            @on-click="handleItemClick(index)"
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
  },
  methods: {
    isOpen(openIndices, index) {
      return openIndices.includes(index);
    }
  }
};
</script>

<style scoped>
</style>
