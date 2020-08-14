<template>
  <div>
    <el-collapse v-model="activeNames" accordion>
      <el-collapse-item title="绝对居中" name="1">
        <div class="fontStyle">
          原理：
          当top、bottom为0时,margin-top&bottom设置auto的话会无限延伸占满空间并且平分；
          当left、right为0时,margin-left&right设置auto的话会无限延伸占满空间并且平分
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
      </el-collapse-item>
      <el-collapse-item title="table-cell" name="2">
        <div class="fontStyle">
          使用：
          <el-card shadow="hover">
            <pre>
#parent{
    height: 150px;
    width: 200px;
    display: table-cell;
    vertical-align: middle;
    /*text-align: center;*/   /*如果是行内元素就添加这个*/
}
#son{
    /*margin: 0 auto;*/    /*如果是块级元素就添加这个*/
    width: 100px;
    height: 50px;
}
            </pre>
          </el-card>
        </div>
        <div class="fontStyle">优点：简单，兼容性好</div>
        <div class="fontStyle">
          缺点：设置tabl-cell的元素，宽度和高度的值设置百分比无效，需要给它的父元素设置display: table; 才生效；
          table-cell不感知margin，在父元素上设置table-row等属性，也会使其不感知height；
          设置float或position会对默认布局造成破坏，可以考虑为之增加一个父div定义float等属性；内容溢出时会自动撑开父元素。
        </div>
      </el-collapse-item>
      <el-collapse-item title="绝对定位" name="3">
        <div
          class="fontStyle"
        >原理：子绝父相，top、right、bottom、left的值是相对于父元素尺寸的，然后margin或者transform是相对于自身尺寸的，组合使用达到几何上的水平垂直居中</div>
        <div class="fontStyle">
          使用：
          <el-card shadow="hover">
            <pre>
#parent{
    position: relative;
}
#son{
    position: absolute;
    top: 50%;
    left: 50%;
    /*定宽高时等同于margin-left:负自身宽度一半;margin-top:负自身高度一半;*/
    transform: translate(-50%,-50%); 
}
            </pre>
          </el-card>
        </div>
      </el-collapse-item>
      <el-collapse-item title="任意个元素（flex）" name="4">
        <div class="fontStyle">
          使用：
          <el-card shadow="hover">
            <pre>
#parent{
    display: flex;
}
#son{
    margin: auto;
}
或
#parent{
    display: flex;
    justify-content: center;
    align-items: center;
}
或
#parent{
    display: flex;
    justify-content: center;
}
#son{
    align-self: center;
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
        <li>一般情况下，水平垂直居中，我们最常用的就是绝对定位加负边距了，缺点就是需要知道宽高，使用transform倒是可以不需要</li>
        <li>其次就是绝对居中，绝对定位设置top、left、right、bottom为0，然后margin:auto; 让浏览器自动平分边距以达到水平垂直居中的目的</li>
        <li>再者就是绝对定位</li>
        <li>
          移动端就用
          <b>flex</b>，简单方便，灵活并且功能强大
        </li>
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