<template>
    <div class="vueDirective">
        <text-field :title="titleContent[0].title"
                    :content="titleContent[0].content"></text-field>
        <text-field :title="titleContent[1].title"
                    :content="titleContent[1].content"></text-field>
        <text-field onlyContent="具体使用如下："></text-field>
        <div>原值：{{oldDate}}&nbsp;&nbsp;&nbsp;&nbsp;新值：{{newDate}}</div>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        &lt;div&gt;{ {oldDate} }&lt;/div&gt;<br/>
        &lt;div&gt;{ {newDate} }&lt;/div&gt;<br/>
        data(){<br/>
            return{<br/>
                oldDate: '2020/12/16'<br/>
            }<br/>
        },<br/>
        computed:{<br/>
            newDate: function(){<br/>
                let dateArr = this.oldDate.split('/');<br/>
                let dateStr =<br/>
                dateArr[0] + '年' + dateArr[1] + '月' + dateArr[2] + '日';<br/>
                return dateStr;<br/>
            }<br/>
        }
            </pre>
        </div>
        <text-field onlyContent="这里值得注意的是：如果当模板中并没有使用计算属性，即使依赖的属性值发生变化，不会走computed"></text-field>
        <text-field :title="titleContent[2].title"
                    :content="titleContent[2].content"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        newMessage: {<br/>
            get: function() {<br/>
                console.log('计算属性', this.message)<br/>
                return this.message<br/>
            },<br/>
            set: function(newVal) {<br/>
                console.log('newVal', newVal)<br/>
            }<br/>
        }
            </pre>
        </div>
        <text-field onlyContent="在这里顺便提一下methods中的$event参数：可以在控制台查看$event打印内容"></text-field>
        <el-button @click="btnClick(2,$event)"
                   type="primary">$event</el-button>
    </div>
</template>

<script>
import { highlightCode } from '../../assets/js/common';
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
                    title: '1.computed定义',
                    content:
                        '当其依赖的属性值发生变化时候，计算属性会重新计算，反之，则使用缓存中的属性值。',
                },
                {
                    title: '2.为什么使用computed?',
                    content: `首先从理解上来看，使用computed对于读模板上来说更容易理解，不需要存放太多逻辑语句；
                                其次，从性能上来看，当其依赖的属性值发生变化时候，计算属性会重新计算，否则，则使用缓存中的属性值。`,
                },
                {
                    title: '3.computed的getter和setter',
                    content: `一般情况下，单纯对依赖属性值的获取和拼接转换等操作没有setter操作，只预设了getter
                            只有当赋值给计算属性的时候，将调用setter函数。多用于在模板组件中需要修改计算属性自身的值的时候。
                            如果只单纯改变了计算属性，那么，就只是单单的走了setter的函数，而没有走getter函数。`,
                },
            ],
            oldDate: '2020/12/16',
            message: 'messageStr',
        };
    },
    computed: {
        newDate: function () {
            let dateArr = this.oldDate.split('/');
            let dateStr =
                dateArr[0] + '年' + dateArr[1] + '月' + dateArr[2] + '日';
            return dateStr;
        },
    },
    methods: {
        btnClick(data, dataTwo) {
            console.log('----', data, dataTwo);
        },
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
