<template>
  <div>
    <el-collapse v-model="activeNames" accordion>
      <el-collapse-item title="单行文本/行内元素/行内块级元素" name="1">
        <div class="fontStyle">
          原理：
          <b>line-height</b>最终表现是通过inline box实现的，而无论inline box所占据的高度是多少，其占据的空间都是与文字内容公用水平垂线的。
        </div>
        <div class="fontStyle">
          使用：
          <el-card shadow="hover">
            <pre>
#parent{
    height: 150px;
    line-height: 150px;  /*与height等值*/
}
            </pre>
          </el-card>
        </div>
        <div class="fontStyle">优点：简单快捷，容易理解，兼容性非常好</div>
        <div class="fontStyle">缺点：只能用于单行行内内容；要知道高度的值</div>
      </el-collapse-item>
      <el-collapse-item title="多行文本/行内元素/行内块级元素" name="2">
        <div class="fontStyle">
          使用：
          <el-card shadow="hover">
            <pre>
#parent{  /*或者用span把所有文字包裹起来，设置display：inline-block转换成图片的方式解决*/
    height: 150px;
    line-height: 30px;  // 元素在页面呈现为5行,则line-height的值为height/5
}
            </pre>
          </el-card>
        </div>
        <div class="fontStyle">优点：简单，兼容性好</div>
        <div class="fontStyle">缺点：只能用于行内内容；需要知道高度和最终呈现多少行来计算出line-height的值，建议用span包裹多行文。</div>
      </el-collapse-item>
      <el-collapse-item title="图片" name="3">
        <div class="fontStyle">
          使用：
          <el-card shadow="hover">
            <pre>
#parent{
    height: 150px;
    line-height: 150px;
    font-size: 0; // 注意：需要将文字大小设置为0，才可以完全垂直居中
}
img#son{vertical-align: middle;} /*默认是基线对齐，改为middle*/
            </pre>
          </el-card>
        </div>
      </el-collapse-item>
      <el-collapse-item title="单个块级元素" name="4">
        <h6>使用table-cell</h6>
        <div class="fontStyle">原理：使用table，使表格内容对齐方式为middle。</div>
        <div class="fontStyle">
          使用：
          <el-card shadow="hover">
            <pre>
#parent{
    display: table-cell;
    vertical-align: middle;
}
            </pre>
          </el-card>
        </div>
        <div class="fontStyle">优点：简单；宽高不定；兼容性好</div>
        <div class="fontStyle">
          缺点：设置tabl-cell的元素，宽度和高度的值设置百分比无效，需要给它的父元素设置display: table; 才生效；
          table-cell不感知margin，在父元素上设置table-row等属性，也会使其不感知height；
          设置float或position会对默认布局造成破坏，可以考虑为之增加一个父div定义float等属性；内容溢出时会自动撑开父元素
        </div>
        <h6>使用绝对定位</h6>
        <div class="fontStyle">
          使用：
          <el-card shadow="hover">
            <pre>
#parent{
    height: 150px;
    position: relative;  /*父相*/
}
#son{
    position: absolute;  /*子绝*/
    top: 50%;  /*父元素高度一半,这里等同于top:75px;*/
    transform: translateY(-50%);  /*自身高度一半,这里等同于margin-top:-25px;*/
    height: 50px;
}
或
#parent{position: relative;}
#son{
    position: absolute;
    margin: auto 0;
    top: 0;
    bottom: 0;
    height: 50px;
}
            </pre>
          </el-card>
        </div>
      </el-collapse-item>
      <el-collapse-item title="任意个元素（flex）" name="5">
        <div class="fontStyle">
          使用：
          <el-card shadow="hover">
            <pre>
#parent{
    display: flex;
    align-items: center;
}
或
#parent{
    display: flex;
}
.son{
    align-self: center;
}
或 
#parent{
    display: flex;
    flex-direction: column;
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
          对于水平居中，我们应该先考虑，
          <b>line-height</b> 了
        </li>
        <li>
          其次就是考虑能不能用
          <b>vertical-align: middle;</b>
        </li>
        <li>再者就是绝对定位</li>
        <li>移动端就用<b>flex</b>，简单方便，灵活并且功能强大</li>
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