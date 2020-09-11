<template>
  <div class="learnhtml">
    <el-backtop></el-backtop>
    <div class="learnCard">
      <div class="learnCardContain">
        <div>
          <router-link to="/">
            <div class="learn-back">
              <div>
                <i class="el-icon-arrow-left arrow-leftStyle"></i>
              </div>
              <div class="goBack">&nbsp;&nbsp;&nbsp;返回主页</div>
            </div>
          </router-link>
        </div>
        <div class="titleStyle">
          <div class="titleIconStyle">
            <img src="../components/picture/javascript4.jpeg" class="imgStyle" />
          </div>
          <div class="titleFontStyle">
            <span style="font-size:25px">Javascript进阶篇三</span>
            <el-divider></el-divider>
            <p>此篇主要讲述javascript相关的数组和字符串相关操作。</p>
          </div>
        </div>
        <div style="display:flex">
          <div style="width:75%;">
            <div class="catalogStyle fontStyle">
              <div style="display:flex;">
                <img
                  src="../assets/CONTENT DELIVERY.png"
                  style="width:24px;height:24px; margin-top:6px"
                />
                <span style="font-size:22px; font-weight: bold; margin-left:10px">内容</span>
              </div>
              <el-divider></el-divider>
              <div style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px; margin-top:4px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>1.javascript概念理解</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowAsyncExampleOpt: false,
    };
  },
  methods: {
    handleAsyncExample() {
      this.isShowAsyncExampleOpt = !this.isShowAsyncExampleOpt;
    },
  },
};
</script>

<style>
.learnhtml {
  background-image: linear-gradient(#f5e5f8, white);
}
</style>