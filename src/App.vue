<template>
  <div id="app">
    <div class="wrapper">
      <div>
        <strong>Standard</strong>
        <StandardAccordion :items="items" />
      </div>
    </div>
  </div>
</template>

<script>
import StandardAccordion from "./components/StandardAccordion";

export default {
  name: "App",
  components: {
    StandardAccordion
  },
  data() {
    return {
      items: [
        {
          title: "🐴",
          contents:
            "Horses can sleep both lying down and standing up. Domestic horses have a lifespan of around 25 years. A 19th century horse named 'Old Billy' is said to have lived 62 years."
        },
        {
          title: "🦏",
          contents:
            "Rhino skin maybe thick but it can be quite sensitive to sunburns and insect bites which is why they like wallow so much – when the mud dries it acts as protection from the sunburns and insects."
        },
        {
          title: "🦄",
          contents:
            "If you’re looking to hunt a unicorn, but don’t know where to begin, try Lake Superior State University in Sault Ste. Marie, Michigan. Since 1971, the university has issued permits to unicorn questers."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#app {
  margin: 0;
  height: 100%;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 200;
}
.wrapper {
  display: grid;
  grid-auto-flow: row;
  grid-gap: 350px;
  width: 500px;
  padding: 20px;
  font-size: 24px;
}
</style>
