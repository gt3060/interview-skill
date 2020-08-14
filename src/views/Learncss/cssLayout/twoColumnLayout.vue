<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="左列定宽，右列自适应" name="1">
        <div class="fontStyle">
          <span>效果图：</span>
          <el-card shadow="hover">
            <div style="display:flex; width:100%; height:300px">
              <div style="width:100px; background-color:red">左列定宽</div>
              <div style="flex:1;background-color:yellow">右列自定义</div>
            </div>
          </el-card>
        </div>
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item title="①利用float+margin" name="1">
            <div class="fontStyle">
              使用：
              <el-card shadow="hover">
                <pre>
html:
&lt;div id="left"&gt;左列定宽&lt;/div&gt;
&lt;div id="right"&gt;右列自定义&lt;/div&gt;
css:
#left{
  background-color: #f00;
  float:left; // 主要是float: left
  width:100px;
  height:300px;
}
#right{
  background-color: yellow;
  height:300px;
  margin-left:100px; /*大于等于#left的宽度*/
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
  &lt;div id="left"&gt;左列定宽&lt;/div&gt;
  &lt;div id="right"&gt;右列自定义&lt;/div&gt;
&lt;/div&gt;
css:
#parent{
  display: table;
  width: 100%;
  height: 300px;
}
#left{
  background-color: #f00;
  width: 100px;
}
#right{
  background-color: yellow;
}
#left, #right{
  display: table-cell;
}
            </pre>
              </el-card>
            </div>
          </el-collapse-item>
          <el-collapse-item title="③使用绝对定位实现" name="3">
            <div class="fontStyle">
              使用：
              <el-card shadow="hover">
                <pre>
html:
&lt;div id="parent"&gt;
  &lt;div id="left"&gt;左列定宽&lt;/div&gt;
  &lt;div id="right"&gt;右列自定义&lt;/div&gt;
&lt;/div&gt;
css:
#parent{
    position: relative;  /*子绝父相*/
}
#left {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #f00;
    width: 100px;
    height: 300px;
}
#right {
    position: absolute;
    top: 0;
    left: 100px;  /*值大于等于#left的宽度*/
    right: 0;
    background-color: yellow;
    height: 300px;
}
            </pre>
              </el-card>
            </div>
          </el-collapse-item>
          <el-collapse-item title="④使用flex实现" name="4">
            <div class="fontStyle">
              使用：
              <el-card shadow="hover">
                <pre>
html:
&lt;div id="parent"&gt;
  &lt;div id="left"&gt;左列定宽&lt;/div&gt;
  &lt;div id="right"&gt;右列自定义&lt;/div&gt;
&lt;/div&gt;
css:
#parent{
    width: 100%;
    height: 500px;
    display: flex;
}
#left {
    width: 100px;
    background-color: #f00;
}
#right {
    flex: 1; /*均分了父元素剩余空间*/
    background-color: yellow;
}
            </pre>
              </el-card>
            </div>
          </el-collapse-item>
          <el-collapse-item title="⑤使用grid实现" name="5">
            <div class="fontStyle">
              使用：
              <el-card shadow="hover">
                <pre>
html:
&lt;div id="parent"&gt;
  &lt;div id="left"&gt;左列定宽&lt;/div&gt;
  &lt;div id="right"&gt;右列自定义&lt;/div&gt;
&lt;/div&gt;
css:
#parent {
    width: 100%;
    height: 500px;
    display: grid;
    grid-template-columns: 100px auto;  /*设定2列就ok了,auto换成1fr也行*/
}
#left {
    background-color: #f00;
}
#right {
    background-color: yellow;
}
            </pre>
              </el-card>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="左列自适应，右列定宽" name="2">
        <div class="fontStyle">
          <span>效果图：</span>
          <el-card shadow="hover">
            <div style="display:flex; width:100%; height:300px">
              <div style="flex:1; background-color:red">右列定宽</div>
              <div style="width:100px;background-color:yellow">左列自定义</div>
            </div>
          </el-card>
        </div>
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item title="①利用float+margin" name="1">
            <div class="fontStyle">
              使用：
              <el-card shadow="hover">
                <pre>
html:
&lt;div id="parent"&gt;
  &lt;div id="left"&gt;右列定宽&lt;/div&gt;
  &lt;div id="right"&gt;左列自定义&lt;/div&gt;
