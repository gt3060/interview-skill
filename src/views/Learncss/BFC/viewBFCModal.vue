<template>
  <div>
    <div style="display:flex">
      <div style="margin-right:7px">
        <img src="../../../assets/light.png" />
      </div>
      <span>什么是BFC？</span>
    </div>
    <div class="fontStyle">BFC，即块格式化上下文，</div>
    <div style="display:flex;margin-top:7px">
      <div style="margin-right:7px">
        <img src="../../../assets/light.png" />
      </div>
      <span>什么是视觉格式化模型？</span>
    </div>
    <div class="fontStyle">
      视觉格式化模型是用来处理文档并将他显示在视觉媒体的机制，视觉格式化模型定义了盒的生成，盒主要包括了块盒、行内盒、匿名盒。盒的类型由display决定。
      下面具体分析每一种盒类型。
    </div>
    <div class="fontStyle">
      <el-tabs v-model="activeName">
        <el-tab-pane label="块盒" name="1">
          <span>块盒即（block box），块盒有以下特性：</span>
          <ul class="fontStyle" style="margin-left:20px">
            <li>当元素的css属性display为block，list-item或table时，它是块级元素block-level</li>
            <li>视觉上为块形，呈竖直排列</li>
            <li>块格式化上下文</li>
            <li>每个块级元素至少生成一个块级盒，称为主要块级盒，一些元素，比如li生成额外的盒来放置项目符号，不过多数元素只生成一个主要块级盒</li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="行内盒" name="2">
          <ul class="fontStyle" style="margin-left:20px">
            <li>当元素的css属性display的计算值为inline，inline-block，inline-table时，称他为行内级元素</li>
            <li>视觉上他将内容与其他行内及元素排列多行，典型如段落内容，有文本或图片都是行内及元素</li>
          </ul>
        </el-tab-pane>
        <el-tab-pane
          label="匿名盒"
          name="3"
        >匿名盒也有份匿名块盒与匿名行内盒，因为匿名盒没有名字，不能利用选择器来选择它们，所以它们的所有属性都为inherit或初始默认值</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "1",
    };
  },
};
</script>

<style>
.fontStyle {
  line-height: 40px;
}
.fontIndent {
  /* 首行缩进 */
  text-indent: 2em;
}
</style>