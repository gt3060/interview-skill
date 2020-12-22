<template>
    <div class="vueDirective">
        <text-field :title="titleContent[0].title"
                    :content="titleContent[0].content"></text-field>
        <text-field :title="titleContent[1].title"
                    :content="titleContent[1].content"
                    fontSizeType="middle"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        npm n install vuex --save
            </pre>
        </div>
        <text-field :content="titleContent[2].content"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        import Vue from 'vue';<br/>
        import Vuex from 'vuex';<br/>
        Vue.use(Vuex)
            </pre>
        </div>
        <text-field :content="titleContent[3].content"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        const state = {<br/>
            count: 1,<br/>
        }<br/>
        export default new Vuex.Store({<br/>
            state <br/>
        })<br/>
        components:<br/>
        &lt;p&gt;{ { $store.state.count } } &lt;/p&gt;<br/>
        import store from "@/vuex/store"
            </pre>
        </div>
        <p class="pStyle"
           style="margin-top:10px">在模板中直接获取store中状态</p>
        <p class="pStyle">{{$store.state.count}}</p>
        <p class="pStyle">点击按钮，在方法中获取store状态并赋值</p>
        <el-button @click="handleGetCount"
                   type="text">获取store中count</el-button>
        <p class="pStyle"> {{count}}</p>
        <p class="pStyle"> 点击两个按钮实现将count加减：</p>
        <el-button @click="$store.commit('add')"
                   type="text">+</el-button>
        <el-button @click="$store.commit('sub')"
                   type="text">-</el-button>
    </div>
</template>

<script>
import { highlightCode } from '../../assets/js/common';
import TextField from '../../components/textField.vue';
import store from '@/store/index';
export default {
    store,
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
                    title: '1.初识vuex',
                    content: 'vuex做什么的不细说，就是管理状态，方便开发维护。',
                },
                {
                    title: '1-1.安装引入vuex',
                    content:
                        '在初始化项目时候如果使用vueCli3.x版本过程中会询问你是否安装vuex，安装命令如下：',
                },
                {
                    content: `如果利用脚手架自动安装vuex，则初始化项目之后会看到一个store文件夹，里面有index.js，文件中会自动引入和引用：`,
                },
                {
                    content: `很好，现在完全安装好了，可以开始使用，首先在store/index.js文件中初始化状态，然后在组件引用store并使用如下；`,
                },
            ],
            count: 0,
        };
    },
    methods: {
        handleGetCount() {
            this.count = store.state.count;
        },
    },
};
</script>

<style scoped>
.pStyle {
    line-height: 24px;
}
</style>
