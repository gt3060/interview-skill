<template>
  <div class="fontStyle">
    <div style="display:flex">
      <div style="margin:4px 7px 0px 0px">
        <img src="../../../assets/light.png" />
      </div>
      <p>Css3边框：</p>
    </div>
    <p>CSS3中增加边框属性有：边框图片和边框圆角。</p>
    <p>
      边框图片语法：
      <code>border-image: source, slice, width, outset, repeat|initial|inherit</code>
    </p>
    <p>边框图片具体属性为：</p>
    <div style="margin-left:20px">
      <ol type="a">
        <li>border-image-source: 用于指定用于绘制边框的图片</li>
        <li>border-image-slice: 图像边界向内偏移</li>
        <li>border-iamge-width: 图像边界宽度</li>
        <li>border-image-outset: 用于指定在边框外部绘制 border-image-area 的量</li>
        <li>border-image-repeat: 用于设置图像边界是否应重复（repeat）、拉伸（stretch）或铺满（round）</li>
      </ol>
    </div>
    <p>边框圆角的语法：border-radius: n1, n2, n3, n4; //n1-n4分别代表左上、右上、右下、左下；</p>
    <div style="display: flex;">
      <div style="margin:4px 7px 0px 0px">
        <img src="../../../assets/example.png" style="margin-top:4px" />
      </div>
      <p>&nbsp;示例</p>
    </div>
    <div class="borderDemoStyle"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.borderDemoStyle {
  width: 150px;
  height: 120px;
  border-radius: 50px;
  background-color: pink;
}
</style>