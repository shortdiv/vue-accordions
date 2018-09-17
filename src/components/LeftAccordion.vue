<template>
  <Accordion>
    <template slot="contents-are" slot-scope="{ handleItemClick, openIndices, isOpen }">
      <AccordionItem
        :style="{gridAutoFlow: 'column'}"
        v-for="(item, index) in items" :key="item.title">
        <AccordionContents
          :style="{ overflowY: 'hidden', textAlign: 'justify', display: 'block' }"
          :isOpen="isOpen(openIndices, index)"
        >
          {{item.contents}}
        </AccordionContents>
        <AccordionButton
          :style="{textAlign: 'left', minWidth: '80px'}"
          :isOpen="isOpen(openIndices, index)"
          :handleItemClick="handleItemClick"
          :itemIndex="index"
        >
        {{ item.title }}
          <span>{{ isOpen(openIndices, index) ? '👈' : '👉'}}</span>
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
  name: "LeftAccordion",
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

<style lang="scss" scoped>
</style>
