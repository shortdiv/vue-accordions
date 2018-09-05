<template>
  <Tabs>
    <template slot-scope="{ handleItemClick, openIndices, isOpen }">
      <div :style="{ marginTop: '1em' }">
        <div :style="{ position: 'relative', minHeight: '120px' }">
          <AboveTabItem
            v-for="(item, index) in items"
            :key="index"
            :style="{ position: 'absolute', overflowY: 'hidden' }"
            :isOpen="isOpen(openIndices, index)"
          >
            {{ item.contents }}
          </AboveTabItem>
        </div>
        <div
          :style="{ display: 'flex' }"
        >
          <AccordionButton
            v-for="(item,index) in items" :key="item.title"
            :isOpen="isOpen(openIndices, index)"
            :handleItemClick="handleItemClick"
            :itemIndex="index"
          >
            {{ item.title }}
          </AccordionButton>
        </div>
      </div>
    </template>
  </Tabs>
</template>

<script>
import Tabs from "./Tabs.vue";
import AccordionButton from "./AccordionButton.vue";
import AboveTabItem from "./AboveTabItem.vue";

export default {
  name: "AboveTabs",
  components: {
    Tabs,
    AccordionButton,
    AboveTabItem
  },
  props: {
    items: {
      type: Array
    }
  }
};
</script>

<style scoped>
</style>
