<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="两列定宽，一列自适应" name="1">
        <div class="fontStyle">
          <span>效果图：</span>
          <el-card shadow="hover">
            <div style="display:flex; width:100%; height:300px">
              <div style="width:100px; background-color:red">左列定宽</div>
              <div style="width:100px; background-color:green">中间定宽</div>
              <div style="flex:1;background-color:yellow">右列自定义</div>
            </div>
          </el-card>
          <div>
            <span>这种情况的用法和一列定宽一列自适应相同</span>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="两侧定宽，中间自适应" name="2">
        <div class="fontStyle">
          <span>效果图：</span>
          <el-card shadow="hover">
            <div style="display:flex; width:100%; height:300px">
              <div style="width:100px; background-color:red">左列定宽</div>
              <div style="flex:1; background-color:green">中间自适应</div>
              <div style="width:100px;background-color:yellow">右列定宽</div>
            </div>
          </el-card>
        </div>
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item title="①利用flex" name="1">
            <div class="fontStyle">
              使用：
              <el-card shadow="hover">
                <pre>
html:
&lt;div id="parent"&gt;
  &lt;div id="left"&gt;左列定宽&lt;/div&gt;
  &lt;div id="center"&gt;中间自定义&lt;/div&gt;
  &lt;div id="right"&gt;右列定宽&lt;/div&gt;
&lt;/div&gt;
css:
#parent {
    height: 500px;
    display: flex;
}
#left {
    width: 100px;
    background-color: #f00;
}
#center {
    flex: 1;  /*均分#parent剩余的部分*/
    background-color: green;
}
#right {
    width: 200px;
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
  &lt;div id="left"&gt;左列定宽&lt;/div&gt;
  &lt;div id="center"&gt;中间自定义&lt;/div&gt;
  &lt;div id="right"&gt;右列定宽&lt;/div&gt;
&lt;/div&gt;
css:
#parent{
  display: table;
  width: 100%;
  height: 300px;
}
#left{
  background-color: #f00;
  width:100px
}
#center{
  background-color: green;
}
#right{
  background-color: yellow;
  width: 100px;
}
#left, #center, #right{
  display: table-cell;
}
            </pre>
              </el-card>
            </div>
          </el-collapse-item>
          <el-collapse-item title="③使用postion实现" name="3">
            <div class="fontStyle">
              使用：
              <el-card shadow="hover">
                <pre>
html:
&lt;div id="parent"&gt;
  &lt;div id="left"&gt;左列定宽&lt;/div&gt;
  &lt;div id="center"&gt;中间自定义&lt;/div&gt;
  &lt;div id="right"&gt;右列定宽&lt;/div&gt;
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
#center {
    height: 500px;
    margin-left: 100px; /*大于等于#left的宽度,或者给#parent添加同样大小的padding-left*/
    margin-right: 200px;  /*大于等于#right的宽度,或者给#parent添加同样大小的padding-right*/
    background-color: green;
}
#right {
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 500px;
    background-color: yellow;
}
            </pre>
              </el-card>
            </div>
          </el-collapse-item>
          <el-collapse-item title="④使用grid实现" name="4">
            <div class="fontStyle">
              使用：
              <el-card shadow="hover">
                <pre>
html:
&lt;div id="parent"&gt;
  &lt;div id="header"&gt;header&lt;/div&gt;
  &lt;div id="center"&gt;center需要放在前面，中间自适应&lt;/div&gt;
  &lt;div id="left"&gt;左列定宽&lt;/div&gt;
  &lt;div id="right"&gt;右列定宽&lt;/div&gt;
  &lt;div id="footer"&gt;footer&lt;/div&gt;
&lt;/div&gt;
css:
#parent {
    height: 500px;
    display: grid;
    grid-template-columns: 100px auto 200px; /*设定3列*/
    grid-template-rows: 60px auto 60px; /*设定3行*/
    /*设置网格区域分布*/
    grid-template-areas: 
        "header header header" 
        "leftside main rightside" 
        "footer footer footer";
}
#header {
    grid-area: header; /*指定在哪个网格区域*/
    background-color: #ccc;
}
#left {
    grid-area: leftside;
    background-color: #f00;
    opacity: 0.5;
}
#center {
    grid-area: main; /*指定在哪个网格区域*/
    margin: 0 15px; /*设置间隔*/
    border: 1px solid #000;
    background-color: #eeff2b;
}
#right {
    grid-area: rightside; /*指定在哪个网格区域*/
    background-color: #0f0;
    opacity: 0.5;
}
#footer {
    grid-area: footer; /*指定在哪个网格区域*/
    background-color: #ccc;
}
            </pre>
              </el-card>
            </div>
          </el-collapse-item>
          <el-collapse-item title="⑤圣杯布局实现" name="5">
            <div class="fontStyle">
              使用：
              <el-card shadow="hover">
                <pre>
html:
&lt;div id="parent"&gt;
  &lt;div id="header"&gt;header&lt;/div&gt;
  &lt;div id="center"&gt;center需要放在前面，中间自适应&lt;/div&gt;
  &lt;div id="left"&gt;左列定宽&lt;/div&gt;
  &lt;div id="right"&gt;右列定宽&lt;/div&gt;
  &lt;div id="footer"&gt;footer&lt;/div&gt;
&lt;/div&gt;
css:
#header{
    height: 60px;
    background-color: #ccc;
}
#parent {
    box-sizing: border-box;
    height: 500px;
    padding: 0 215px 0 115px;  /*为了使#center摆正,左右padding分别等于左右盒子的宽,可以结合左右盒子相对定位的left调整间距*/
}
#left {
    margin-left: -100%;  /*使#left上去一行*/
    position: relative;
    left: -115px;  /*相对定位调整#left的位置,正值大于或等于自身宽度*/
    float: left;
    width: 100px;
    height: 500px;
    background-color: #f00;
    opacity: 0.5;
}
#center {
    float: left;
    width: 100%;  /*由于#parent的padding,达到自适应的目的*/
    height: 500px;
    box-sizing: border-box;
    border: 1px solid #000;
    background-color: #eeff2b;
}
#right {
    position: relative;
    left: 215px; /*相对定位调整#right的位置,大于或等于自身宽度*/
    width: 200px;
    height: 500px;
    margin-left: -200px;  /*使#right上去一行*/
    float: left;
    background-color: #0f0;
    opacity: 0.5;
}
#footer{
    height: 60px;
    background-color: #ccc;
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