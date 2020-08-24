<template>
  <div class="fontStyle">
    <div style="display:flex">
      <div style="margin:4px 7px 0px 0px">
        <img src="../../../assets/light.png" />
      </div>
      <p>Css3过渡：</p>
    </div>
    <p class="fontIndent">
      CSS3过渡是元素从一种样式逐渐改变为另一种样式的效果，要实现这一点，必须规定两项内容：
      指定要添加效果的css属性和指定效果的持续时间。
    </p>
    <p>语法如下：</p>
    <code>transition: css属性，花费时间，效果曲线（default：ease），延迟时间（default：0）</code>
    <div style="display: flex;">
      <div style="margin:4px 7px 0px 0px">
        <img src="../../../assets/example.png" style="margin-top:4px" />
      </div>
      <p>&nbsp;示例一</p>
    </div>
    <div>
      <code>{ transition: width, .5s, ease, .2s; }</code>
      <el-card>
        <div class="transitionDemoStyle">鼠标滑入产生过渡效果</div>
      </el-card>
    </div>
    <div style="display: flex;">
      <div style="margin:4px 7px 0px 0px">
        <img src="../../../assets/example.png" style="margin-top:4px" />
      </div>
      <p>&nbsp;示例二</p>
    </div>
    <div>
      <div>将所有属性从原始值到指定值的一个过渡</div>
      <code>{ transition: all, 2s; }</code>
      <el-card>
        <div class="transitionDemo2Style">鼠标滑入产生过渡效果</div>
      </el-card>
    </div>
    <span>transition的四个属性值可以分开书写：</span>
    <ul>
      <li>
        <code>transition-property: width;</code>
      </li>
      <li>
        <code>transition-duration: 1s;</code>
      </li>
      <li>
        <code>transition-timing-function: linear;</code>
      </li>
      <li>
        <code>transition-delay: 2s</code>
      </li>
    </ul>
    <div style="display: flex;">
      <div style="margin:4px 7px 0px 0px">
        <img src="../../../assets/example.png" style="margin-top:4px" />
      </div>
      <p>&nbsp;示例三</p>
    </div>
    <el-card>
      <div class="demo-hover demo-ul ul-transition t_c">
        <ul class="fllil">
          <li>
            <a href="javascript:;">html</a>
            <ul>
              <li>
                <a href="#">div</a>
              </li>
              <li>
                <a href="#">h1</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;">js</a>
            <ul>
              <li>
                <a href="#">string</a>
              </li>
              <li>
                <a href="#">array</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;">css3</a>
            <ul>
              <li>
                <a href="#">transition</a>
              </li>
              <li>
                <a href="#">animation</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;">框架</a>
            <ul>
              <li>
                <a href="#">vue</a>
              </li>
              <li>
                <a href="#">react</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <el-button @click="seeCompleteCode" type="text">完整代码</el-button>
      <div v-if="isModal === true">
        <code>
          <pre>
&lt;div class="demo-hover demo-ul ul-transition t_c"&gt;
  &lt;ul class="fllil"&gt;
    &lt;li&gt;
      &lt;a href="javascript:;"&gt;html&lt;/a&gt;
      &lt;ul&gt;
        &lt;li&gt;
          &lt;a href="#"&gt;div&lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
          &lt;a href="#"&gt;h1&lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
.demo-ul {
  margin-bottom: 100px;
}
.demo-ul li {
  list-style-type: none;
  padding: 0 10px;
  width: 100px;
  background: #f90;
  position: relative;
  float: left;
}
.demo-ul li a {
  display: block;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.demo-ul li ul {
  position: absolute;
  width: 100%;
  top: 40px;
  left: 0;
  transform: scaleY(0);
  overflow: hidden;
  margin-left: -0px;
}
.ul-transition ul {
  transform-origin: 0 0;
  transition: all 0.5s;
}
.demo-ul li:hover ul {
  transform: scaleY(1);
}
.demo-ul li ul li {
  float: none;
  background: #0099ff;
}
        </pre>
        </code>
        <!-- <seeCodeModal :isModal="isModal" @closeModal="changeValue"></seeCodeModal> -->
      </div>
    </el-card>
  </div>
</template>

<script>
// import seeCodeModal from "../../../components/seeCodeModal";
export default {
  data() {
    return {
      isModal: false,
    };
  },
  methods: {
    seeCompleteCode() {
      this.isModal = !this.isModal;
    },
    changeValue(data) {
      this.isModal = data;
    },
  },
  components: {
    // seeCodeModal,
  },
};
</script>

<style>
.transitionDemoStyle:hover {
  width: 300px;
}

.transitionDemoStyle {
  width: 100px;
  height: 75px;
  border: 1px solid black;
  transition: width, 2s;
  transition-delay: 0.2s;
}

.transitionDemo2Style {
  width: 100px;
  height: 70px;
  background-color: pink;
  transition: all 2s;
}

.transitionDemo2Style:hover {
  width: 150px;
  background-color: red;
}

.demo-ul {
  margin-bottom: 100px;
}

.demo-ul li {
  list-style-type: none;
  padding: 0 10px;
  width: 100px;
  background: #f90;
  position: relative;
  float: left;
}

.demo-ul li a {
  display: block;
  height: 40px;
  line-height: 40px;
  text-align: center;
}

.demo-ul li ul {
  position: absolute;
  width: 100%;
  top: 40px;
  left: 0;
  transform: scaleY(0);
  overflow: hidden;
  margin-left: -0px;
}

.ul-transition ul {
  transform-origin: 0 0;
  transition: all 0.5s;
}

.demo-ul li:hover ul {
  transform: scaleY(1);
}

.demo-ul li ul li {
  float: none;
  background: #0099ff;
}
</style>