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
            <img src="../components/picture/javascript2.jpeg" class="imgStyle" />
          </div>
          <div class="titleFontStyle">
            <span style="font-size:25px">Javascript进阶篇一</span>
            <el-divider></el-divider>
            <p>此篇主要讲述前端相关的设计模式</p>
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
              <div id="c0" style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="../assets/light.png" />
                  </div>
                  <h4>1.js数据类型有哪些</h4>
                </div>
                <div class="fontIndent">
                  <code>基本数据类型包括：Number、String、Boolean、Undefined、null、Symbol（es6新增）</code>
                </div>
                <div class="fontIndent">
                  <code>除此之外，还包括一种引用类数据类型：Object；里面包含function、array、date等</code>
                </div>
                <div class="fontIndent">
                  <code>原始数据类型保存在栈中，占据空间小使用频繁；</code>
                  <br />
                  <code>引用数据类型保存在栈和堆中，占据空间大，在栈中存放指针，指针指向堆中的该实体的起始位置。</code>
                </div>
              </div>

              <!-- </div> -->
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
    return {};
  },
};
</script>

<style>
.learnhtml {
  background-image: linear-gradient(#ecfafe, white);
}
</style>