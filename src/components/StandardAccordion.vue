<template>
    <Accordion>
      <template slot-scope="{ handleItemClick, openIndices }">
      <AccordionItem v-for="item in items" :key="item.title">
        <AccordionButton
          :handleItemClick="handleItemClick"
        >
        {{ item.title }}
        </AccordionButton>
      </AccordionItem>
      </template>
    </Accordion>
</template>

<script>
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import AccordionButton from "./AccordionButton";

export default {
  name: "StandardAccordion",
  components: {
    Accordion,
    AccordionItem,
    AccordionButton
  },
  props: {
    items: { type: Array }
  },
  mounted() {}
};
</script>
