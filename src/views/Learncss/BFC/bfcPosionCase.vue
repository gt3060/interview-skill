<template>
  <div class="fontStyle">
    <span>
      在定位的时候，浏览器就会根据元素的盒类型和上下文对这些元素进行定位，可以说盒就是定位的基本单位。
      定位时，有三种定位方案，分别是常规流，浮动已经绝对定位。
    </span>
    <el-tabs v-model="activeName">
      <el-tab-pane label="常规流" name="1">
        <ul class="fontStyle" style="margin-left:20px">
          <li>在常规流中，盒一个接着一个排列</li>
          <li>在块级格式化上下文里面， 它们竖着排列</li>
          <li>在行内格式化上下文里面， 它们横着排列</li>
          <li>当position为static或relative，并且float为none时会触发常规流</li>
          <li>对于静态定位(static positioning)，position: static，盒的位置是常规流布局里的位置</li>
          <li>
            对于相对定位(relative positioning)，position: relative，盒偏移位置由这些属性定义top，bottom，left、right。
            即使有偏移，仍然保留原有的位置，其它常规流不能占用这个位置
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="浮动" name="2">
        <ul class="fontStyle"  style="margin-left:20px">
          <li>它位于当前行的开头或末尾</li>
          <li>这导致常规流环绕在它的周边，除非设置 clear 属性</li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="绝对定位" name="3">
        <ul class="fontStyle" style="margin-left:20px">
          <li>绝对定位方案，盒从常规流中被移除，不影响常规流的布局</li>
          <li>它的定位相对于它的包含块，相关CSS属性：top，bottom，left及right</li>
          <li>如果元素的属性position为absolute或fixed，它是绝对定位元素</li>
          <li>对于position: absolute，元素定位将相对于最近的一个relative、fixed或absolute的父元素，如果没有则相对于body</li>
        </ul>
      </el-tab-pane>
    </el-tabs>
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
</style>