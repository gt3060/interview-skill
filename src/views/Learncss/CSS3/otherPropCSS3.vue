<template>
  <div class="fontStyle">
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../../assets/light.png" />
        </div>
        <p>Css3文字：</p>
      </div>
      <el-divider></el-divider>
      <div>
        <p>1.换行</p>
        <p>
          语法：
          <code>word-break: normal | break-all | keep-all</code>
        </p>
        <ul>
          <li>word-break: normal; //使用浏览器默认的换行规则；</li>
          <li>word-break: keep-all; //只能在半角空格或连字符处换行；</li>
          <li>word-break: break-all; //允许在单词内换行。</li>
        </ul>
      </div>
      <div>
        <p>2.超出省略号</p>
        <p>
          语法：
          <code>overflow: hidden; white-space: nowrap; text-overflow: ellipsis;</code>
        </p>
        <el-card>
          <div class="fontCss3Demo">balablaalabalablablabalablablabblablabalbalbalbalba</div>
          <!-- <div>
            <el-input class="fontCss3Demo" value="balablaalabalablablabalablablabblablabalbalbalbalba"></el-input>
          </div>-->
        </el-card>
      </div>
      <div>
        <p>3.文字阴影</p>
        <p>
          语法如下：
          <code>text-shadow: 0 0 10px #f00</code>
        </p>
        <el-card>
          <div style="margin:20px; text-shadow: 0 0 10px #f00; font-size:30px">文字阴影</div>
        </el-card>
      </div>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../../assets/light.png" />
        </div>
        <p>Css3渐变：</p>
      </div>
      <div>
        <span>css3渐变包括线性渐变和径向渐变，</span>
        <p>语法如下：</p>
        <p>
          线性渐变：
          <code>background-image: linear-gradient(direction, color-stop1, color-stop2, ...);</code>
        </p>
        <p>
          径向渐变：
          <code>background-image: radial-gradient(shape size at position, start-color, ..., last-color);</code>
        </p>
      </div>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../../assets/light.png" />
        </div>
        <p>Css3媒体查询：</p>
      </div>
      <span>媒体查询，就在监听屏幕尺寸的变化，在不同尺寸的时候显示不同的样式！在做响应式的网站里面，是必不可少的一环！</span>
      <el-card>
        <div style="margin:15px" class="mediaDemo">
          <p>如果媒体类型屏幕的可视窗口宽度小于 960 px ，背景颜色将改变。</p>
          <p>如果媒体类型屏幕的可视窗口宽度小于 480 px ，背景颜色将改变。</p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.fontCss3Demo {
  margin: 20px;
  width: 100px;
  /* 以下三行用于超出省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mediaDemo {
  background-color: pink;
}

@media screen and (max-width: 960px) {
  .mediaDemo {
    background-color: darkgoldenrod;
  }
}
@media screen and (max-width: 480px) {
  .mediaDemo {
    background-color: lightgreen;
  }
}
</style>