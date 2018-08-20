<template>
    <Accordion>
      <template slot-scope="{ handleItemClick, openIndices }">
      <AccordionItem v-for="(item, index) in items" :key="item.title">
        <AccordionButton
          :isOpen="isOpen(openIndices, index)"
          :handleItemClick="handleItemClick"
          @on-click="handleItemClick()"
        >
        {{ item.title }}
          <span>{{ isOpen(openIndices, index) ? '👇' : '👉'}}</span>
        </AccordionButton>
        <AccordionContents :isOpen="isOpen(openIndices, index)">
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

export default {
  name: "StandardAccordion",
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
  },
  mounted() {}
};
</script>
