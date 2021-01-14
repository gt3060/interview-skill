<template>
    <div class="vueDirective">
        <text-field :title="titleContent[0].title"></text-field>
        <text-field content="首先，先构建三个组件并导入注册"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        import ComponentA from '../../components/ComponentA.vue';<br/>
        import ComponentB from '../../components/ComponentB.vue';<br/>
        import ComponentC from '../../components/ComponentC.vue';<br/>
        components: {<br/>
            TextField,<br/>
            ComponentA,<br/>
            ComponentB,<br/>
            ComponentC,<br/>
        },
            </pre>
        </div>
        <text-field content="接着，利用component标签的is属性，绑定标签数据"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        &lt;components :is="componentData" /&gt;<br/>
        data(){<br/>
            return{<br/>
                componentData:'ComponentA'<br/>
            }<br/>
        }
            </pre>
        </div>
        <text-field content="最后我们通过点击按钮实现渲染不同的组件："></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        &lt;el-button @click="handleClick"&gt;改变&lt;/el-button&gt;<br/>
        methods:{<br/>
            handleClick(){<br/>
                this.componentData = this.componentData === 'ComponentA'?<br/>
                     'ComponentB':this.componentData === 'ComponentB' ? <br/>
                     'ComponentC': 'ComponentA'<br/>
            }<br/>
        }
            </pre>
        </div>
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
                    title: 'Component标签的使用',
                    content: `第一次知道有这个标签，竟然不是在自学vue，而是在工作中项目开发，看到这个标签有点懵，然后查了
                        一下才知怎么用，他的用途其实就是可以动态绑定组件，根据条件的不同渲染不同组件，具体如下：`,
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

.labelMarginLeft {
    margin-left: 50px;
}

.vueDirective {
    padding: 50px;
    background-color: #ecfafe;
}
</style>
