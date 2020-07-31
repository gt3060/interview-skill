<template>
  <div class="learnLeft">
    <div class="learnLeft_cald">
      <div v-for="item in data" :key="item">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>

<style>
.learnLeft {
  width: 400px;
  margin-top: -30px;
  height: 400px;
  /* border: 1px solid black; */
}

.learnLeft_cald {
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.25s;
  margin-top: 10px;
  height: 100%;
}

.learnLeft_cald:hover {
  margin-top: 0px;
  box-shadow: 5px 8px 5px #778899;
}
</style>