<template>
  <div class="home">
    <div class="contain-top"></div>
    <div class="contain-mid">
      <div>
        <div class="main-top">欢迎来到</div>
        <div class="main-topContain">Interview-SKILL</div>
      </div>
      <div>
        <div class="main-mid-text">
          <i class="el-icon-video-play"></i>
          <span>&nbsp;&nbsp;继续之前的卡片</span>
        </div>
        <div class="main-mid-card">
          <studingContain></studingContain>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import studingContain from "./studingContain";

export default {
  name: "Home",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  components: {
    studingContain,
  },
};
</script>
<style>
.contain-top {
  height: 40px;
}
.contain-mid {
  margin-left: 15%;
}

.main-top,
.main-mid-text {
  color: #c7c1c1;
  padding-bottom: 15px;
}

.main-topContain {
  color: rgb(71, 70, 70);
  font-size: 30px;
}
.main-mid-text {
  margin-top: 30px;
}

/* a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
} */
</style>
