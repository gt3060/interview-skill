<template>
  <div>
    <vueCard
      :title="title"
      :titleContain="titleContain"
      :columnNum="columnNum"
      :chapterNum="chapterNum"
      :cardRoute="cardRoute"
    ></vueCard>
  </div>
</template>

<script>
import vueCard from "../components/vueCard";
export default {
  data() {
    return {
      title: "面试基本语法",
      titleContain: "CSS",
      columnNum: 6,
      chapterNum: 30,
      cardRoute: "/learncss",
    };
  },
  methods: {},
  components: {
    vueCard,
  },
};
</script>

<style>
</style>