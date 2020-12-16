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
            <p>
                自定义指令生命周期包括bind、inserted、update、componentUpdated、unbind，详解如下：
            </p>
            <div class="labelMarginLeft">
                <ol type="a">
                    <li>
                        bind：只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个绑定时执行一次的初始化动作；
                    </li>
                    <li>inserted：被绑定元素插入到父节点时调用；</li>
                    <li>
                        update：被绑定于元素所在的模板更新时调用，而无论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。
                    </li>
                    <li>componentUpdated：被绑定元素所在模板完成一次更新周期时调用。</li>
                    <li>unbind：只调用一次，指令与元素解绑时调用。</li>
                </ol>
            </div>
            <p>代码如下：</p>
        </div>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        Vue.directive("gtColor", {<br/>
          bind: function(el, binding){<br/>
            el.style = "color: " + binding.value;<br/>
          },<br/>
          inserted:function(){//绑定到节点<br/>
            console.log('2 - inserted');<br/>
          },<br/>
          update:function(){//组件更新<br/>
            console.log('3 - update');<br/>
          },<br/>
          componentUpdated:function(){//组件更新完成<br/>
            console.log('4 - componentUpdated');<br/>
          },<br/>
          unbind:function(){//解绑<br/>
            console.log('1 - bind');<br/>
          }<br/>
        })<br/>
      </pre>
        </div>
    </div>
</template>

<script>
import { highlightCode } from '../../assets/js/common';

export default {
    data() {
        return {
            colorValue: 'green',
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
