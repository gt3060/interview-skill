<template>
  <div>
    <el-collapse v-model="activeNames" accordion>
      <el-collapse-item title="①文本/行内元素/行内块级元素" name="1">
        <div class="fontStyle">
          原理：
          <b>text-align</b>只控制行内内容（文字、行内元素、行内块级元素）如何相对他的块父元素对齐
        </div>
        <div class="fontStyle">
          使用：
          <el-card shadow="hover">
            <pre>
#parent {
  text-align:center;
}
            </pre>
          </el-card>
        </div>
        <div class="fontStyle">优点：简单快捷，容易理解，兼容性非常好</div>
        <div class="fontStyle">
          缺点：只对行内内容有效，属性会继承影响到后代行内内容，如果子元素宽度大于父元素宽度，则无效
          只有后代的宽度小于设置text-align属性元素的宽度，才会水平居中
        </div>
      </el-collapse-item>
      <el-collapse-item title="②单个块级元素" name="2">
        <div class="fontStyle">
          原理：
          <b>margin：0 auto</b>&nbsp;在margin有节余的情况下，如果设置左右margin为auto，则会平均分剩余的左右空间，另外，如果上下margin为auto
          其计算值为0
        </div>
        <div class="fontStyle">
          使用：
          <el-card shadow="hover">
            <pre>
#son {
  margin:0 auto;
}
            </pre>
          </el-card>
        </div>
        <div class="fontStyle">优点：简单，兼容性好</div>
        <div class="fontStyle">缺点：必须定宽，并且值不能为auto；宽度要小于父元素否则无效。</div>
      </el-collapse-item>
      <el-collapse-item title="③多个块级元素" name="3">
        <div class="fontStyle">原理：只控制行内内容（文字、行内元素、行内块级元素）如何相对他的块父元素对齐</div>
        <div class="fontStyle">
          使用：
          <el-card shadow="hover">
            <pre>
#parent{
    text-align: center;
}
.son{
    display: inline-block; /*改为行内或者行内块级形式，以达到text-align对其生效*/
}
            </pre>
          </el-card>
        </div>
        <div class="fontStyle">优点：简单快捷，容易理解，兼容性非常好</div>
        <div class="fontStyle">缺点：只对行内内容有效；属性会继承影响到后代行内内容；块级改为inline-block换行、空格会产生元素间隔</div>
      </el-collapse-item>
      <el-collapse-item title="④使用绝对定位实现" name="4">
        <div class="fontStyle">
          原理：子绝父相，top、left、right、bottom是相对父元素使用的，margin或者transform是相对于自身尺寸的
          组合以达到水平居中效果。
        </div>
        <div class="fontStyle">
          使用：
          <el-card shadow="hover">
            <pre>
#parent{
    height: 200px;
    width: 200px;  /*定宽*/
    position: relative;  /*父相*/
    background-color: #f00;
}
#son{
    position: absolute;  /*子绝*/
    left: 50%;  /*父元素宽度一半,这里等同于left:100px*/
    transform: translateX(-50%);  /*自身宽度一半,等同于margin-left: -50px;*/
    width: 100px;  /*定宽*/
    height: 100px;
    background-color: #00ff00;
}
            </pre>
          </el-card>
        </div>
        <div class="fontStyle">优点：使用margin-left兼容性好；不管是块级还是行内元素都可以实现</div>
        <div class="fontStyle">缺点：代码较多；脱离文档流；使用margin-left需要知道宽度值；使用transform兼容性不好（ie9+）</div>
      </el-collapse-item>
      <el-collapse-item title="⑤任意个元素（flex）" name="5">
        <div class="fontStyle">原理：就是设置当前主轴对齐方式为居中。说不上为什么，flex无非就是主轴侧轴是重点，然后就是排列方式的设置。</div>
        <div class="fontStyle">
          使用：
          <el-card shadow="hover">
            <pre>
#parent{
    display: flex;
    justify-content: center;
}
            </pre>
          </el-card>
        </div>
        <div class="fontStyle">优点：功能强大；简单方便；容易理解</div>
        <div class="fontStyle">缺点：PC端兼容性不好，移动端（Android4.0+）</div>
      </el-collapse-item>
    </el-collapse>
    <el-divider></el-divider>
    <div class="fontStyle">
      <span>小结</span>
      <ul>
        <li>
          对于水平居中，我们应该先考虑，哪些元素有自带的居中效果，最先想到的应该就是
          <b>text-align:center</b> 了，
          但是这个只对行内内容有效，所以我们要使用 text-align:center 就必须将子元素设置为
          <b>display: inline;</b>或者
          <b>display: inline-block;</b>
        </li>
        <li>
          其次就是考虑能不能用
          <b>margin: 0 auto;</b>，因为这都是一两句代码能搞定的事，实在不行就是用绝对定位去实现了
        </li>
        <li>移动端能用flex就用flex，简单方便，灵活并且功能强大</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"],
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