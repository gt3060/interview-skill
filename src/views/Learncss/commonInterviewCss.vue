<template>
  <div class="fontStyle backTopTarget">
    <el-backtop></el-backtop>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../assets/light.png" />
        </div>
        <p>1.标准盒子模型和ie盒子模型：</p>
      </div>
      <div>
        盒子模型是由margin、border、padding、content构成；不同在于：
        <ul>
          <li>标准盒子模型（w3c）的width就是content的width，height就是content的height；</li>
          <li>ie盒子模型的width是content的width+padding的width+border的width，height同理。</li>
        </ul>
      </div>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../assets/light.png" />
        </div>
        <p>2.Css如何设置这两种盒子模型：</p>
      </div>
      <div>
        <ul>
          <li>
            <code>box-sizing: content-box;</code>
          </li>
          <li>
            <code>box-sizing: border-box;</code>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../assets/light.png" />
        </div>
        <p>3.margin塌陷/margin重叠</p>
      </div>
      <div>
        <el-card>
          <span>margin塌陷重叠效果图：</span>
          <div class="topDiv">
            <code>margin-bottom: 10px;</code>
          </div>
          <div class="bottomDiv">
            <code>margin-top: 10px;</code>
          </div>
        </el-card>
      </div>
      <div>
        <b>解决办法：</b>可以利用
        <el-button type="text" @click="toBFC">bfc</el-button>
      </div>
      <div>
        <b>需要注意的是：</b>
        <ul>
          <li>标准文档流中，竖直方向的margin不叠加，只取较大的值作为margin(水平方向的margin是可以叠加的，即水平方向没有塌陷现象)。</li>
          <li>margin这个属性，本质上描述的是兄弟和兄弟之间的距离； 最好不要用这个marign表达父子之间的距离。</li>
        </ul>
      </div>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../assets/light.png" />
        </div>
        <p>
          <el-button type="text" @click="toBFC">4.BFC</el-button>
        </p>
      </div>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../assets/light.png" />
        </div>
        <p>5.常用css选择器</p>
      </div>
      <div>
        <ul>
          <li>id选择器</li>
          <li>class类选择器</li>
          <li>标签选择器:div,p,h1...</li>
          <li>通配符选择器：*</li>
          <li>相邻选择器：h1 + p</li>
          <li>子选择器：ul > li</li>
          <li>后代选择器：li a</li>
          <li>属性选择器（a[rel = "external"]）</li>
          <li>伪类选择器（a:hover, li:nth-child）</li>
        </ul>
        <span>优先级计算规则：</span>
        <ul>
          <li>最近的祖先样式比其他祖先样式优先级高</li>
          <li>内联样式>id选择器>类选择器>属性选择器= 伪类选择器>标签选择器=伪元素选择器</li>
          <li>!important拥有最高的优先级</li>
        </ul>
      </div>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../assets/light.png" />
        </div>
        <p>6.html引入css的方式</p>
      </div>
      <div>
        <p>①内敛方式：直接在html标签中的style属性添加css</p>
        <code style="margin-left:20px">&lt;div style="background:red" &gt;&lt;/div&gt;</code>
        <p>②嵌入方式：在html头部&lt;style&gt;标签中书写css代码</p>
        <el-card>
          <pre>
          &lt;head&gt;
            &lt;style&gt;
              .content{
                background:color;
              }
            &lt;/style&gt;
          &lt;head&gt;
        </pre>
        </el-card>
        <p>③链接方式：使用html头部&lt;head&gt;标签引入外部的CSS文件</p>
        <el-card>
          <pre>
          &lt;head&gt;
            &lt;link rel="stylesheet" type="text/css" hreft="style.css"&gt;
          &lt;/head&gt;
          </pre>
        </el-card>
        <p>④导入方式：使用CSS规则引入外部CSS文件</p>
        <el-card>
          <pre>
          &lt;style&gt;
            @import url(style.css);
          &lt;/style&gt;
          </pre>
        </el-card>
      </div>
      <div>
        <p>比较引入css文件的link方式和@import方式</p>
        <ul>
          <li>link方式是html标签，除了可以引入css样式以外，还可以定义rss等其他事务，而@import是css提供的，只能引入css；</li>
          <li>link在页面加载时候就一同加载，@import是在页面加载结束之后加载；</li>
          <li>link是html标签，不需要兼容；@import需要ie5以上才可以使用。</li>
        </ul>
      </div>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../assets/light.png" />
        </div>
        <p>7.常见单位</p>
      </div>
      <ul>
        <li>px:绝对定位，页面按照精准像素显示；</li>
        <li>em:相对定位，基准点为父节点字体大小，如果自身定义了font-size，则按照自身计算；</li>
        <li>rem:相对定位，相对根节点html的字体大小来计算；</li>
        <li>vw:视窗宽度，1vw等于视窗宽度1%；</li>
        <li>vh:视窗高度，1vh等于视窗高度1%；</li>
        <li>vmin:vw和vh中较小的那个；</li>
        <li>vmax:vw和vh中较大的那个；</li>
        <li>%:百分比</li>
      </ul>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../assets/light.png" />
        </div>
        <p>8.display有哪些值</p>
      </div>
      <ul>
        <li>inline;内联（默认）</li>
        <li>none;隐藏</li>
        <li>block;块显示</li>
        <li>table;表格显示</li>
        <li>list-item；项目列表</li>
        <li>inline-block；内联块</li>
        <li>flex；弹性布局</li>
        <li>grid；网格布局</li>
      </ul>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../assets/light.png" />
        </div>
        <p>9.display:none和visibility:hidden区别</p>
      </div>
      <ul>
        <li>display:none不占据空间，元素不存在，但仍存在文档对象模型树中；visibility:hidden占据空间，元素存在，在渲染树中存在；</li>
        <li>display:none会触发reflow回流进行渲染，visibility:hidden只会触发重绘，不进行渲染；</li>
        <li>
          display:none不是继承属性，元素及其子元素都会消失；visibility:hidden的visibility是继承属性
          若子元素使用visibility:visible那么子元素会显示。
        </li>
        <li>读屏器不会读取display:none内容，而会读取visibility:hidden的元素内容。</li>
      </ul>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../assets/light.png" />
        </div>
        <p>10.rgba和opacity透明度有何不同？</p>
      </div>
      <p>rgba只作用于元素本身的颜色或背景颜色，不影响内容；</p>
      <p>opacity不仅作用域自身颜色和背景色，也作用于元素内容的透明度。</p>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../assets/light.png" />
        </div>
        <p>11.position有哪些值？</p>
      </div>
      <ul>
        <li>static:默认值，没有定位，元素出现在正常的文档流中，忽略top、bottom、left、right、z-index声明；</li>
        <li>
          relative:生成相对定位的元素，相对于其正常位置定位，一般在子元素设置absolute定位时，给父元素设置relative；
          元素的位置通过top、bottom、right、left控制；其值的定位起点是父元素左上角。
          可以用这种方法实现：一个div固定在另一个div的某一侧；
        </li>
        <li>
          absolute:生成绝对定位元素，相对于static定位以外的第一个父元素进行定位；
          元素的位置通过top、bottom、right、left控制；top、left定位起点是父元素左上角。right、bottom为右下角；
        </li>
        <li>
          fixed:生成绝对定位元素，相对于浏览器窗口进行定位，和absolute区别在于fixed不会跟随屏幕滚动；
          元素的位置通过top、bottom、right、left控制；top、left定位起点是父元素左上角。right、bottom为右下角；
        </li>
        <li>inherit：规定从父元素继承postion属性的值；</li>
        <li>sticky：粘性定位，他主要用于在对scoll事件的监听上。</li>
      </ul>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../assets/light.png" />
        </div>
        <p>
          <el-button type="text" @click="toCenter">12.居中</el-button>
        </p>
      </div>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../assets/light.png" />
        </div>
        <p>13.为什么引用浮动？</p>
      </div>
      <div>普通文档流中每个元素的位置都收到了限制，为了丰富页面效果，引入了浮动</div>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../assets/light.png" />
        </div>
        <p>14.浮动的工作原理</p>
      </div>
      <div>浮动元素脱离文档流，不占据空间。</div>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../assets/light.png" />
        </div>
        <p>15.浮动引起的问题</p>
      </div>
      <div>①父元素的高度无法撑开，影响父元素同级元素；</div>
      <div>②与浮动元素同级的非浮动元素会跟随其后；</div>
      <div>③若非第一个元素浮动，则该元素之前的元素也要一同浮动，否则会影响显示结构。</div>
      <el-card>
        <span>浮动带来的问题：如下图，当big和small两个div设置float后，包裹big和small的div高度为0</span>
        <!-- <div class="parentFloat clearfix"> -->
        <div class="parentFloat">
          <div class="bigFloat">big</div>
          <div class="smallFloat">small</div>
          <!-- <div class="clearFloat">额外标签法</div> -->
        </div>
        <div class="footerFloat">footer</div>
      </el-card>
      <el-card>
        <span>代码如下：</span>
        <pre>
        &lt;div class="parentFloat"&gt;
          &lt;div class="bigFloat"&gt;big&lt;/div&gt;
          &lt;div class="smallFloat"&gt;small&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="footerFloat"&gt;footer&lt;/div&gt;
        .parentFloat {
          border: 2px solid black;
        }
        .bigFloat {
          width: 100px;
          height: 100px;
          background-color: pink;
          float: left;
        }
        .smallFloat {
          width: 300px;
          height: 30px;
          float: left;
          background-color: yellowgreen;
        }
        .footerFloat {
          width: 500px;
          height: 70px;
          background-color: purple;
        }
        </pre>
      </el-card>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../assets/light.png" />
        </div>
        <p>16.清除浮动的方式</p>
      </div>
      <div>①父级div定义height</div>
      <div style="margin-left:20px">原理：父级div手动定义height，就解决了父级div无法自动获取到高度的问题</div>
      <div style="margin-left:20px">优缺点：代码少，但只适用于高度固定的布局。</div>
      <el-card>
        <pre>
        .parentFloat {
          border: 2px solid black;
          height: 130px;
        }
        </pre>
      </el-card>
      <div>②额外标签法</div>
      <div style="margin-left:20px">原理：添加一个空div，利用css提供的clear:both清除浮动，让父级div能自动获取到子盒子最高高度。</div>
      <el-card>
        <pre>
        &lt;div class="parentFloat"&gt;
          &lt;div class="bigFloat"&gt;big&lt;/div&gt;
          &lt;div class="smallFloat"&gt;small&lt;/div&gt;
          &lt;div class="clearFloat"&gt;额外标签法&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="footerFloat"&gt;footer&lt;/div&gt;
        .clearFloat {
          clear: both;
        }
        </pre>
      </el-card>
      <div>③父级添加overflow属性，通过触发BFC方式实现清除浮动。</div>
      <el-card>
        <pre>
        .parentFloat{
          overflow: hidden;
        }
        </pre>
      </el-card>
      <div>④使用after伪元素清除浮动</div>
      <el-card>
        <pre>
        .clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
          content: "";
          display: block;
          height: 0;
          clear:both;
          visibility: hidden;
        }
        .clearfix{
            *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
        }
        &lt;div class="parentFloat clearfix"&gt;
          ......
        &lt;/div&gt;
        </pre>
      </el-card>
      <div>⑤使用before和after双伪元素清除浮动</div>
      <el-card>
        <pre>
        .clearfix:after,.clearfix:before{
          content: "";
          display: table;
        }
        .clearfix:after{
          clear: both;
        }
        .clearfix{
          *zoom: 1;
        }
        </pre>
      </el-card>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../assets/light.png" />
        </div>
        <p>17.简单讲一下伪元素和伪类</p>
      </div>
      <p>①伪元素和伪类定义</p>
      <p class="fontIndent">
        伪类：用于当已有元素处于的某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。
        比如说，当用户悬停在指定的元素时，我们可以通过:hover来描述这个元素的状态。
        虽然它和普通的css类相似，可以为已有的元素添加样式，但是它只有处于dom树无法描述的状态下才能为元素添加样式，所以将其称为伪类。
      </p>
      <br />
      <p class="fontIndent">
        伪元素：用于创建一些不在文档树中的元素，并为其添加样式。
        比如说，我们可以通过:before来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。
      </p>
      <el-divider></el-divider>
      <p>②伪元素和伪类特点</p>
      <ul>
        <li>伪元素和伪类都不会出现在源文档或者文档树中</li>
        <li>伪类允许出现在选择器的任何位置，而一个伪元素只能跟在选择器的最后一个简单选择器后面</li>
        <li>伪元素名和伪类名都是大小写不敏感的</li>
        <li>有些伪类是互斥的，而其它的可以同时用在一个元素上。（在规则冲突的情况下，常规层叠顺序决定结果）</li>
      </ul>
      <el-divider></el-divider>
      <span>伪元素和伪类包含的种类详见：</span>&nbsp;&nbsp;
      <el-button type="text" @click="toPseudoElement">Click Me</el-button>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../assets/light.png" />
        </div>
        <p>18.CSS3增加哪些特性</p>
      </div>
      <ol type="a" style="margin-left:20px">
        <li>
          圆角：
          <code>border-radiu: 8px;</code>
        </li>
        <li>伪类、伪元素</li>
        <li>
          文字渲染:
          <code>text-decoration,(default:currentcolor,solid none)</code>
        </li>
        <li>透明色、透明度(opacity)</li>
        <li>旋转(transform)|rotate、scale、skew、translate</li>
        <li>动画(animation)和过渡效果(transition)</li>
        <li>
          阴影：
          <code>box-shadow,text-shadow</code>
        </li>
        <li>新的布局方式：flex(弹性布局)、grid(网格布局)</li>
        <li>
          边框图片：
          <code>border-image</code>
        </li>
        <li>
          媒体查询:
          <code>@media</code>
        </li>
        <li>线性渐变(gradient)</li>
        <li>
          多背景:
          <code>background-image可以设置多个url或linear-gradient</code>
        </li>
      </ol>
    </div>
    <div>
      <div style="display:flex">
        <div style="margin:4px 7px 0px 0px">
          <img src="../../assets/light.png" />
        </div>
        <p>
          19.用Css创建三角形
          <el-button type="text" @click="toCreateTriangle">Click Me</el-button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toBFC() {
      let obj = {};
      obj.catalogNum = "03";
      obj.index = "03-1";
      obj.title = "视觉格式化模型";
      this.$emit("transValue", obj);
    },
    toCenter() {
      let obj = {};
      obj.catalogNum = "02";
      obj.index = "02-1";
      obj.title = "水平居中";
      this.$emit("transValue", obj);
    },
    toPseudoElement() {
      window.open("https://www.jianshu.com/p/8b610fdf0d48");
      // window.location.href = 'http://www.baidu.com'  //当前页面打开
    },
    toCreateTriangle() {
      window.open("https://www.cnblogs.com/chengxs/p/11406278.html");
    },
  },
};
</script>

<style>
.topDiv,
.bottomDiv {
  width: 200px;
  height: 100px;
  text-align: center;
  line-height: 100px;
}
.topDiv {
  margin-bottom: 10px;
  border: 1px solid black;
}

.bottomDiv {
  margin-top: 10px;
  border: 1px solid pink;
}

.parentFloat {
  border: 2px solid black;
  /* 方法一，为最外层div添加高度 */
  /* height: 130px; */
  /* 方法三，为父元素添加overflow属性，利用BFC实现清除浮动。 */
  /* overflow: hidden; */
}

.bigFloat {
  width: 100px;
  height: 100px;
  background-color: pink;
  float: left;
}
.bigFloat::selection {
  /* color: red; */
}
.smallFloat {
  width: 300px;
  height: 30px;
  float: left;
  background-color: yellowgreen;
}

.footerFloat {
  width: 500px;
  height: 70px;
  background-color: purple;
}

/* 方法二：额外标签法 */
q .clearFloat {
  clear: both;
}

/* 方法四：伪元素 */
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  border: 10px solid pink;
}

/* 方法五：使用before和after双伪元素清除浮动 */
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1;
}
</style>