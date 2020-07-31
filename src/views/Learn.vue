
<template>
  <div class="learn">
    <learnTop></learnTop>
    <div class="learnCard">
      <div class="learnCardContain">
        <learnLeft :data="data"></learnLeft>
        <learnRight></learnRight>
      </div>
    </div>
  </div>
</template>

<script>
import learnTop from "../components/learnTop";
import learnLeft from "../components/learnLeft";
import learnRight from "../components/learnRight";

export default {
  data(){
    return{
      data:[1,2]
    }
  },
  components: {
    learnTop,
    learnLeft,
    learnRight,
  },
};
</script>

<style>
.learnCard {
  text-align: center;
  display: flex;
}
.learnCardContain {
  margin: 0 auto;
  display: flex;
}
</style>
