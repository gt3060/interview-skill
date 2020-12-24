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
        <text-field :title="titleContent[4].title"
                    :content="titleContent[4].content"
                    fontSizeType="middle"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        computed: mapState(["count"])<br/>
            </pre>
        </div>
        <text-field :title="titleContent[5].title"
                    :content="titleContent[5].content"
                    fontSizeType="middle"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        // mutations.js<br/>
        sum(state, data) {<br/>
            state.count += data;<br/>
        }<br/>
        // components<br/>
        this.$store.commit('sum', 2);
            </pre>
        </div>
        <p style="margin: 15px 0px">点击求和按钮结果如下：</p>
        <p style="margin: 10px 0px">{{$store.state.count}}</p>
        <el-button @click="handleSum(3)"
                   type="text">sum</el-button>
        <text-field :content="titleContent[6].content"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        import { mapMutations } from 'vuex';<br/>
        methods:mapMutations(['sum']),<br/>
        // 如果存在其他方法，最好使用解构赋值方法引入mutations<br/>
        methods:{<br/>
            ...mapMutations(['sum'])<br/>
        }
            </pre>
        </div>
        <text-field :title="titleContent[7].title"
                    :content="titleContent[7].content"
                    fontSizeType="middle"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        // getters.js<br/>
        author: function (state) {<br/>
            return '作者是：' + state.author<br/>
        }<br/>
        // components<br/>
        import { mapMutations, mapState } from 'vuex';<br/>
        computed:{<br/>
            ...mapState(['author']),<br/>
            newAuthor() {<br/>
                return this.$store.getters.author;<br/>
            },<br/>
        }
            </pre>
        </div>
        <p style="margin:15px 0px">利用getters获取作者信息</p>
        <p style="margin:8px 0px">原始值：{{$store.state.author}}---返回最新值：{{newAuthor}}</p>
        <text-field :content="titleContent[8].content"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        import { mapMutations, mapGetters } from 'vuex';<br/>
        computed:{<br/>
            ...mapGetters(['author'])<br/>
        }
            </pre>
        </div>
        <text-field :title="titleContent[9].title"
                    :content="titleContent[9].content"
                    fontSizeType="middle"></text-field>
        <el-button @click="btnTest"
                   style="margin:20px 0px"
                   type="text">测试异步</el-button>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        import { mapActions, mapMutations, mapGetters } from 'vuex';<br/>
        methods:{<br/>
            ...mapActions(['promiseTestData']); //promiseTestData为定义的异步请求<br/>
        }
            </pre>
        </div>
        <text-field :title="titleContent[10].title"
                    :content="titleContent[10].content"
                    fontSizeType="middle"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        export default new Vuex.Store({modules:{a:moduleA}})<br/>
        // components<br/>
        $store.state.a.count; //简单引用<br/>
        // 对于actions/mutations/...可以这么引用<br/>
        methods:{<br/>
            ...mapActions('a', ['promiseTestData'])<br/>
            ...mapMutations('b', ['mapMutations'])<br/>
        }
            </pre>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
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
                    title: '初识vuex',
                    content: 'vuex做什么的不细说，就是管理状态，方便开发维护。',
                },
                {
                    title: '1.安装引入vuex',
                    content:
                        '在初始化项目时候如果使用vueCli3.x版本过程中会询问你是否安装vuex，安装命令如下：',
                },
                {
                    content: `如果利用脚手架自动安装vuex，则初始化项目之后会看到一个store文件夹，里面有index.js，文件中会自动引入和引用：`,
                },
                {
                    content: `很好，现在完全安装好了，可以开始使用，首先在store/index.js文件中初始化状态，然后在组件引用store并使用如下；`,
                },
                {
                    title: '2.state访问状态对象',
                    content:
                        '这里主要将如何将states中的状态赋值给内部对象，最常用的方法为：通过mapStates的数组来赋值',
                },
                {
                    title: '3.mutations修改状态',
                    content: `在demo中有举过一个基本的修改状态的例子，当时通过this.$store.commit("methods")来进行每次加/减1的操作，
                    那么如果每次加num（num是传值），那么应该采用：this.$store.commit("methods",num)`,
                },
                {
                    content: `在项目中通常使用this.$store.commit('')过于繁琐，就想像使用其他方法一样通过this.methods使用，则应该这么引入：`,
                },
                {
                    title: '4.getters基本用法',
                    content: `从字面意思就能看出，此js文件主要作用就是用来单纯获取过滤或加工后的状态，类似于computed，用法如下：`,
                },
                {
                    content: `同样，在项目中会采用更为简单的方式：`,
                },
                {
                    title: '5.actions异步修改状态',
                    content: `从功能上来看，actions和mutations是相同的；从用法上来看，他们区别在于actions是异步请求数据的，
                                也就是说，我们通常会将调用的接口存放在actions中，可以点击下面这个按钮然后在控制台查看，通过
                                调用异步接口获取数据。`,
                },
                {
                    title: '6.vuex的第五个参数：module模块组',
                    content: `第一次学习vue时候并没有着重看这个参数，当在现在工作上的项目用到了module我才开始详细看一下这个参数的意义；
                                我最初我以为，这个模板组是用来给store/actions/mutations/getters起别名，后来发现并不是这个样子，
                                正如module翻译过来的模板所译，其实就是将store/actions/....按照不同功能分组；其中每个模块项都包括一组
                                actions/store/....，在使用时，和对象一样，moduleName.moduleValue，具体使用如下：`,
                },
            ],
            count: 0,
        };
    },
    methods: {
        ...mapMutations(['sum']),
        ...mapActions(['promiseTestData']),
        handleGetCount() {
            this.count = store.state.count;
        },
        handleSum(num) {
            // 方法一：
            // this.$store.commit('sum', num);
            // 方法二：
            this.sum(num);
        },

        btnTest() {
            this.promiseTestData()
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    computed: {
        ...mapState(['author']),
        newAuthor() {
            return this.$store.getters.author;
        },
    },
};
</script>

<style scoped>
.pStyle {
    line-height: 24px;
}
</style>
