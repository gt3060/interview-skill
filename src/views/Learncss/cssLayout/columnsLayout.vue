// 多列布局
<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="等宽布局" name="1">
        <div class="fontStyle">
          <span>效果图：</span>
          <el-card shadow="hover">
            <div id="parent">
              <div
                style="padding-left:20px;width:25%;box-sizing:border-box;height:300px;float:left;background-color:red"
              >
                1
                <p>我是文字我是文字我输文字我是文字我是文字</p>
              </div>
              <div
                style="padding-left:20px;width:25%;box-sizing:border-box;height:300px;float:left;background-color:yellow"
              >
                2
                <p>我是文字我是文字我输文字我是文字我是文字</p>
              </div>
              <div
                style="padding-left:20px;width:25%;box-sizing:border-box;height:300px;float:left;background-color:red"
              >
                3
                <p>我是文字我是文字我输文字我是文字我是文字</p>
              </div>
              <div
                style="padding-left:20px;width:25%;box-sizing:border-box;height:300px;float:left;background-color:yellow"
              >
                4
                <p>我是文字我是文字我输文字我是文字我是文字</p>
              </div>
            </div>
          </el-card>
        </div>
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item title="①利用float" name="1">
            <div class="fontStyle">
              使用：
              <el-card shadow="hover">
                <pre>
html:
&lt;div id="parent"&gt;
  &lt;div class="column"&gt;1&lt;/div&gt;
  &lt;div class="column"&gt;2&lt;/div&gt;
  &lt;div class="column"&gt;3&lt;/div&gt;
  &lt;div class="column"&gt;4&lt;/div&gt;
&lt;/div&gt;
css:
#parent {
    margin-left: -20px; /*使整体内容看起来居中,抵消padding-left的影响*/
}
.column{
    padding-left: 20px;  /*盒子的边距*/
    width: 25%;
    float: left;
    box-sizing: border-box;
    border: 1px solid #000;
    background-clip: content-box; /*背景色从内容开始绘制,方便观察*/
    height: 500px;
}
.column:nth-child(odd){
    background-color: #f00;
}
.column:nth-child(even){
    background-color: #0f0;
}
            </pre>
              </el-card>
            </div>
          </el-collapse-item>
          <el-collapse-item title="②利用table" name="2">
            <div class="fontStyle">
              使用：
              <el-card shadow="hover">
                <pre>
html:
&lt;div id="parent"&gt;
  &lt;div class="column"&gt;1&lt;/div&gt;
  &lt;div class="column"&gt;2&lt;/div&gt;
  &lt;div class="column"&gt;3&lt;/div&gt;
  &lt;div class="column"&gt;4&lt;/div&gt;
&lt;/div&gt;
css:
#parent {
    height: 540px;  /*抵消上下边20*2间距的高度影响*/
    display: table;
    margin: -20px 0;  /*抵消上下边20*2间距的位置影响*/
    /*两边离页面间距较大,改用子元素设置padding来当成间隔就不会有这样的问题*/
    border-spacing: 20px;  /*设置间距*/
}
.column{
    display: table-cell;
}
.column:nth-child(odd){
    background-color: #f00;
}
.column:nth-child(even){
    background-color: #0f0;
}
            </pre>
              </el-card>
            </div>
          </el-collapse-item>
          <el-collapse-item title="③使用flex实现" name="3">
            <div class="fontStyle">
              使用：
              <el-card shadow="hover">
                <pre>
html:
&lt;div id="parent"&gt;
  &lt;div class="column"&gt;1&lt;/div&gt;
  &lt;div class="column"&gt;2&lt;/div&gt;
  &lt;div class="column"&gt;3&lt;/div&gt;
  &lt;div class="column"&gt;4&lt;/div&gt;
&lt;/div&gt;
css:
#parent {
    margin-left: -15px;  /*使内容看起来居中*/
    height: 500px;
    display: flex;
}
.column{
    flex: 1; /*一起平分#parent*/
    margin-left: 15px; /*设置间距*/
}
.column:nth-child(odd){
    background-color: #f00;
}
.column:nth-child(even){
    background-color: #0f0;
}
            </pre>
              </el-card>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="九宫格布局" name="2">
        <div class="fontStyle">
          <span>效果图：</span>
          <el-card shadow="hover">
            <div style="width:600px; display:table; hegiht:500px; margin:0 auto;">
              <div style="display: table-row">
                <div style="border: 1px solid black; display:table-cell;">1</div>
                <div style="border: 1px solid black; display:table-cell;">2</div>
                <div style="border: 1px solid black; display:table-cell;">3</div>
              </div>
              <div style="display: table-row">
                <div style="border: 1px solid black; display:table-cell;">4</div>
                <div style="border: 1px solid black; display:table-cell;">5</div>
                <div style="border: 1px solid black; display:table-cell;">6</div>
              </div>
              <div style="display: table-row">
                <div style="border: 1px solid black; display:table-cell;">7</div>
                <div style="border: 1px solid black; display:table-cell;">8</div>
                <div style="border: 1px solid black; display:table-cell;">9</div>
              </div>
            </div>
          </el-card>
        </div>
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item title="①利用table" name="1">
            <div class="fontStyle">
              使用：
              <el-card shadow="hover">
                <pre>
html:
&lt;div id="parent"&gt;
  &lt;div class="row"&gt;
    &lt;div class="item"&gt;1&lt;/div&gt;
    &lt;div class="item"&gt;2&lt;/div&gt;
    &lt;div class="item"&gt;3&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="row"&gt;
    &lt;div class="item"&gt;4&lt;/div&gt;
    &lt;div class="item"&gt;5&lt;/div&gt;
    &lt;div class="item"&gt;6&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="row"&gt;
    &lt;div class="item"&gt;7&lt;/div&gt;
    &lt;div class="item"&gt;8&lt;/div&gt;
    &lt;div class="item"&gt;9&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
css:
#parent {
    width: 1200px;
    height: 500px;
    margin: 0 auto;
    display: table;
}
.row {
    display: table-row;
}
.item {
    border: 1px solid #000;
    display: table-cell;
}
            </pre>
              </el-card>
            </div>
          </el-collapse-item>
          <el-collapse-item title="②利用flex" name="2">
            <div class="fontStyle">
              使用：
              <el-card shadow="hover">
                <pre>
html:
&lt;div id="parent"&gt;
  &lt;div class="row"&gt;
    &lt;div class="item"&gt;1&lt;/div&gt;
    &lt;div class="item"&gt;2&lt;/div&gt;
    &lt;div class="item"&gt;3&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="row"&gt;
    &lt;div class="item"&gt;4&lt;/div&gt;
    &lt;div class="item"&gt;5&lt;/div&gt;
    &lt;div class="item"&gt;6&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="row"&gt;
    &lt;div class="item"&gt;7&lt;/div&gt;
    &lt;div class="item"&gt;8&lt;/div&gt;
    &lt;div class="item"&gt;9&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
css:
#parent {
    width: 1200px;
    height: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}
.row {
    display: flex;
    flex: 1;
}
.item {
    flex: 1;
    border: 1px solid #000;
}
            </pre>
              </el-card>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: [],
      activeName: "1",
    };
  },
  methods: {},
};
</script>

<style>
.fontStyle {
  line-height: 40px;
}
</style>