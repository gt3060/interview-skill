<template>
  <div class="fontStyle">
    <el-card>
      <p>flex有六个属性设置在容器上：</p>
      <ul>
        <li>flex-direction</li>
        <li>flex-wrap</li>
        <li>flex-flow</li>
        <li>justify-content</li>
        <li>align-items</li>
        <li>align-content</li>
      </ul>
    </el-card>
    <span>具体使用如下：</span>
    <el-collapse v-model="activeNames" accordion>
      <el-collapse-item title="flex-direction" name="1">
        <code>flex-direction: row | row-reverse | column | column-reverse</code>
        <el-card>
          <img src="./picture/flex-direction.jpg" style="width:100%" />
        </el-card>
        <span>属性及属性值含义为：</span>
        <ul class="fontStyle">
          <li>row（默认值）：主轴为水平方向，起点在左端;</li>
          <li>row-reverse：主轴为水平方向，起点在右端;</li>
          <li>column：主轴为垂直方向，起点在上沿;</li>
          <li>column-reverse：主轴为垂直方向，起点在下沿。</li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="flex-wrap" name="2">
        <code>flex-wrap: nowrap | wrap | wrap-reverse</code>
        <el-card>
          <img src="./picture/flex-direction.jpg" style="width:100%" />
        </el-card>
        <span>属性及属性值含义为：</span>
        <ul class="fontStyle">
          <li>nowrap:不换行,如果子元素总宽度超过父元素，那么也不换行，按比例平均分配宽度;</li>
          <li>wrap：换行，第一行在上方;</li>
          <li>wrap-reverse：换行，第一行在下方;</li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="flex-flow" name="3">
        <p>flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap</p>
        <code>flex-flow: &lt;flex-direction&gt; || &lt;flex-wrap&gt;;</code>
      </el-collapse-item>
      <el-collapse-item title="justify-content" name="4">
        <p>justify-content定义了项目在主轴上的对齐方式</p>
        <code>justify-content: flex-start | flex-end | center | space-between | space-around;</code>
        <el-card>
          <span>效果图：</span>
          <img src="./picture/justifyContent.jpg" width="100%" />
        </el-card>
        <span>属性及属性值含义为：</span>
        <ul class="fontStyle">
          <li>flex-start(默认值）:左对齐；</li>
          <li>flex-end：右对齐</li>
          <li>center：居中</li>
          <li>space-between:两端对齐，项目之间间隔相等</li>
          <li>space-around:每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍</li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="align-items" name="5">
        <p>align-items定义了项目在交叉轴上的对齐方式</p>
        <code>align-items: flex-start | flex-end | center | baseline | stretch;</code>
        <el-card>
          <span>效果图：</span>
          <img src="./picture/align-items.jpg" width="100%" />
        </el-card>
        <span>属性及属性值含义为：</span>
        <ul class="fontStyle">
          <li>flex-start:交叉轴的起点对齐</li>
          <li>flex-交叉轴的终点对齐</li>
          <li>center：交叉轴的中点对齐</li>
          <li>baseline:项目的第一行文字的基线对齐</li>
          <li>stretch(默认值）:如果项目未设置高度或设为auto，将占满整个容器的高度</li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="align-content" name="6">
        <p>align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</p>
        <code>align-content: flex-start | flex-end | center | space-between | space-around | stretch;</code>
        <el-card>
          <span>效果图：</span>
          <img src="./picture/align-content.jpg" width="100%" />
        </el-card>
        <span>属性及属性值含义为：</span>
        <ul class="fontStyle">
          <li>flex-start：与交叉轴的起点对齐。</li>
          <li>flex-end：与交叉轴的终点对齐。</li>
          <li>center：与交叉轴的中点对齐。</li>
          <li>space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。</li>
          <li>space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</li>
          <li>stretch（默认值）：轴线占满整个交叉轴。</li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"],
    };
  },
};
</script>

<style>
/* ul li {
  list-style-type: square;
} */
ul {
  margin-left: 20px;
}
</style>