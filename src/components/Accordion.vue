<template>
  <div>
    <slot
      name="contents-are"
      :handleItemClick="handleItemClick"
      :openIndices="openIndexes"
      :isOpen="isOpen"
    />
    <AccordionItem v-for="(item, index) in items" :key="item.title">
      <AccordionButton
        :style="{ textAlign: 'left', minWidth: 80 }"
        :isOpen="isOpen(openIndexes, index)"
        :handleItemClick="handleItemClick"
        :itemIndex="index"
      >
      {{ item.title }}
        <span>{{ isOpen(openIndexes, index) ? '👇' : '👉'}}</span>
      </AccordionButton>
      <AccordionContents
        :style="{ overflowY: 'hidden', textAlign: 'justify' }"
        :isOpen="isOpen(openIndexes, index)"
      >
        {{item.contents}}
      </AccordionContents>
    </AccordionItem>
  </div>
</template>

<script>
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import AccordionButton from "./AccordionButton";
import AccordionContents from "./AccordionContents";

export default {
  name: "Accordion",
  components: {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionContents
  },
  props: {
    stateReducer: { type: Function, required: false, default: null },
    items: { type: Array }
  },
  data() {
    return {
      openIndexes: [0]
    };
  },
  methods: {
    isOpen(openIndices, index) {
      return openIndices.includes(index);
    },
    handleItemClick(idx) {
      const closing = this.openIndexes.includes(idx);
      const allChanges = {
        type: closing ? "closing" : "opening",
        openIndexes: closing
          ? this.openIndexes.filter(i => i !== idx)
          : [...this.openIndexes, idx]
      };
      this.openIndexes =
        typeof this.stateReducer === "function"
          ? this.stateReducer({ openIndexes: this.openIndexes }, allChanges)
              .openIndexes
          : allChanges.openIndexes;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
