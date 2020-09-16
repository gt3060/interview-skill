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
            <img src="@/components/picture/html.jpeg" class="imgStyle" />
          </div>
          <div class="titleFontStyle">
            <span style="font-size:25px">JS篇(进阶)</span>
            <el-divider></el-divider>
            <p>此篇主要包含，JS更深入或者更难的知识点的理解与总结</p>
          </div>
        </div>
        <div style="display:flex">
          <div style="width:75%;">
            <div class="catalogStyle fontStyle">
              <div style="display:flex;">
                <img
                  src="@/assets/CONTENT DELIVERY.png"
                  style="width:24px;height:24px; margin-top:6px"
                />
                <span style="font-size:22px; font-weight: bold; margin-left:10px">内容</span>
              </div>
              <el-divider></el-divider>
              <div id="c0" style="margin:20px 0px;">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>1.迭代器(iterator)</h4>
                </div>
                <div class="fontIndent">
                  <span></span>
                </div>
              </div>
              <div id="c1">
                <div style="display:flex">
                  <div style="margin-right:7px;">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>2.Quirks是什么？他和Standards模式有什么区别？</h4>
                </div>
                <div class="fontIndent">
                  <span>
                    ie6开始，才引入Standards标准模式，所以Quirks模式作用就是判断是否有写文档类型定义，如果有写
                    则页面采用css支持更好的布局方式，否则，采用兼容之前的布局方式。
                  </span>
                  <p>区别：</p>
                  <ul>
                    <li>盒模型：w3c标准模式和ie模式下的width包含的范围不同；</li>
                    <li>标准模式下的span标签设置width和height都不生效，但是在quirks模式下，会生效；</li>
                    <li>
                      Quirks模式下的
                      <code>margin: 0 auto;</code>失效
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div style="position:fixed; right:100px; width:20%; margin-top:-100px;">
            <div class="catalogStyle">
              <div style="display:flex;">
                <img src="@/assets/catalog.png" style="width:24px;height:24px; margin-top:3px" />
                <span style="font-size:22px; font-weight: bold; margin-left:10px">目录</span>
              </div>
              <el-divider></el-divider>
              <div class="htmlFix">
                <div
                  v-for="item in catalogHtmlData"
                  :key="item.index"
                  class="htmlcatalogItem"
                  :id="item.i"
                  :class="itemIndex === item.index ? 'activeCatalog' : ''"
                  @click="handlehtmlCatalog(item)"
                >
                  <div
                    class="radiuStyle"
                    :class="itemIndex === item.index ? 'activeRadiuCatalog' : ''"
                  ></div>
                  <el-tooltip placement="left-start" :content="item.name ">
                    <div class="htmlItemName">{{item.name}}</div>
                  </el-tooltip>
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
      catalogHtmlData: [
        { index: "c0", name: "html文件中，doctype有什么作用", i: "0" },
        {
          index: "c1",
          name: "Quirks是什么？他和Standards模式有什么区别？",
          i: "1",
        },
      ],
      itemIndex: "",
    };
  },
  mounted() {
    window.addEventListener("mousewheel", this.btnoffsetHeight, false);
  },
  methods: {
    handlehtmlCatalog(item) {
      console.log(item.index, item.name);
      this.itemIndex = item.index;

      document.getElementById(item.index).scrollIntoView();
    },

    handleCatalog(data) {
      this.itemIndex = data;
      // data.substring(1)作用就是防止id重复
      document.getElementById(data.substring(1)).scrollIntoView();
    },

    btnoffsetHeight() {
      let selectData = "";
      for (let k in this.catalogHtmlData) {
        let height =
          document.getElementById(this.catalogHtmlData[k].index).offsetTop -
          document.documentElement.scrollTop;
        // console.log(height, this.catalogHtmlData[k].index);
        if (height < 0) {
          selectData = this.catalogHtmlData[k].index;
        }
        if (height >= 0 && height < 40) {
          selectData = this.catalogHtmlData[k].index;
          break;
        }
      }
      // console.log(selectData);
      selectData !== "" && this.handleCatalog(selectData);

      // 如果用map遍历，无法实现查找停止遍历功能。
      // this.catalogHtmlData.map((item) => {
      //   console.log(
      //     document.getElementById(item.index).offsetTop,
      //     document.documentElement.scrollTop
      //   );
      //   let height =
      //     document.getElementById(item.index).offsetTop -
      //     document.documentElement.scrollTop;
      //   console.log(item.index, height);
      //   if (height >= 0 && height < 20) {
      //     selectData.push(item.index);
      //   }
      // });

      // 浏览器，隐藏部分高度
      // document.documentElement.scrollTop;
      // 浏览器某个div距离顶部距离
      // document.getElementById("c1").offsetTop
    },
  },
};
</script>

<style>
.learnhtml {
  background-image: linear-gradient(#f3edff, white);
}

.htmlFix {
  /* 自动适应，超出则显示滚动条 */
  overflow: auto;
  height: 500px;
}

/* 让滚动条不展示 */
.htmlFix::-webkit-scrollbar {
  display: none;
}

.radiuStyle {
  width: 6px;
  height: 6px;
  background-color: black;
  border-radius: 3px;
  /* display: inline-block; */
  margin: 8px;
}

.htmlcatalogItem {
  /* width: 80%; */
  padding: 10px;
  display: flex;
}

.htmlcatalogItem:hover {
  background-color: #ebedef;
}

.htmlItemName {
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.activeCatalog {
  color: #0281d8;
}

.activeRadiuCatalog {
  background-color: #0281d8;
}

.htmlImgStyle {
  margin-left: 30px;
  width: 550px;
}

.htmlImgStyle1 {
  margin-left: 30px;
  width: 750px;
}
</style>