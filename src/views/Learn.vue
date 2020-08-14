
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
              <h4>概述</h4>
              <h5>了解行内元素、块级元素、行内块级元素</h5>
              <div>
                <el-tabs v-model="introActive">
                  <el-tab-pane label="行内元素" name="1">
                    <div class="fontStyle fontIndent">
                      不可以设置宽度、高度，但可以与其他行内元素位于同一行，行内元素内一般不可以包含块级元素，
                      行内元素的高度一般由元素内部的字体大小决定的，宽度由内容长度决定，故其特点有：
                    </div>
                    <div class="fontStyle">
                      <ol type="a">
                        <li>每个元素可以和其他行内元素共占一行，直到一行排满才会换行；</li>
                        <li>每个元素的宽高、行高、边距都不可设置；</li>
                        <li>元素的宽度就是它包含文字或图片的宽度，高度就一般由内部字体大小决定。</li>
                      </ol>
                    </div>
                    <div class="fontStyle">
                      <span>常见的行内元素有：</span>
                      <el-table :data="inlineData">
                        <el-table-column prop="label" width="300" label="标签名"></el-table-column>
                        <el-table-column prop="introduce" width="300" label="标签解析"></el-table-column>
                      </el-table>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="块级元素" name="2">
                    <div
                      class="fontStyle fontIndent"
                    >它有自己的宽度和高度，可以自定义width和height，它独自占据一整行，可容纳块级元素和行内元素。故其特点有：</div>
                    <div class="fontStyle">
                      <ol type="a">
                        <li>每个元素独占一行；</li>
                        <li>每个元素的高度、宽度、行高、边距都是可以设置的；</li>
                        <li>如果元素的宽度不设置的话，默认情况为其父元素的宽度（父元素*100%）。</li>
                        <li>块级元素可以包含行内元素、块级元素</li>
                      </ol>
                    </div>
                    <div class="fontStyle">
                      <span>常用的块级元素有：</span>
                      <el-table :data="blockData">
                        <el-table-column prop="label" width="300" label="标签名"></el-table-column>
                        <el-table-column prop="introduce" width="300" label="标签解析"></el-table-column>
                      </el-table>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="行内块级元素" name="3">
                    <div class="fontStyle fontIndent">兼具了行内元素和块级元素的特点，可以自由设置宽高，也可以在一行设置多个元素，故特点有：</div>
                    <div class="fontStyle">
                      <ol type="a">
                        <li>每个元素的高度、宽度、行高以及顶和底边距都可设置；</li>
                        <li>和其他行内或行内块级元素元素放置在同一行上。</li>
                      </ol>
                    </div>
                    <div class="fontStyle">
                      <span>将行内元素分行显示或将块级元素同行显示：</span>
                      <ul>
                        <li>display:block -- 显示为块级元素（块级元素默认样式）</li>
                        <li>display:inline -- 显示为行内元素（行内元素默认样式）</li>
                        <li>display:inline-block -- 显示为行内块元素，表现为同行显示并可修改宽高内外边距等属性（行内块元素默认属性）</li>
                      </ul>
                      <span>例如，再ul标签加上display:inline-block，那么，每个li标签里的内容则不垂直显示，而是水平显示，如下：</span>
                      <div>
                        <span>此为行内元素span标签</span>
                        <ul style="display: inline-block">
                          <li style="display: inline-block">星期一</li>
                          <li style="display: inline-block">星期二</li>
                          <li style="display: inline-block">星期三</li>
                        </ul>
                      </div>
                      <div>
                        <span>代码如下：</span>
                        <el-card shadow="hover">
                          <pre>
&lt;div&gt;
  &lt;span&gt;此为行内元素span标签&lt;/span&gt;
  &lt;ul style="display: inline-block" &gt;
    &lt;li style="display: inline-block"&gt;星期一&lt;/li&gt;
    &lt;li style="display: inline-block"&gt;星期二&lt;/li&gt;
    &lt;li style="display: inline-block"&gt;星期三&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
                        </pre>
                        </el-card>
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
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
import levelLayout from "./Learncss/cssLayout/levelLayout";
import verticalLayout from "./Learncss/cssLayout/verticalLayout";
import levelVerticalLayout from "./Learncss/cssLayout/levelVerticalLayout";
import twoColumnLayout from "./Learncss/cssLayout/twoColumnLayout";
import { cssData, inlineData, blockData } from "../data/index.js";
export default {
  data() {
    return {
      containNum: "01",
      tableData: cssData(),
      containChildNum: "",
      tableTitle: "",
      introActive: "1",
      inlineData: inlineData(),
      blockData: blockData(),
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
