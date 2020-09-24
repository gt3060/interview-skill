<template>
  <div class="learnVue">
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
            <img src="@/components/picture/vue.jpeg" class="imgStyle" />
          </div>
          <div class="titleFontStyle">
            <span style="font-size: 25px">Vue</span>
            <el-divider></el-divider>
            <p>此篇主要讲述vue常见的考点。</p>
          </div>
        </div>
        <div style="display: flex">
          <div style="width: 75%">
            <div class="catalogStyle fontStyle">
              <div style="display: flex">
                <img
                  src="@/assets/CONTENT DELIVERY.png"
                  style="width: 24px; height: 24px; margin-top: 6px"
                />
                <span
                  style="font-size: 22px; font-weight: bold; margin-left: 10px"
                  >内容</span
                >
              </div>
              <el-divider></el-divider>
              <div id="c0" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>MVC和MVVC</h4>
                </div>
                <div class="fontIndent">
                  <p>
                    MVC是后端分层开发的概念（M指的是数据层Model，V指的是视图层View，C是逻辑层Controller）
                  </p>
                  <p>MVVC是前端视图层的概念，具体区别如下：</p>
                  <el-card>
                    <img src="@/assets/MVC_MVVM.png" width="95%" />
                  </el-card>
                </div>
              </div>
              <div id="c1" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>vue生命周期</h4>
                </div>
                <div class="fontIndent">
                  <p>所有生命周期如下：</p>
                  <p>①beforeCreate（创建前）</p>
                  <p>
                    顾名思义，创建之前的阶段，此时该实例内的所有东西都还没有创建，所以在这个生命周期钩子函数中$el,data都是undefined。
                  </p>
                  <p>②create（创建后）</p>
                  <p>
                    在这个生命周期之间，进行初始化事件，进行数据的观测，在created的时候数据已经和data属性进行绑定，
                    在这个生命周期钩子函数中，我们可以获取到data的值并对它进行操作。
                  </p>
                  <p>③beforeMount（载入前）</p>
                  <p>
                    在这一阶段，首先会判断是否有el选项，如果有的话就继续向下编译，如果没有el选项，
                    则停止编译，也就意味着停止了生命周期，直到在该实例上调用vm.$mount(el)[也就是动态引入了el]。
                  </p>
                  <p>接着判断是否指定template</p>
                  <p>④mounted</p>
                  <p>
                    此时是给vue实例对象添加$el成员，并且替换掉挂载的DOM元素。
                  </p>
                  <p>⑤beforeUpdate/updated</p>
                  <p>
                    当vue发现data中的数据发生变化，会触发对对应组件的重新渲染，当数据改变后调用beforeupdata，当渲染完成后调用updated钩子函数。
                    data值改变后触发beforeUpdate钩子函数,当页面渲染完成后调用updated。
                  </p>
                  <p>⑦beforeDestroy</p>
                  <p>
                    beforeDestroy钩子函数在实例销毁之前调用。在这一步实例仍然可用。
                  </p>
                  <p>⑧Destroyed</p>
                  <p>
                    destroyed钩子函数在Vue 实例销毁后调用。 调用后，Vue
                    实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
                  </p>
                  <p>官网生命周期图片</p>
                  <el-card>
                    <img src="@/assets/VueLifeCircle.jpg" />
                  </el-card>
                  <p><strong>总结:</strong></p>
                  <p>①什么是vue生命周期？</p>
                  <p>
                    vue实例从创建到销毁的过程，就是生命周期，从开始创建、初始化数据、编译模板、挂载dom->渲染、更新-渲染、销毁等一系列过程。
                  </p>
                  <p>②vue生命周期的作用是什么？</p>
                  <p>
                    它的生命周期中有很多函数钩子，让我们在控制整个vue实例过程时更容易形成好的逻辑。
                  </p>
                  <p>③vue生命周期主要分几个阶段？</p>
                  <p>
                    大体分为如下八个阶段：创建前/后（beforeCreate/created）、载入前/后（beforeMount/mounted）、更新前/后（beforeUpdate/updated）、
                    销毁前/后（beforeDestroy/destroyed）
                  </p>
                  <p>④第一次页面加载会触发哪些钩子函数？</p>
                  <p>beforeCreate, created, beforeMount, mounted。</p>
                  <p>⑤dom渲染在哪个周期完成？</p>
                  <p>DOM 渲染在 mounted 中就已经完成了。</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style="
              position: fixed;
              right: 100px;
              width: 20%;
              margin-top: -100px;
            "
          >
            <div class="catalogStyle">
              <div style="display: flex">
                <img
                  src="@/assets/catalog.png"
                  style="width: 24px; height: 24px; margin-top: 3px"
                />
                <span
                  style="font-size: 22px; font-weight: bold; margin-left: 10px"
                  >目录</span
                >
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
                    :class="
                      itemIndex === item.index ? 'activeRadiuCatalog' : ''
                    "
                  ></div>
                  <el-tooltip
                    placement="left-start"
                    :content="item.name"
                    :open-delay="400"
                  >
                    <div class="htmlItemName">{{ item.name }}</div>
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
// import { Message } from "element-ui";
export default {
  data() {
    return {
      catalogHtmlData: [
        { index: "c0", name: "1.MVC和MVVC", i: "0" },
        { index: "c1", name: "2.vue生命周期", i: "1" },
        // { index: "c2", name: "shift和unshift", i: "2" },
        // { index: "c3", name: "concat", i: "3" },
        // { index: "c4", name: "splice", i: "4" },
        // { index: "c5", name: "slice", i: "5" },
        // { index: "c6", name: "split", i: "6" },
        // { index: "c7", name: "reverse", i: "7" },
        // { index: "c8", name: "indexOf和lastindexOf", i: "8" },
        // { index: "c9", name: "includes", i: "9" },
        // { index: "c10", name: "fill", i: "10" },
        // { index: "c11", name: "Array.from", i: "11" },
        // { index: "c12", name: "keys、values、entries", i: "12" },
        // { index: "c13", name: "map、forEach", i: "13" },
        // { index: "c14", name: "filter", i: "14" },
        // { index: "c15", name: "sort", i: "15" },
        // { index: "c16", name: "every、some", i: "16" },
        // { index: "c17", name: "find、findIndex", i: "17" },
        // { index: "c18", name: "reduce", i: "18" },
        // { index: "c19", name: "2.字符串篇", i: "19" },
        // { index: "c20", name: "查找字符串中的字符串", i: "20" },
        // { index: "c21", name: "提取部分字符串", i: "21" },
        // { index: "c22", name: "替换字符串内容", i: "22" },
        // { index: "c23", name: "字符串转换为大写/小写", i: "23" },
        // { index: "c24", name: "连接两个或多个字符串", i: "24" },
        // { index: "c25", name: "删除字符串两端的空白符", i: "25" },
        // { index: "c26", name: "提取字符串字符", i: "26" },
        // { index: "c27", name: "3.归纳", i: "27" },
        // { index: "c28", name: "字符串转数组", i: "28" },
        // { index: "c29", name: "对象或数组转字符串", i: "29" },
        // { index: "c30", name: "比较两个数组是否相等", i: "30" },
        // { index: "c31", name: "数组中交换两个元素的位置", i: "31" },
        // { index: "c32", name: "数组中元素的删除", i: "32" },
        // { index: "c33", name: "查询数组中最大元素", i: "33" },
        // { index: "c34", name: "多个数组合并", i: "34" },
        // { index: "c35", name: "数组去重", i: "35" },
        // { index: "c36", name: "数组深拷贝浅拷贝", i: "36" },
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
      selectData !== "" && this.handleCatalog(selectData);
    },
  },
};
</script>

<style>
.learnVue {
  background-image: linear-gradient(#d9eaf8, white);
}
</style>