<template>
  <div class="fontStyle">
    <span>
      <strong>前言：</strong>&nbsp;布局的传统方案，是基于盒子模型，依赖，
      <code>display+position+float</code>属性，但是他对于一些比较复杂的布局在实现上不友好，比如垂直居中。
    </span>
    <div style="display:flex">
      <div style="margin-right:7px; margin-top:5px">
        <img src="../../../assets/light.png" />
      </div>
      <p>什么是Flex布局？</p>
    </div>
    <div>
      <p class="fontIndent">
        Flex布局，即弹性布局；用来为盒状模型提供更丰富灵活性。任何一个容器都可以指定为Flex布局，代码只需要写
        <code>display: flex</code>即可，当然行内元素也可以使用弹性布局：
        <code>display: inline-flex</code>
      </p>
    </div>
    <div style="display:flex">
      <div style="margin-right:7px; margin-top:5px">
        <img src="../../../assets/light.png" />
      </div>
      <p>这里需要注意的是：设为flex布局后，子元素的float、clear、vertical-align都将失效</p>
    </div>
    <div style="display:flex">
      <div style="margin-right:7px; margin-top:5px">
        <img src="../../../assets/light.png" />
      </div>
      <p>flex基本概念</p>
    </div>
    <div>
      <el-card style="width:100%; ">
        <img src="./picture/flexProgram.png" style="width:100%;height:100%" />
      </el-card>
      <p class="fontIndent">
        flex容器默认存在两根轴，水平的主轴（main&nbsp;axis）盒垂直的交叉轴（cross&nbsp;axis）。
        主轴的开始位置叫做
        <code>main start</code>，结束位置叫做
        <code>main end</code>；交叉轴的开始位置叫做
        <code>cross start</code>，结束位置叫做
        <code>cross end</code>。
        项目默认沿着主轴排列，单个项目占据的主轴空间叫做
        <code>main size</code>。占据交叉轴空间叫做
        <code>cross size</code>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>