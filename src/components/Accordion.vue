<template>
  <div>
    <slot 
      :handleItemClick="handleItemClick"
      :openIndices="openIndexes"
    />
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      openIndexes: [0]
    };
  },
  methods: {
    handleItemClick() {
      console.log("hello");
    }
  }
  // render (h) {
  //   // const children = [];
  //   // Object.keys(this.$slots).forEach((key) => {
  //   //   Array.prototype.push.apply(children, this.$slots[key]);
  //   // });

  //   var s = h(
  //     'template',
  //     {},
  //     this.$slots.default
  //   )
  //   return (<template>{this.$slots.default}</template>)
  // }
};
</script>
