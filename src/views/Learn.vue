
<template>
  <div class="learn">
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
            <img src="../assets/cssLogo.jpeg" class="imgStyle" />
          </div>
          <div class="titleFontStyle">
            <span style="font-size:25px">数组和字符串</span>
            <p>title-----简介</p>
          </div>
        </div>
        <div style="display:flex">
          <div style="width:40%;">
            <div class="catalogStyle">
              <h3>目录</h3>
              <el-divider></el-divider>
            </div>
            <div>
              <card catalogTitle="概述" catalogNum="01" isShowTable="false" @clickNum="clickNum"></card>
            </div>
            <div style="margin-top:50px">
              <card
                catalogTitle="CSS布局"
                catalogNum="02"
                isShowTable="true"
                @clickNum="clickNum"
                :tableData="tableData"
                @childNum="childNum"
              ></card>
            </div>
          </div>
          <div style="width:55%; margin-left:5%; margin-top:-100px">
            <div class="catalogStyle">
              <h3>内容</h3>
              <el-divider></el-divider>
            </div>
            <div v-if="containNum === '01'">
              <h4>概述</h4>
              <h5>了解行内元素、块级元素、行内块级元素</h5>
              <div>
                <!-- <el-collapse v-model="activeNames" @change="handleChange">
                  <el-collapse-item title="一致性 Consistency" name="1">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                  </el-collapse-item>
                </el-collapse>-->
                <el-tabs v-model="introActive" @tab-click="handleClick">
                  <el-tab-pane label="行内元素" name="1">
                    <div class="fontStyle fontIndent">
                      不可以设置宽度、高度，但可以与其他行内元素位于同一行，行内元素内一般不可以包含块级元素，
                      行内元素的高度一般由元素内部的字体大小决定的，宽度由内容长度决定，故其特点有：
                    </div>
                    <div class="fontStyle">
                      <ol type="a">
                        <li>每个元素独占一行；</li>
                        <li>每个元素的高度、宽度、行高、边距都是可以设置的；</li>
                        <li>如果元素的宽度不设置的话，默认情况为其父元素的宽度（父元素*100%）。</li>
                      </ol>
                    </div>
                    <div class="fontStyle">
                      <span>常用的块级元素有：</span>
                      <el-table>
                        <el-table-column>
                          
                        </el-table-column>
                      </el-table>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="块级元素" name="2">块级元素</el-tab-pane>
                  <el-tab-pane label="行内块级元素" name="3">行内块级元素</el-tab-pane>
                </el-tabs>
              </div>
            </div>
            <div v-if="containNum === '02'">
              <h4>02-CSS布局</h4>
              <h5>{{containChildNum}}/{{tableTitle}}</h5>
              <!-- <div v-if="containchildNum === '02-1'"></div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
  </div>
</template>

<script>
import card from "../components/Card";
import { cssData } from "../data/index.js";
export default {
  data() {
    return {
      containNum: "01",
      tableData: cssData(),
      containChildNum: "",
      tableTitle: "",
      activeNames: ["1"],
      introActive: "1",
    };
  },
  created() {},
  methods: {
    clickNum(data) {
      this.containNum = data.catalogNum;
    },
    childNum(data) {
      this.containChildNum = data.index;
      this.containNum = data.catalogNum;
      this.tableTitle = data.title;
    },
    handleChange(val) {
      console.log(val);
    },
    // 概述-了解行内元素、块级元素、行内块级元素-触发tab-click
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  components: {
    card,
  },
};
</script>

<style>
.learnCard {
  /* text-align: center; */
  display: flex;
}
.learnCardContain {
  margin: 0 auto;
  /* display: flex; */
  width: 75%;
  padding-left: 50px;
}

.learn-back {
  padding-top: 40px;
  display: flex;
  color: rgb(156, 147, 147);
}

.goBack:hover {
  color: rgb(59, 55, 55);
}

.titleStyle {
  display: flex;
}

.titleIconStyle {
  height: 200px;
  margin-top: 35px;
  width: 150px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  transition: all 0.25s;
}

.titleIconStyle :hover {
  /* margin-top: 30px; */
  /* border: 1px solid blue; */
  margin-top: -5px;
  /* div四周加阴影 */
  box-shadow: #778899 0px 0px 10px;
}

.titleFontStyle {
  margin-left: 35px;
  margin-top: 35px;
}

/* img图片等比例缩放 */
.imgStyle {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

.catalogStyle {
  margin-top: 40px;
}

.catalogStyle :hover {
  /* margin-top: -5px; */
}

.fontStyle {
  line-height: 40px;
}
.fontIndent {
  /* 首行缩进 */
  text-indent: 2em;
}

a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>
