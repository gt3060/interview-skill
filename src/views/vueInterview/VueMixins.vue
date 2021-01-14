<template>
    <div class="vueDirective">
        <text-field :title="titleContent[0].title"
                    :content="titleContent[0].content"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        let myMixins = {<br/>
            data(){<br/>
                return{}<br/>
            },<br/>
            methods:{<br/>
                getMixinsMethods(){<br/>
                    console.log("-----Mixins")<br/>
                }<br/>
            }<br/>
        }<br/>
        // 组件中调用myMixins<br/>
        import myMixins from "./common";<br/>
        exports default{<br/>
            mixins: [myMixins]<br/>
        }
            </pre>
        </div>
        <text-field :title="titleContent[1].title"
                    :content="titleContent[1].content"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        // mixins<br/>
        data(){<br/>
            return{<br/>
                a: 1,<br/>
                b: 2<br/>
            }<br/>
        },<br/>
        components:{<br/>
            componentsA,<br/>
        }<br/>
        // 组件数据<br/>
        data(){<br/>
            return{<br/>
                b: 3,<br/>
                c: 4<br/>
            }<br/>
        },<br/>
        components:{<br/>
            componentsB<br/>
        }<br/>
        // 最终在组件数据打印data数据和组件类型包括：<br/>
        // data：a:1, b: 3, c: 4; components: componentsA, componentsB
            </pre>
        </div>
        <text-field content="而针对钩子函数的合并，如果遇到冲突，因此都将被调用，在执行顺序上，先执行混入对象的钩子函数再执行组件自身的方法，例如："></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        // mixins<br/>
        methods:{<br/>
            functionA(){console.log("AAA")},<br/>
        }<br/>
        // 组件数据<br/>
        methods:{<br/>
            functionB(){console.log("BBB")},<br/>
            functionA(){console.log("BBB-AAA")}<br/>
        }<br/>
        // 最终在组件执行的方法按顺序执行为：<br/>
        // functionA、 functionB、 functionA
            </pre>
        </div>
        <text-field :title="titleContent[2].title"
                    :content="titleContent[2].content"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        Vue.mixin({<br/>
            updated:function(){<br/>
                console.log('我是全局被混入的');<br/>
            }<br/>
        })
            </pre>
        </div>
        <text-field :title="titleContent[3].title"
                    :content="titleContent[3].content"></text-field>
    </div>
</template>

<script>
import { highlightCode } from '../../utils/common';
import TextField from '../../components/textField.vue';
export default {
    components: {
        TextField,
    },
    mounted() {
        highlightCode();
    },
    data() {
        return {
            titleContent: [
                {
                    title: '1.Mixin的作用',
                    content:
                        '混入（Mixin）用来分发Vue组件中可复用功能，当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项，例如：',
                },
                {
                    title: '2.选项合并',
                    content:
                        '当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行合并，其中数据对象、值为对象的选项（components/methods）将合并为同一个对象，如果有冲突，则以组件选项为优先选择，例如：',
                },
                {
                    title: '3.全局引入',
                    content:
                        '我们也可以定义全局的混入，这样在需要这段代码的地方直接引入js。',
                },
                {
                    title: '4.Extends扩展选项',
                    content: `Extends和Mixins相似，通过外部增加对象的形式，对构造器进行扩展，
                        用法等同Mixins，不过，值得注意的是，从执行顺序上来看，Extends>Mixins>组件；
                        并且，extends只能暴露一个对象，多个不执行，但是Mixins可以暴露多个对象（mixins: [MixinsDemo1, MixinsDemo2]）。`,
                },
            ],
        };
    },
};
</script>

<style scoped>
.vueDirective {
    padding: 50px;
    background-color: #ecfafe;
}

.codeBorder {
    width: 80%;
    border-radius: 10px;
}

.fontCodeStyle {
    line-height: 24px;
}
</style>
