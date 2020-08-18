<template>
  <div>
    <h4>概述</h4>
    <h5>了解行内元素、块级元素、行内块级元素</h5>
    <div>
      <el-tabs v-model="introActive">
        <el-tab-pane label="行内元素" name="1">
          <div class="fontStyle fontIndent">
            不可以设置宽度、高度，但可以与其他行内元素位于同一行，行内元素内一般不可以包含块级元素，
            行内元素的高度一般由元素内部的字体大小决定的，宽度由内容长度决定，故其特点有：
          </div>
          <div class="fontStyle">
            <ol type="a">
              <li>每个元素可以和其他行内元素共占一行，直到一行排满才会换行；</li>
              <li>每个元素的宽高、行高、边距都不可设置；</li>
              <li>元素的宽度就是它包含文字或图片的宽度，高度就一般由内部字体大小决定。</li>
            </ol>
          </div>
          <div class="fontStyle">
            <span>常见的行内元素有：</span>
            <el-table :data="inlineData">
              <el-table-column prop="label" width="300" label="标签名"></el-table-column>
              <el-table-column prop="introduce" width="300" label="标签解析"></el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="块级元素" name="2">
          <div
            class="fontStyle fontIndent"
          >它有自己的宽度和高度，可以自定义width和height，它独自占据一整行，可容纳块级元素和行内元素。故其特点有：</div>
          <div class="fontStyle">
            <ol type="a">
              <li>每个元素独占一行；</li>
              <li>每个元素的高度、宽度、行高、边距都是可以设置的；</li>
              <li>如果元素的宽度不设置的话，默认情况为其父元素的宽度（父元素*100%）。</li>
              <li>块级元素可以包含行内元素、块级元素</li>
            </ol>
          </div>
          <div class="fontStyle">
            <span>常用的块级元素有：</span>
            <el-table :data="blockData">
              <el-table-column prop="label" width="300" label="标签名"></el-table-column>
              <el-table-column prop="introduce" width="300" label="标签解析"></el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="行内块级元素" name="3">
          <div class="fontStyle fontIndent">兼具了行内元素和块级元素的特点，可以自由设置宽高，也可以在一行设置多个元素，故特点有：</div>
          <div class="fontStyle">
            <ol type="a">
              <li>每个元素的高度、宽度、行高以及顶和底边距都可设置；</li>
              <li>和其他行内或行内块级元素元素放置在同一行上。</li>
            </ol>
          </div>
          <div class="fontStyle">
            <span>将行内元素分行显示或将块级元素同行显示：</span>
            <ul>
              <li>display:block -- 显示为块级元素（块级元素默认样式）</li>
              <li>display:inline -- 显示为行内元素（行内元素默认样式）</li>
              <li>display:inline-block -- 显示为行内块元素，表现为同行显示并可修改宽高内外边距等属性（行内块元素默认属性）</li>
            </ul>
            <span>例如，再ul标签加上display:inline-block，那么，每个li标签里的内容则不垂直显示，而是水平显示，如下：</span>
            <div>
              <span>此为行内元素span标签</span>
              <ul style="display: inline-block">
                <li style="display: inline-block">星期一</li>
                <li style="display: inline-block">星期二</li>
                <li style="display: inline-block">星期三</li>
              </ul>
            </div>
            <div>
              <span>代码如下：</span>
              <el-card shadow="hover">
                <pre>
&lt;div&gt;
  &lt;span&gt;此为行内元素span标签&lt;/span&gt;
  &lt;ul style="display: inline-block" &gt;
    &lt;li style="display: inline-block"&gt;星期一&lt;/li&gt;
    &lt;li style="display: inline-block"&gt;星期二&lt;/li&gt;
    &lt;li style="display: inline-block"&gt;星期三&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
                        </pre>
              </el-card>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { inlineData, blockData } from "../../../data/cssData";
export default {
  data() {
    return {
      introActive: "1",
      inlineData: inlineData(),
      blockData: blockData(),
    };
  },
};
</script>

<style>
</style>