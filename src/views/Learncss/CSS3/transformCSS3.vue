<template>
  <div class="fontStyle">
    <div style="display:flex">
      <div style="margin:4px 7px 0px 0px">
        <img src="../../../assets/light.png" />
      </div>
      <p>Css3形状转换：</p>
    </div>
    <p>transform这个属性，用于将元素进行旋转、缩放、移动、倾斜等功能。</p>
    <p>语法如下：</p>
    <code>transform: none | transform-functions;</code>
    <div>
      <code>以下示例，鼠标滑入可查看，转换效果</code>
    </div>
    <div style="display: flex;">
      <div style="margin:4px 7px 0px 0px">
        <img src="../../../assets/example.png" style="margin-top:4px" />
      </div>
      <p>&nbsp;示例一---旋转</p>
    </div>
    <div>
      <el-card>
        <code>transform: rotate(30deg);</code>
        <div class="transformDemoBox">
          <div class="commonDemoBox transformDemo"></div>
        </div>
        <el-divider />
        <code>transform: rotate3d(10, 10, 10, 90deg);</code>
        <div class="transformDemoBox">
          <div class="commonDemoBox transformDemo_1"></div>
        </div>
        <el-divider></el-divider>
        <code>transform: rotateX(180deg);</code>
        <div class="transformDemoBox">
          <div class="commonDemoBox transformDemo_2"></div>
        </div>
        <el-divider></el-divider>
        <code>transform: rotateY(180deg);</code>
        <div class="transformDemoBox">
          <div class="commonDemoBox transformDemo_3"></div>
        </div>
        <el-divider></el-divider>
        <code>transform: skew(10deg,10deg);</code>
        <div class="transformDemoBox">
          <div class="commonDemoBox transformDemo_4"></div>
        </div>
        <span>注：skew(10deg, 10deg) 可以写成，skewX(10deg); skewY(10deg);</span>
      </el-card>
    </div>
    <div style="display: flex;">
      <div style="margin:4px 7px 0px 0px">
        <img src="../../../assets/example.png" style="margin-top:4px" />
      </div>
      <p>&nbsp;示例二---转换</p>
    </div>
    <div>
      <el-card>
        <p>2d转换translate(x, y)</p>
        <code>transform: translate(30px,30px);</code>
        <el-divider></el-divider>
        <div class="transformDemoBox">
          <div class="commonDemoBox transformDemo2"></div>
        </div>
        <el-divider></el-divider>
        <p>3d转换translate3d(x, y, z)</p>
        <code>transform: translate3d(30px, 30px, 30px);</code>
        <el-divider></el-divider>
        <div class="transformDemoBox">
          <div class="commonDemoBox transformDemo2_1"></div>
        </div>
      </el-card>
      <span>如果只沿着某一条轴线转换，那么可以直接使用translateX,translateY,translateZ</span>
    </div>
    <div style="display: flex;">
      <div style="margin:4px 7px 0px 0px">
        <img src="../../../assets/example.png" style="margin-top:4px" />
      </div>
      <p>&nbsp;示例三---缩放</p>
    </div>
    <div>
      <el-card>
        <p>2d缩放scale(2);3d缩放scale3d(x,y,z)</p>
        <code>transform: scale(.8);</code>
        <div class="transformDemoBox">
          <div class="commonDemoBox transformDemo3"></div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.transformDemoBox {
  width: 100%;
  height: 150px;
}

.commonDemoBox {
  margin-top: 25px;
  margin-left: 30px;
  width: 150px;
  height: 120px;
  background-color: pink;
}
.transformDemo:hover {
  transition: all 1s;
  transform: rotate(30deg);
}

.transformDemo_1:hover {
  transition: all 1s;
  transform: rotate3d(10, 10, 10, 90deg);
}

.transformDemo_2:hover {
  transform: rotateX(180deg);
  transition: all 1s;
}

.transformDemo_3:hover {
  transform: rotateY(180deg);
  transition: all 1s;
}

.transformDemo_4:hover {
  transition: all 1s;
  transform: skew(10deg, 10deg);
}

.transformDemo2:hover {
  transition: all 1s;
  transform: translate(30px, 30px);
}

.transformDemo2_1:hover {
  transition: all 1s;
  transform: translate3d(30px, 30px, 30px);
}

.transformDemo3:hover {
  transition: all 1s;
  transform: scale(0.8);
}
</style>