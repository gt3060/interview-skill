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
            <img src="@/components/picture/test_two.jpeg" class="imgStyle" />
          </div>
          <div class="titleFontStyle">
            <span style="font-size: 25px">js经典十大排序算法</span>
            <el-divider></el-divider>
            <p>此篇主要讲述十大排序算法（编写语言利用javascript）。</p>
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
              <div style="margin: 20px 0px">
                <div>以下所有示例均根据[3, 1, 5, 7, 2, 4, 9, 6, 10, 8]</div>
              </div>
              <div id="c0" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>冒泡排序</h4>
                </div>
                <div class="fontIndent">
                  <div>
                    <el-button type="text" @click="btnBubbleSort"
                      >冒泡排序测试</el-button
                    >
                  </div>
                  <div>
                    <p>测试结果：{{ newData }}</p>
                  </div>
                  <div>
                    <p>测试代码：</p>
                  </div>
                  <img src="@/assets/bubble_res.jpg" width="90%" />
                </div>
              </div>
              <div id="c1" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>快速排序</h4>
                </div>
                <div class="fontIndent">
                  <div>
                    <el-button type="text" @click="btnQuickSort"
                      >快速排序测试</el-button
                    >
                  </div>
                  <div>
                    <p>测试结果：{{ newQuickData }}</p>
                  </div>
                  <div>
                    <p>
                      首先找到一个中间值，然后遍历第一次将所有小于中间值放在left数组，将所有大于中间值放到right数组，最后利用递归思想循环。
                    </p>
                    <p>测试代码：</p>
                  </div>
                  <img src="@/assets/quick_res.jpg" width="90%" />
                </div>
              </div>
              <div id="c2" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>插入排序</h4>
                </div>
                <div class="fontIndent">
                  <div>
                    <el-button type="text" @click="btnInsertSort"
                      >插入排序测试</el-button
                    >
                  </div>
                  <div>
                    <p>从第二个元素开始，直接插入到前面有序数组中</p>
                    <p>测试结果：{{ newInsertData }}</p>
                  </div>
                  <div>
                    <p>测试代码：</p>
                  </div>
                  <img src="@/assets/insert_res.jpg" width="90%" />
                </div>
              </div>
              <div id="c3" style="margin: 20px 0px">
                <div style="display: flex">
                  <div style="margin: 6px 7px 0px 0px">
                    <img src="@/assets/light.png" />
                  </div>
                  <h4>选择排序</h4>
                </div>
                <div class="fontIndent">
                  <div>
                    <el-button type="text" @click="btnSelectSort"
                      >选择排序测试</el-button
                    >
                  </div>
                  <div>
                    <p>
                      首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，
                      然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾
                    </p>
                    <p>测试结果：{{ newSelectData }}</p>
                  </div>
                  <div>
                    <p>测试代码：</p>
                  </div>
                  <img src="@/assets/insert_res.jpg" width="90%" />
                  <div>
                    <p>选择排序和冒泡排序区别：</p>
                    <ul>
                      <li>
                        冒泡排序:从左到右，数组中相邻的两个元素进行比较，将较大的放到后面。
                      </li>
                      <li>
                        选择排序：从第一个位置开始比较，找出最小的，和第一个位置互换，开始下一轮。
                      </li>
                    </ul>
                  </div>
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
export default {
  data() {
    return {
      catalogHtmlData: [
        { index: "c0", name: "1.冒泡排序", i: "0" },
        { index: "c1", name: "2.快速排序", i: "1" },
        { index: "c2", name: "3.插入排序", i: "2" },
        { index: "c3", name: "4.选择排序", i: "3" },
        // { index: "c4", name: "5.react生命周期", i: "4" },
        // { index: "c5", name: "6.为什么虚拟dom会提高性能", i: "5" },
        // { index: "c6", name: "7.react之diff算法", i: "6" },
        // { index: "c7", name: "8.react之refs", i: "7" },
        // { index: "c8", name: "9.类组件和函数式组件", i: "8" },
        // { index: "c9", name: "10.组件的状态和属性之间有什么不同", i: "9" },
        // { index: "c10", name: "11.受控组件和非受控组件", i: "10" },
        // { index: "c11", name: "12.react组件何处发起ajax", i: "11" },
        // { index: "c12", name: "13.React 中有三种构建组件的方式", i: "12" },
        // { index: "c13", name: "14.简单说一下redux", i: "13" },
      ],
      itemIndex: "",
      oldData: [3, 1, 5, 7, 2, 4, 9, 6, 10, 8],
      newData: [],
      newQuickData: [],
      newInsertData: [],
      newSelectData: [],
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

    //冒泡排序
    btnBubbleSort() {
      let oldData = this.oldData;
      for (let i = 0; i < oldData.length; i++) {
        for (let j = 0; j < oldData.length - i - 1; j++) {
          if (oldData[j] > oldData[j + 1]) {
            [oldData[j], oldData[j + 1]] = [oldData[j + 1], oldData[j]];
          }
        }
      }
      this.newData = oldData;
    },

    //快速排序
    btnQuickSort() {
      let oldData = this.oldData;
      this.newQuickData = this.quickSort(oldData);
    },

    quickSort(ele) {
      if (ele.length <= 1) {
        return ele;
      }
      let pivotIndex = Math.floor(ele.length / 2);
      let pivot = ele.splice(pivotIndex, 1)[0];

      let left = [];
      let right = [];
      for (let i = 0; i < ele.length; i++) {
        if (ele[i] < pivot) {
          left.push(ele[i]);
        } else {
          right.push(ele[i]);
        }
      }
      return this.quickSort(left).concat([pivot], this.quickSort(right));
    },

    //插入排序
    btnInsertSort() {
      let oldData = this.oldData;
      for (let i = 1; i < oldData.length; i++) {
        if (oldData[i] < oldData[i - 1]) {
          let temp = oldData[i];
          let j = i - 1;
          while (j >= 0 && temp < oldData[j]) {
            oldData[j + 1] = oldData[j];
            j--;
          }
          oldData[j + 1] = temp;
        }
      }
      this.newInsertData = oldData;
    },

    //选择排序
    btnSelectSort() {
      let oldData = this.oldData;
      for (let i = 0; i < oldData.length; i++) {
        for (let j = i + 1; j < oldData.length; j++) {
          if (oldData[j] < oldData[i]) {
            [oldData[i], oldData[j]] = [oldData[j], oldData[i]];
          }
        }
      }
      this.newSelectData = oldData;
    },
  },
};
</script>

<style scoped>
.learnVue {
  background-image: linear-gradient(#faedf9, white);
}
</style>