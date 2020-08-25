<template>
  <div class="fontStyle">
    <div style="display:flex">
      <div style="margin:4px 7px 0px 0px">
        <img src="../../../assets/light.png" />
      </div>
      <p>Css3过渡：</p>
    </div>
    <span>动画这个平常用的也很多，主要是做一个预设的动画。和一些页面交互的动画效果。</span>
    <p>语法如下：</p>
    <code>
      animation: 动画名称, 一个周期花费时间, 运动曲线（ease）,
      动画延迟（default：0）, 播放次数（default：1）, 是否反向播放（default:nomal）, 是否暂停动画（default: running）;
    </code>
    <div style="display: flex;">
      <div style="margin:4px 7px 0px 0px">
        <img src="../../../assets/example.png" style="margin-top:4px" />
      </div>
      <p>&nbsp;示例一</p>
    </div>
    <div>
      <p>执行一次logo2-line动画，运动时间2秒，运动曲线infinite</p>
      <code>{ animation: logo2-line 2s infinite; }</code>
      <el-card>
        <div class="animationDemoStyle"></div>
      </el-card>
    </div>
    <span>animation属性同样也是一个简写属性，用于设置六个动画属性，具体如下：</span>
    <ul>
      <li>animation-name: 规定需要绑定到选择器keyframe名称；</li>
      <li>animation-duration: 规定完成动画所花费的时间，以秒或毫秒记；</li>
      <li>
        animation-timing-function: 规定动画的速度曲线；
        可取值有：linear(动画从头到尾速度相同)、ease(默认，低速开始，然后加速，结束前变慢)、
        ease-in(动画以低速开始)、ease-out(动画以低速结束)、ease-in-out(动画以低速开始和结束)；
      </li>
      <li>animation-delay:规定在动画开始前的延迟；</li>
      <li>animation-iteration-count: 规定动画播放次数；</li>
      <li>animation-direction: 规定是否轮流反向播放动画。可取值有：normal(默认值，动画正常播放)、alternate(动画应该轮流方向播放)。</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.animationDemoStyle {
  width: 100px;
  height: 75px;
  position: relative;
  background-color: pink;
  animation: demoLine 2s infinite;
}

@keyframes demoLine {
  from {
    left: 0%;
  }
  to {
    left: 30%;
  }
}
</style>