<template>
  <div class="fontStyle">
    <div style="display:flex">
      <div style="margin:4px 7px 0px 0px">
        <img src="../../../assets/light.png" />
      </div>
      <p>Css3阴影：</p>
    </div>
    <p>以前没有css3的时候，或者需要兼容低版本浏览器的时候，阴影只能用图片实现，但是现在不需要，css3就提供了</p>
    <p>语法如下：</p>
    <code>
      box-shadow: 水平阴影位置，垂直阴影的位置，模糊距离，阴影的大小，
      阴影的颜色，阴影开始的方向（默认是从里往外，设置inset是从外往里）;
    </code>
    <div style="display: flex;">
      <div style="margin:4px 7px 0px 0px">
        <img src="../../../assets/example.png" style="margin-top:4px" />
      </div>
      <p>&nbsp;示例</p>
    </div>
    <div class="shadowDemoStyle">
      <div class="common demo"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.shadowDemoStyle {
  width: 150px;
  height: 120px;
}
.common {
  width: 100%;
  height: 100%;
  background-color: pink;
}
.demo:hover {
  transition: all, 1s;
  box-shadow: 10px 10px 5px #888888;
}
</style>