&lt;/div&gt;
css:
#parent{
    height: 500px;
    padding-left: 100px;  /*抵消#left的margin-left以达到#parent水平居中*/
}
#left {
    width: 100%;
    height: 300px;
    float: left;
    margin-left: -100px; /*正值等于#right的宽度*/
    background-color: #f00;
}
#right {
    height: 300px;
    width: 100px;
    float: right;
    background-color: yellow;
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
  &lt;div id="left"&gt;右列定宽&lt;/div&gt;
  &lt;div id="right"&gt;左列自定义&lt;/div&gt;
&lt;/div&gt;
css:
#parent{
  display: table;
  width: 100%;
  height: 300px;
}
#left{
  background-color: #f00;
}
#right{
  background-color: yellow;
  width: 100px;
}
#left, #right{
  display: table-cell;
}
            </pre>
              </el-card>
            </div>
          </el-collapse-item>
          <el-collapse-item title="③使用绝对定位实现" name="3">
            <div class="fontStyle">
              使用：
              <el-card shadow="hover">
                <pre>
html:
&lt;div id="parent"&gt;
  &lt;div id="left"&gt;右列定宽&lt;/div&gt;
  &lt;div id="right"&gt;左列自定义&lt;/div&gt;
&lt;/div&gt;
css:
#parent{
    position: relative;  /*子绝父相*/
}
#left {
    position: absolute;
    top: 0;
    left: 0;
    right: 100px;
    background-color: #f00;
    height: 300px;
}
#right {
    position: absolute;
    top: 0;
    right: 0;
    background-color: yellow;
    width: 100px;
    height: 300px;
}
            </pre>
              </el-card>
            </div>
          </el-collapse-item>
          <el-collapse-item title="④使用flex实现" name="4">
            <div class="fontStyle">
              使用：
              <el-card shadow="hover">
                <pre>
html:
&lt;div id="parent"&gt;
  &lt;div id="left"&gt;右列定宽&lt;/div&gt;
  &lt;div id="right"&gt;左列自定义&lt;/div&gt;
&lt;/div&gt;
css:
#parent{
    width: 100%;
    height: 500px;
    display: flex;
}
#left {
    flex: 1; /*均分了父元素剩余空间*/
    background-color: #f00;
}
#right {
    width: 100px;
    background-color: yellow;
}
            </pre>
              </el-card>
            </div>
          </el-collapse-item>
          <el-collapse-item title="⑤使用grid实现" name="5">
            <div class="fontStyle">
              使用：
              <el-card shadow="hover">
                <pre>
html:
&lt;div id="parent"&gt;
  &lt;div id="left"&gt;右列定宽&lt;/div&gt;
  &lt;div id="right"&gt;左列自定义&lt;/div&gt;
&lt;/div&gt;
css:
#parent {
    width: 100%;
    height: 500px;
    display: grid;
    grid-template-columns: auto; 100px /*设定2列就ok了,auto换成1fr也行*/
}
#left {
    background-color: #f00;
}
#right {
    background-color: yellow;
}
            </pre>
              </el-card>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="一列不定，一列自适应" name="3">
        <div class="fontStyle">
          <span>盒子宽度是随着内容增加或减少发生变化，另一个盒子自适应</span>
          <span>效果图：</span>
          <el-card shadow="hover">
            <div style="display:flex;">
              <div style="height:300px; background-color:red">左列不定宽</div>
              <div style="flex:1; background-color:yellow; height:300px;">右列自定义</div>
            </div>
          </el-card>
        </div>
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item title="①使用flex实现" name="1">
            <div class="fontStyle">
              使用：
              <el-card shadow="hover">
                <pre>
html:
&lt;div id="parent"&gt;
  &lt;div id="left"&gt;左列定宽&lt;/div&gt;
  &lt;div id="right"&gt;右列自定义&lt;/div&gt;
&lt;/div&gt;
css:
#parent{
    display: flex;
}
#left { /*不设宽度*/
    margin-right: 10px;
    height: 300px;
    background-color: #f00;
}
#right {
    height: 300px;
    background-color: yellow;
    flex: 1;  /*均分#parent剩余的部分*/
}
            </pre>
              </el-card>
            </div>
          </el-collapse-item>
          <el-collapse-item title="②使用grid实现" name="2">
            <div class="fontStyle">
              使用：
              <el-card shadow="hover">
                <pre>
html:
&lt;div id="parent"&gt;
  &lt;div id="left"&gt;左列定宽&lt;/div&gt;
  &lt;div id="right"&gt;右列自定义&lt;/div&gt;
&lt;/div&gt;
css:
#parent{
    display: grid;
    grid-template-columns: auto 1fr;  /*auto和1fr换一下顺序就是左列自适应,右列不定宽了*/
}
#left {
    margin-right: 10px;
    height: 300px;
    background-color: #f00;
}
#right {
    height: 300px;
    background-color: yellow;
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