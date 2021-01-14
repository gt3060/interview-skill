<template>
    <div class="vueDirective">
        <text-field :title="titleContent[0].title"
                    :content="titleContent[0].content"></text-field>
        <text-field content="看下面这个例子：点击按钮触发数据data的改变，与此同时再watch中监听数据的变化："></text-field>
        <text-field :content="dataA" />
        <text-field content="初始数据如下：" />
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        data(){<br/>
            return{<br/>
                a: 1,<br/>
                b: {<br/>
                    c: 1,<br/>
                },<br/>
            }<br/>
        }
            </pre>
        </div>
        <el-button @click="handleChangeData"
                   type="text">改变a</el-button>
        <el-button type="text"
                   @click="handleRefresh('a')">刷新</el-button>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        &lt;script&gt;<br/>
        watch: {<br/>
            a: {<br/>
                handler(newVal, oldVal) {<br/>
                    console.log(newVal, oldVal);  // 2 1<br/>
                },<br/>
            },<br/>
        },<br/>
        &lt;/script&gt;
            </pre>
        </div>
        <text-field content="下面看看更改对象b中的属性c的值来看看效果"></text-field>
        <text-field :content="dataC" />
        <el-button @click="handleChangeDataC"
                   type="text">改变c</el-button>
        <el-button type="text"
                   @click="handleRefresh('c')">刷新</el-button>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        &lt;script&gt;<br/>
        watch: {<br/>
            b: {<br/>
                handler(newVal, oldVal) {<br/>
                    console.log(newVal, oldVal);  // <br/>
                },<br/>
            },<br/>
        },<br/>
        &lt;/script&gt;
            </pre>
        </div>
        <text-field content="可以看到并没有监听到b的数据，原因是：普通的watch监听无法监听到对象或数组的变化，需要用到deep属性："></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        &lt;script&gt;<br/>
        watch: {<br/>
            b: {<br/>
                handler(newVal, oldVal) {<br/>
                    console.log(newVal, oldVal);  //3, 1 <br/>
                },<br/>
                deep: true, <br/>
            },<br/>
        },<br/>
        &lt;/script&gt;
            </pre>
        </div>
        <text-field :title="titleContent[1].title"
                    :content="titleContent[1].content"></text-field>
        <el-button type="text"
                   @click="handleWatchParent">监听父组件变化</el-button>
        <el-button type="text"
                   @click="handleRefreshWatch">刷新</el-button>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        Child.vue:<br/>
        &lt;script&gt;<br/>
        watch: {<br/>
            title: {<br/>
                handler(newVal, oldVal) {<br/>
                    console.log(newVal, oldVal); // 改变title值后注意控制台 2.子组件使用watch监听父组件变化<br/>
                },<br/>
                deep: true,<br/>
            },<br/>
        },<br/>
        &lt;/script&gt;
            </pre>
        </div>
    </div>
</template>

<script>
import TextField from '../../components/textField.vue';
import { highlightCode } from '../../utils/common';

export default {
    data() {
        return {
            titleContent: [
                {
                    title: '1.Vue中Watch的作用？',
                    content:
                        'watch作用可以监控一个值的变化，并调用因为变化执行的方法，可以通过watch动态改变关联状态',
                },
                {
                    title: '2.子组件使用watch监听父组件变化',
                    content: '',
                },
            ],
            a: 1,
            b: {
                c: 1,
            },
        };
    },
    mounted() {
        highlightCode();
    },
    watch: {
        a: {
            handler(newVal, oldVal) {
                console.log('cccc', newVal, oldVal);
            },
        },
        b: {
            handler(newVal, oldVal) {
                console.log('bbbb', newVal, oldVal);
            },
            deep: true,
        },
    },

    computed: {
        dataA: function () {
            return '数据a：' + this.a;
        },

        dataC: function () {
            return '数据c：' + this.b.c;
        },
    },

    created() {},
    methods: {
        initData(data) {
            if (data === 'a') {
                this.a = 1;
                return;
            }
            if (data === 'c') {
                this.b = {
                    c: 1,
                };
            }
        },
        handleChangeData() {
            this.a = 2;
        },
        handleChangeDataC() {
            this.b.c = 3;
        },
        handleRefresh(data) {
            this.initData(data);
        },
        handleWatchParent() {
            this.titleContent[1].title = '改变title值后注意控制台';
        },
        handleRefreshWatch() {
            this.titleContent[1].title = '子组件使用watch监听父组件变化';
        },
    },
    components: {
        TextField,
    },
};
</script>

<style scoped>
.fontSize {
    font-size: 25px;
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
