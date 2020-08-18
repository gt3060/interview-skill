
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
              <div style="display:flex;">
                <img src="../assets/catalog.png" style="width:24px;height:24px; margin-top:3px" />
                <span style="font-size:22px; font-weight: bold; margin-left:10px">目录</span>
              </div>
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
              <div style="display:flex;">
                <img
                  src="../assets/CONTENT DELIVERY.png"
                  style="width:24px;height:24px; margin-top:6px"
                />
                <span style="font-size:22px; font-weight: bold; margin-left:10px">内容</span>
              </div>
              <el-divider></el-divider>
            </div>
            <div v-if="containNum === '01'">
              <cssSummary></cssSummary>
            </div>
            <div v-if="containNum === '02'">
              <h4>02-CSS布局</h4>
              <h5>{{containChildNum}}/{{tableTitle}}</h5>
              <div v-if="containChildNum === '02-1'">
                <levelLayout></levelLayout>
              </div>
              <div v-if="containChildNum === '02-2'">
                <verticalLayout></verticalLayout>
              </div>
              <div v-if="containChildNum === '02-3'">
                <levelVerticalLayout></levelVerticalLayout>
              </div>
              <div v-if="containChildNum === '02-4'">
                <twoColumnLayout></twoColumnLayout>
              </div>
              <div v-if="containChildNum === '02-5'">
                <threeColumnLayout></threeColumnLayout>
              </div>
              <div v-if="containChildNum === '02-6'">
                <columnsLayout></columnsLayout>
              </div>
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
import cssSummary from "./Learncss/Summary/summary";
import levelLayout from "./Learncss/cssLayout/levelLayout";
import verticalLayout from "./Learncss/cssLayout/verticalLayout";
import levelVerticalLayout from "./Learncss/cssLayout/levelVerticalLayout";
import twoColumnLayout from "./Learncss/cssLayout/twoColumnLayout";
import threeColumnLayout from "./Learncss/cssLayout/threeColumnLayout";
import columnsLayout from "./Learncss/cssLayout/columnsLayout";
import { cssData } from "../data/index.js";
export default {
  data() {
    return {
      containNum: "01",
      tableData: cssData(),
      containChildNum: "",
      tableTitle: "",
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
  },
  components: {
    card,
    levelLayout,
    verticalLayout,
    levelVerticalLayout,
    twoColumnLayout,
    threeColumnLayout,
    columnsLayout,
    cssSummary,
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
