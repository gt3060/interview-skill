<template>
  <div class="fontStyle">
    <div style="display:flex">
      <div style="margin:4px 7px 0px 0px">
        <img src="../../../assets/light.png" />
      </div>
      <p>Css3背景：</p>
    </div>
    <p>
      CSS3中增加背景属性有：
      <code>background-clip, background-origin, background-size</code>
    </p>
    <div>
      <p>1.background-clip:</p>
      <p>background-clip: 指定背景绘制（显示）区域。</p>
      <el-card>
        <span>默认情况(border-box)，从边框开始绘制，如下图：</span>
        <div class="commonClip"></div>
        <el-divider></el-divider>
        <span>padding-box，从padding开始绘制，不算border，相当于把border那里的背景给裁剪掉。</span>
        <div class="commonClip backgroundClipPadding"></div>
        <el-divider></el-divider>
        <span>content-box，从内容开始绘制，不算border、padding。</span>
        <div class="commonClip backgroundClipContent"></div>
      </el-card>
    </div>
    <div>
      <p>2.background-origin:</p>
      <p>background-origin:background-origin 属性规定 background-position 属性相对于什么位置来定位</p>
      <p>同样有三个属性值：padding-box, border-box, content-box</p>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../../assets/light.png" />
        </div>
        <p>
          <b>注：有时候，background-clip和background-origin实现的效果是相同的，那么，两个属性的区别在哪里呢？</b>
        </p>
      </div>
      <p style="margin-left: 30px">background-clip：是将背景图片进行裁剪；而background-origin是设置背景的起始位置。</p>
    </div>
    <div>
      <p>3.background-size:</p>
      <p>background-size:重设你的背景图片</p>
      <p>
        同样有属性值：contain(缩小背景图片使其适应标签元素)、cover(让背景图片放大延伸到整个标签元素大小)、
        100px 100px(标明背景图片缩放的尺寸大小)、50% 100%(百分比是根据内容标签元素大小，来缩放图片的尺寸大小)
      </p>
    </div>
    <div>
      <p>4.使用多张背景图</p>
      <code>background:url('test.jpg') no-repeat left,url(logo.png) no-repeat right;</code>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.commonClip {
  width: 200px;
  border: 10px dashed black;
  height: 100px;
  background-color: pink;
}

.backgroundClipPadding {
  background-clip: padding-box;
}

.backgroundClipContent {
  background-clip: content-box;
  padding: 20px;
}
</style>