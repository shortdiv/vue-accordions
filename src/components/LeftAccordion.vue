<template>
    <Accordion>
      <template slot-scope="{ handleItemClick, openIndices }">
        <AccordionItem
          :style="{gridAutoFlow: 'column'}"
          v-for="(item, index) in items" :key="item.title">
          <AccordionContents
            :style="{overflowY: 'hidden', textAlign: 'justify'}"
            :isOpen="isOpen(openIndices, index)"
          >
            {{item.contents}}
          </AccordionContents>
          <AccordionButton
            :style="{textAlign: 'left', minWidth: '80px'}"
            :isOpen="isOpen(openIndices, index)"
            :handleItemClick="handleItemClick"
            @on-click="handleItemClick(index)"
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
  },
  methods: {
    isOpen(openIndices, index) {
      return openIndices.includes(index);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>
