<template>
  <div>
    <el-collapse v-model="activeNames" accordion>
      <el-collapse-item title="实例一" name="1">
        <span class="fontStyle">效果图：</span>
        <el-card>
          <div class="box">
            <div class="left"></div>
            <div class="right"></div>
          </div>
        </el-card>
        <span class="fontStyle">代码如下：</span>
        <el-card shadow="hover">
          <pre>
html:
&lt;div id="box"&gt;
  &lt;div class="left"&gt;&lt;/div&gt;
  &lt;div class="right"&gt;&lt;/div&gt;
&lt;/div&gt;
css:
* {
    margin: 0;
    padding: 0;
}
.left{
    background: #73DE80;    /* 绿色 */
    opacity: 0.5;
    border: 3px solid #F31264;
    width: 200px;
    height: 200px;
    float: left;
}
.right{                        /* 粉色 */
    background: #EF5BE2;
    opacity: 0.5;
    border: 3px solid #F31264;
    width:400px;
    min-height: 100px;
}
.box{
    background:#888;
    height: 100%;
    margin-left: 50px;
}
            </pre>
        </el-card>
      </el-collapse-item>
      <el-collapse-item title="bfc作用之清除浮动" name="2">
        <p class="fontStyle">
          当我们不给父节点设置高度，子节点设置浮动的时候，会发生高度塌陷，这个时候我们就要清楚浮动
          如实例一，根据bfc布局规则可知：计算bfc高度时，浮动也算在其中，故给父节点激活bfc。
        </p>
        <span class="fontStyle">效果图：</span>
        <el-card>
          <div class="box BFC">
            <div class="left"></div>
            <div class="right"></div>
          </div>
        </el-card>
        <span class="fontStyle">代码如下：</span>
        <el-card shadow="hover">
          <pre>
html:
&lt;div id="box BFC"&gt;
  &lt;div class="left"&gt;&lt;/div&gt;
  &lt;div class="right"&gt;&lt;/div&gt;
&lt;/div&gt;
css:
.BFC{
    overflow: hidden;
}
/* 其他与实例一相同 */
            </pre>
        </el-card>
      </el-collapse-item>
      <el-collapse-item title="实例二" name="3">
        <span class="fontStyle">效果图：</span>
        <el-card>
          <div class="box3">
            <div class="left3">LEFT</div>
            <div class="right3">RIGHT</div>
          </div>
        </el-card>
        <span class="fontStyle">代码如下：</span>
        <el-card shadow="hover">
          <pre>
html:
&lt;div class="box3"&gt;
  &lt;div class="left3"&gt;&lt;/div&gt;
  &lt;div class="right3"&gt;&lt;/div&gt;
&lt;/div&gt;
css:
.box3 {
        width: 100%;
        position: relative;
    }
.left3 {
    width: 100px;
    height: 150px;
    float: left;
    background: rgb(139, 214, 78);
    text-align: center;
    line-height: 150px;
    font-size: 20px;
}
.right3 {
    height: 300px;
    background: rgb(170, 54, 236);
    text-align: center;
    line-height: 300px;
    font-size: 40px;
}
            </pre>
        </el-card>
      </el-collapse-item>
      <el-collapse-item title="bfc作用之自适应两栏布局" name="4">
        <p class="fontStyle"></p>
        <span class="fontStyle">效果图：</span>
        <el-card>
          <div class="box3">
            <div class="left3">LEFT</div>
            <div class="right4">RIGHT</div>
          </div>
        </el-card>
        <span class="fontStyle">代码如下：</span>
        <el-card shadow="hover">
          <pre>
html:
&lt;div class="box3"&gt;
  &lt;div class="left3"&gt;&lt;/div&gt;
  &lt;div class="right4"&gt;&lt;/div&gt;
&lt;/div&gt;
css:
.box3 {
        width: 100%;
        position: relative;
    }
.left3 {
    width: 100px;
    height: 150px;
    float: left;
    background: rgb(139, 214, 78);
    text-align: center;
    line-height: 150px;
    font-size: 20px;
}
.right4 {
    height: 300px;
    overflow: hidden;
    background: rgb(170, 54, 236);
    text-align: center;
    line-height: 300px;
    font-size: 40px;
}
            </pre>
        </el-card>
      </el-collapse-item>
      <el-collapse-item title="bfc作用之避免margin重叠" name="5">
        <span class="fontStyle">效果图：</span>
        <el-card>
          <div>
            <p class="p">看看我的 margin是多少</p>
            <p class="p">看看我的 margin是多少</p>
          </div>
          <span>可见，属于同一个BFC的两个相邻的Box会发生margin重叠，也就是下面的p标签内的margin-top被上面的p标签内的margin-bottom抵消</span>
          <p class="fontStyle">避免margin重叠后的效果图：</p>
          <div>
            <p class="p">看看我的 margin是多少</p>
            <div style="overflow:hidden">
              <p class="p">看看我的 margin是多少</p>
            </div>
          </div>
          <span>解决办法就是，将下面的p标签用一个div包裹起来，并使得此div标签激活为BFC</span>
        </el-card>
        <span class="fontStyle">具体代码如下：</span>
        <el-card shadow="hover">
          <pre>
修改前:
html:
&lt;div&gt;
  &lt;p class="p"&gt;&lt;/p&gt;
  &lt;p class="p"&gt;&lt;/p&gt;
&lt;/div&gt;
css:
.p {
  color: #f55;
  background: yellow;
  width: 200px;
  line-height: 100px;
  text-align: center;
  margin: 30px;
}
修改后：
&lt;div&gt;
  &lt;p class="p"&gt;&lt;/p&gt;
  &lt;div style="overflow:hidden"&gt;
    &lt;p class="p"&gt;&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
            </pre>
        </el-card>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"],
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.left {
  background: #73de80; /* 绿色 */
  opacity: 0.5;
  border: 3px solid #f31264;
  width: 200px;
  height: 200px;
  float: left;
}
.right {
  /* 粉色 */
  background: #ef5be2;
  opacity: 0.5;
  border: 3px solid #f31264;
  width: 400px;
  min-height: 100px;
}
.box {
  background: #888;
  height: 100%;
  margin-left: 50px;
}

.BFC {
  overflow: hidden;
}
.little {
  background: #fff;
  width: 50px;
  height: 50px;
  margin: 10px;
  float: left;
}

.box3 {
  width: 100%;
  position: relative;
}

.left3 {
  width: 100px;
  height: 150px;
  float: left;
  background: rgb(139, 214, 78);
  text-align: center;
  line-height: 150px;
  font-size: 20px;
}

.right3, .right4 {
  height: 300px;
  background: rgb(170, 54, 236);
  text-align: center;
  line-height: 300px;
  font-size: 40px;
}

.right4{
  overflow: hidden;
}

.p {
  color: #f55;
  background: yellow;
  width: 200px;
  line-height: 100px;
  text-align: center;
  margin: 30px;
}
/*  */
</style>