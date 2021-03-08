<template>
    <div class="fontStyle"
         id="bfc">
        <span>块格式化上下文，是页面css视觉渲染一部分，用于决定块盒子的布局及浮动相互影响范围的一个区域</span>
        <el-tabs v-model="activeName">
            <el-tab-pane label="BFC的布局规则"
                         name="1">
                <ul class="fontStyle"
                    style="margin-left:20px;">
                    <li>内部的Box会在垂直方向，一个接一个地放置</li>
                    <li>Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠</li>
                    <li>每个盒子（块盒与行盒）的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此</li>
                    <li>BFC的区域不会与float box重叠</li>
                    <li>BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素</li>
                    <li>计算BFC的高度时，浮动元素也参与计算</li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="BFC的创建方法"
                         name="2">
                <ul class="fontStyle"
                    style="margin-left:20px">
                    <li>根元素或其他包含他的元素</li>
                    <li>浮动，元素的float不为none</li>
                    <li>绝对定位元素(positon为absolute/fixed)</li>
                    <li>行内块inline-blocks</li>
                    <li>表格单元格display：table-cell</li>
                    <li>overflow的值不为visible</li>
                    <li>弹性盒flex box(display:flex/inline-flex)</li>
                </ul>
                <strong>常见的创建bfc的方式有：</strong>
                <span>float:left/right; overflow:hidden; postion:absolute;</span>
                <span>也就是说，只要写这些元素中的一个，就代表创建了一个BFC。</span>
            </el-tab-pane>
            <el-tab-pane label="BFC范围"
                         name="3">
                <span>一个BFC包含创建该上下文元素的所有子元素，但不包括创建了新BFC的子元素的内部元素。</span>
                <span>BFC的一个最重要的效果是，让处于BFC内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。</span>
            </el-tab-pane>
            <el-tab-pane label="绝对定位"
                         name="4">
                <ul class="fontStyle"
                    style="margin-left:20px">
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
            activeName: '1',
        };
    },
};
</script>

<style>
</style>
