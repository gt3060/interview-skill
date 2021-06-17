<template>
  <div>
    <text-field
      catalog
      title="Vue-Vue.directive"
      content="除了核心功能默认的内置指令（v-model、v-show），Vue也允许自定义指令，自定义指令大多用于操作
              底层dom节点，可以全局注册自定义指令也可以局部自定义指令，具体实现如下"
      fontSizeType="middle"
    >
    </text-field>
    <text-field
      content="全局注册：第二个参数也可以是一个对象，对象中每个属性就是Vue.directive的钩子函数，
                        钩子函数有哪些之后慢慢记录。"
    />
    <div class="codeBorder fontCodeStyle">
      <pre class="codeBorder">
    Vue.directive('directiveName', function(el){<br/>
        console.log(el);<br/>
      }<br/>
    )
      </pre>
    </div>
    <text-field content="局部注册：" />
    <div class="codeBorder fontCodeStyle">
      <pre class="codeBorder">
    // 直接在组件内部写directive属性：<br/>
    directive:{<br/>
      directiveName:{<br/>
        inserted:function(el){<br/>
          console.log(el)<br/>
        }<br/>
      }<br/>
    }
      </pre>
    </div>
    <text-field
      content="全局注册了一个globalEvent以及局部注册了一个eventFocus，下面第一排两个按钮是额外引入的一个组件，
                        第二排两个按钮是就在当前组件进行引入，打开控制台即可发现，引入组件的按钮报错（Failed to resolve directive: eventFocus）
                        即局部注册其他组件无法看到。"
    />
    <testDirecive />
    <el-divider></el-divider>
    <el-button v-eventFocus="eventData">eventFocus</el-button>
    <el-button v-globalEvent="globalData">globalEvent</el-button>
    <el-divider></el-divider>
    <text-field content="接下来是钩子函数：" />
    <text-field
      content="bind/unbind：指令第一次绑定/解绑元素时调用，这里可以进行一次性的赋值；"
    />
    <text-field content="inserted：被绑定元素插入父节点时调用；" />
    <text-field content="updated：所在组件node更新调用；" />
    <text-field
      content="componentUpdated：指令所在组件node及子node全部更新调用。"
    />
    <text-field
      content="钩子函数参数，一般用到的是前两个，el/binding，其中el指所绑定的元素可以直接操作node，
                        binding是一个对象，包括name（指令名）、value（指令绑定的值）、expression（字符串形式的指令表达式与value区别在于value会将绑定值进行计算）、
                        oldValue（绑定的前一个值，只update和componentUpdated钩子中可用）、arg（绑定指令传的参数），
                        此外还有两个不常用的vnode（vue生成的虚拟节点）以及oldVnode(上一个虚拟dom节点)。"
    />
  </div>
</template>

<script>
import { highlightCode } from "../../../utils/common";
import TextField from "../../../components/textField.vue";
import testDirecive from "./testDirecive.vue";
import Vue from "vue";
Vue.directive("globalEvent", {
  inserted: function (el, data) {
    console.log(el, data.value);
  },
});

export default {
  data() {
    return {
      cssList: {
        listTitle: "",
        routeList: [
          {
            data: "",
          },
        ],
      },
      eventData: "234",
      globalData: "123",
    };
  },
  directives: {
    eventFocus: {
      // 指令定义
      inserted: function (el, data) {
        console.log(el, data.value);
      },
    },
  },
  methods: {
    jumpTo() {},
  },
  components: {
    TextField,
    testDirecive,
  },
  mounted() {
    highlightCode();
  },
};
</script>

<style scoped lang='less'>
.codeBorder {
  width: 100%;
  border-radius: 10px;
}
.commonStyle {
  margin-top: 20px;
}
</style>
