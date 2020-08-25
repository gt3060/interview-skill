<template>
  <div class="fontStyle">
    <el-card>
      <p>同样，flex也有六个属性设置在项目（容器里面的元素）上：</p>
      <ul>
        <li>order</li>
        <li>flex-grow</li>
        <li>flex-shrink</li>
        <li>flex-basis</li>
        <li>flex/li></li>
        <li>align-self</li>
      </ul>
    </el-card>
    <span>具体使用如下：</span>
    <el-collapse v-model="activeNames" accordion>
      <el-collapse-item title="order" name="1">
        <span>order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0，使用：</span>
        <div>
          <code>.item {order: &lt;integer&gt;;}</code>
        </div>
        <el-card>
          <img src="./picture/order.jpg" style="width:100%" />
        </el-card>
      </el-collapse-item>
      <el-collapse-item title="flex-grow" name="2">
        <span>flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大，使用：</span>
        <div>
          <code>.item {flex-grow: &lt;number&gt;; /* default&nbsp; 0 */}</code>
        </div>
        <el-card>
          <img src="./picture/flex-grow.jpg" style="width:100%" />
        </el-card>
        <span>
          <strong>
            如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。
            如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
          </strong>
        </span>
      </el-collapse-item>
      <el-collapse-item title="flex-shrink" name="3">
        <span>flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</span>
        <div>
          <code>.item {flex-shrink: &lt;number&gt;; /* default &nbsp;1 */}</code>
        </div>
        <span>
          <strong>
            如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。
            如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。负值对该属性无效
          </strong>
        </span>
      </el-collapse-item>
      <el-collapse-item title="flex-basis" name="4">
        <span>
          flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main&nbsp; size）。
          浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小
        </span>
        <div>
          <code>.item {flex-basis: &lt;length&gt; | auto; /* default&nbsp; auto */}</code>
        </div>
        <span>它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间</span>
      </el-collapse-item>
      <el-collapse-item title="flex" name="5">
        <span>flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 &nbsp;1&nbsp; auto。后两个属性可选。</span>
        <span>
          该属性有两个快捷值：auto (1&nbsp;1&nbsp; auto) 和 none (0 &nbsp;0 &nbsp;auto)。
          建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值
        </span>
      </el-collapse-item>
      <el-collapse-item title="align-self" name="6">
        <span>
          align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。
          默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch
        </span>
        <div>
          <code>.item {align-self: auto | flex-start | flex-end | center | baseline | stretch}</code>
        </div>
      </el-collapse-item>
      <el-collapse-item title="flex实例-骰子" name="6">
        <p>详见：阮一峰（flex实例）</p>
        <div class="linkFlexInstance fontStyle">
          <a
            href="http://www.ruanyifeng.com/blog/2015/07/flex-examples.html"
            target="view_window"
          >传送门</a>
        </div>
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
ul {
  margin-left: 20px;
}

a {
  color: black;
}

a:hover{
  color: rgb(91, 146, 218);
}

.linkFlexInstance {
  font-size: 17px;
  font-family: "楷体";
}
</style>