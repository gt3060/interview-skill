<template>
  <div class="vueDirective">
    <div class="fontStyle">
      <p class="fontSize">1.什么是全局API？</p>
      <p class="fontIndent">
        全局API并不在构造器里，而是先声明全局变量或者直接在Vue上定义一些新功能，Vue内置了一些全局API，说的简单些就是，在构造器外部用Vue提供给我们的API函数来定义新的功能。
      </p>
      <p class="fontSize">2.自定义指令</p>
      <p>
        利用Vue.directive()方法，自定义vue指令，例如下面示例，在data中给定字体color，然后利用自定义属性进行改变
        。效果图如下：
      </p>
      <p v-gtColor="colorValue">{{ number }}</p>
      <p>代码如下：</p>
    </div>
    <div class="codeBorder fontCodeStyle">
      <pre class="codeBorder">
        Vue.directive("gtColor", function(el, binding, vnode){<br/>
          console.log(el, binding, vnode);<br/>
          el.style = "color: " + binding.value;<br/>
        })<br/>
        ------------------------------------------<br/>
        data(){<br/>
          return{<br/>
            colorValue: "green",<br/>
            number: 999,<br/>
          }<br/>
        }
      </pre>
    </div>
    <div class="fontStyle">
      <p>自定义指令中传递的三个参数：</p>
      <div class="labelMarginLeft">
        <ol type="a">
          <li>el：指令所绑定的元素，可以用来直接操作DOM</li>
          <li>
            binging：一个对象，包含指令很多信息（value、name、expression）
          </li>
          <li>vnode：Vue编译生成的虚拟DOM</li>
        </ol>
      </div>
    </div>
    <div class="fontStyle">
      <p class="fontSize">3.自定义指令生命周期</p>
    </div>
  </div>
</template>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/tomorrow-night-eighties.css";

const highlightCode = () => {
  const block = document.querySelectorAll("pre");
  hljs.configure({ useBR: true });
  block.forEach((el) => {
    hljs.highlightBlock(el);
  });
};
export default {
  data() {
    return {
      colorValue: "green",
      number: 999,
    };
  },
  mounted() {
    highlightCode();
  },
};
</script>

<style scoped>
.vueDirective {
  padding: 50px;
  background-color: #ecfafe;
}

.fontSize {
  font-size: 25px;
}

.codeBorder {
  border-radius: 10px;
}

.fontCodeStyle {
  line-height: 24px;
}

.labelMarginLeft {
  margin-left: 30px;
}
</style>