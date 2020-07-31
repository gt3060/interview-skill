<template>
  <div class="learn-top">
    <div class="learn-topImg">
      <router-link to="/">
        <div class="learn-back">
          <div>
            <i class="el-icon-arrow-left arrow-leftStyle"></i>
          </div>
          <div>&nbsp;&nbsp;&nbsp;返回主页</div>
        </div>
      </router-link>

      <div class="learn-title">数据结构</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.learn-top {
  height: 300px;
  background-image: url("../assets/learn_top_background.png");
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
}

.learn-topImg {
  width: 80%;
  margin-left: 10%;
  height: 100%;
  background-image: url("https://assets.leetcode-cn.com/aliyun-lc-upload/explore/cards/array-and-string/banner");
  background-size: auto 100%;
  background-position: right center;
  background-repeat: no-repeat;
}

.learn-back {
  padding-left: 20px;
  padding-top: 40px;
  display: flex;
  color: rgb(247, 250, 253);
}

.learn-title {
  text-align: center;
  padding-top: 60px;
  color: rgb(247, 250, 253);
  font-size: 30px;
}

.arrow-leftStyle {
  color: rgb(247, 250, 253);
  margin-right: 5px;
}

a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>