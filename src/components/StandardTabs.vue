<template>
  <Tabs>
    <template slot-scope="{ handleItemClick, openIndices, isOpen }">
      <div>
        <div
          :style="{ display: 'flex' }"
        >
          <AccordionButton
            v-for="(item,index) in items" :key="item.title"
            :isOpen="isOpen(openIndices, index)"
            :handleItemClick="handleItemClick"
            @on-click="handleItemClick(index)"
          >
            {{ item.title }}
          </AccordionButton>
        </div>
        <div :style="{ position: 'relative', minHeight: '120px' }">
          <BelowTabItem
            v-for="(item, index) in items"
            :key="index"
            :style="{ position: 'absolute', overflowY: 'hidden' }"
            :isOpen="isOpen(openIndices, index)"
          >
            {{ item.contents }}
          </BelowTabItem>
        </div>
      </div>
    </template>
  </Tabs>
</template>

<script>
import Tabs from "./Tabs.vue";
import AccordionButton from "./AccordionButton.vue";
import BelowTabItem from "./BelowTabItem.vue";

export default {
  name: "StandardTabs",
  components: {
    Tabs,
    AccordionButton,
    BelowTabItem
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
