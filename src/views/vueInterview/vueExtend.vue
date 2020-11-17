<template>
  <div class="vueDirectiveAbsolute">
    <div class="fontStyle">
      <p class="fontSize">1.什么是Vue.extend？</p>
      <p class="fontIndent">
        Vue.extend返回的是一个扩展实例构造器，也就是预设了部分选项的Vue实例构造器，经常服务于Vue.component用于生成组件。
        可以简单理解为当在模板中遇到该组件名称作为标签的自定义元素时，会自动调用“扩展实例构造器”来生产组件实例，并挂载到自定义元素上。
      </p>
      <p>书写上，类似于组件</p>
      <p class="fontSize">2.自定义无参数标签</p>
      <p>代码如下：</p>
    </div>
    <div class="codeBorder fontCodeStyle">
      <pre class="codeBorder">
        var authorExtend = Vue.extend({<br />
          template:"&lt;p&gt;&lt;a :href='authorUrl'&gt;{ { authorName } }&lt;/a&gt;&lt;/p&gt;",<br />
          data:function(){<br />
          return{<br />
            authorName:'JSPang',<br />
            authorUrl:'http://www.jspang.com'<br />
            }<br />
          }<br />
        });
      </pre>
    </div>
    <div class="fontStyle">
      <p>
        这时html中的标签还是不起作用的，因为扩展实例构造器是需要挂载的，我们再进行一次挂载。
      </p>
    </div>
    <div class="codeBorder fontCodeStyle">
      <pre class="codeBorder">
        new authorExtend().$mount('author');
      </pre>
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
    // initComponent();
  },

  created() {},
  methods: {},
};
</script>

<style scoped>

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