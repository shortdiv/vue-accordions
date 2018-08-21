<template>
    <Accordion
      :stateReducer="singleOpen"
    >
      <template slot-scope="{ handleItemClick, openIndices }">
        <AccordionItem
          v-for="(item, index) in items" :key="item.title">
          <AccordionButton
            :style="{textAlign: 'left', minWidth: '80px'}"
            :isOpen="isOpen(openIndices, index)"
            :handleItemClick="handleItemClick"
            @on-click="handleItemClick(index)"
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

export default {
  name: "SingleAccordion",
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
    },
    singleOpen(changes) {
      debugger;
      if (changes.type === "opening") {
        return { openIndexes: changes.openIndexes.slice(-1) };
      }
      return changes;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
