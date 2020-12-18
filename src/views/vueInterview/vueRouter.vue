<template>
    <div class="vueDirective">
        <text-field :title="titleContent[0].title"
                    :content="titleContent[0].content"></text-field>
        <router-link to="/">
            <el-button type="text">跳转到home</el-button>
        </router-link>
        <text-field onlyContent="在当前页面下面建两个子页面，分别是routerFirst和routerSecond，下面例子是子路由：" />
        <router-link to="/vueDetail/vueRouter/routerFirst/23/male">
            <el-button type="text">跳转子路由一</el-button>
        </router-link>
        <router-link :to="{name:'routerSecond', params:{dataParams:'这是传参这是传参'}}">
            <el-button type="text"
                       style="margin-left:40px">跳转子路由二</el-button>
        </router-link>

        <el-card class="widthSetting">
            <transition name="fade"
                        mode="out-in">
                <router-view></router-view>
            </transition>
        </el-card>
        <text-field :title="titleContent[1].title"></text-field>
        <text-field :title="titleContent[2].title"
                    fontSizeType="middle"></text-field>
        <text-field onlyContent="利用$route.name的方法接受route/index.js里配置的属性。"></text-field>
        <text-field :title="titleContent[3].title"
                    fontSizeType="middle" />
        <text-field onlyContent="利用route-link中to属性，语法：" />
        <p class="code widthSetting">
            <code>&lt;route-link :to="{name:'routerFirst', params:{date:'2020/12/17'}}" /&gt;</code>
        </p>
        <text-field :title="titleContent[4].title"
                    fontSizeType="middle" />
        <text-field onlyContent="在router/index.js中用冒号形式配置url参数属性，如下："></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        {<br/>
            path: '/vueDetail/vueRouter/routerFirst/:dataFirst/:dataSecond',<br/>
            component: componentsA<br/>
        }
            </pre>
        </div>
        <text-field onlyContent="在使用时候直接在to属性内写，如下："></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        &lt;router-link to="/vueDetail/vueRouter/routerFirst/23/male" /&gt;
            </pre>
        </div>
        <text-field :title="titleContent[5].title"
                    :content="titleContent[5].content" />
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        {<br/>
            path: '/vueDetail/vueRouter',<br/>
            name: 'VueRouter',<br/>
            redirect: '/vueDetail/vueRouter/routerSecond',<br/>
            component: componentsA<br/>
        }
            </pre>
        </div>
        <text-field :title="titleContent[6].title"
                    :content="titleContent[6].content" />
        <text-field :title="titleContent[7].title"
                    :content="titleContent[7].content" />
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        {<br/>
            path: '*',<br/>
            component: componentError<br/>
        }
            </pre>
        </div>
        <text-field :title="titleContent[8].title"
                    :content="titleContent[8].content" />
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        // beforeRouteEnter 守卫不能访问this，通过next()回调vm来访问组件实例<br/>
        beforeRouteEnter: (to, from, next) => {<br/>
            console.log('准备进入模板', to, from);<br/>
            next(vm=>{<br/>
                // 通过vm访问组件实例<br/>
            });<br/>
        },<br/>
        // beforeRouteUpdate是vue2.2新增的<br/>
        beforeRouteUpdate (to, from, next) {<br/>
            // 在当前路由改变，但是该组件被复用时调用<br/>
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，<br/>
            // 在 /foo/1 和 /foo/2 之间跳转的时候，<br/>
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。<br/>
            // 而这个钩子就会在这个情况下被调用。<br/>
            // 可以访问组件实例 `this`<br/>
        },<br/>
        beforeRouteLeave: (to, from, next) => {<br/>
            console.log('准备离开模板');<br/>
            next();<br/>
        },
            </pre>
        </div>
        <text-field :list="list"></text-field>
        <text-field :onlyContent="onlyContent"></text-field>
        <text-field :title="titleContent[9].title"
                    :content="titleContent[9].content" />
        <text-field :list="programList"></text-field>
        <text-field :content="navigationContent"></text-field>
        <div class="codeBorder fontCodeStyle">
            <pre class="codeBorder">
        // 参数为字符串<br/>
        this.$router.push('/path');<br/>
        // 参数为对象<br/>
        this.$router.push({<br/>
            path: '/path',<br/>
        })<br/>
        // 命名的路由并提供传参<br/>
        this.$router.push({<br/>
            name: 'pathName',<br/>
            params: {<br/>
                paramsData: 'data',<br/>
            }<br/>
        })<br/>
        // 带查询参数, 路径变成：'/path?plan=primary'<br/>
        this.$router.push({<br/>
            path: '/path',<br/>
            query: {<br/>
                plan: 'primary',<br/>
            }<br/>
        })
            </pre>
        </div>
        <text-field :list="navigationList"></text-field>
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
                    title: '1.VueRouter基本使用',
                    content:
                        '这里直接看实例和代码就可以，不需要过多讲解。下面是具体实例：',
                },
                {
                    title: '2.参数传递',
                },
                {
                    title: '2-1.name传参',
                },
                {
                    title: '2-2.利用route-link的to传递',
                },
                {
                    title: ' 2-3.利用vue-router的url传递',
                },
                {
                    title: '3.重定向redirect',
                    content:
                        '重定向就是当我们访问一个路由时候，会自动分配到另外一个路由，例如：',
                },
                {
                    title: '4.路由的动画',
                    content: `需要在<router-view>标签的外部添加<transition>标签，标签还需要一个name属性;
                        默认情况下，默认的mode模式in-out模式，还有out-in模式，在组件过渡过程中会有四个css类名进行切换，
                        这四个类名与transition标签的name属性值相关具体为：xxx-enter/xxx-enter-active/xxx-leave/xxx-leave-active；
                        其中没有active的只应用一帧。`,
                },
                {
                    title: '5.404页面的处理',
                    content: `当用户输错网址，则跳转到错误页面，这个错误页面可以自己封装vue文件，判断是否输错路由则通过path:'*'判断，如下：`,
                },
                {
                    title: '6.路由钩子',
                    content:
                        '在配置文件中只有一个钩子函数beforeEnter，就是写在index.js，但是在模板中就可以有多个钩子函数可以使用，下面具体讲一下这些钩子函数的具体使用：',
                },
                {
                    title: '7.编程式导航',
                    content: ``,
                },
            ],
            list: {
                listTitle: '其中三个参数具体为：',
                routeList: [
                    {
                        data: 'to:路由将要跳转的路径信息；',
                    },
                    {
                        data: 'from:路由跳转前的路径信息；',
                    },
                    {
                        data:
                            'next:路由的控制参数，一定要调用该方法来 resolve 这个钩子，常用的是next(true)和next(false)。',
                    },
                ],
            },
            programList: {
                listTitle: '如何在业务逻辑代码中实现导航，具体有：',
                routeList: [
                    {
                        data: 'this.$router.go(-1):后退一级',
                    },
                    {
                        data: 'this.$router.go(1):前进一级',
                    },
                    {
                        data: 'this.$router.push(‘/xxx’):用于跳转',
                    },
                ],
            },
            navigationList: {
                listTitle:
                    '如果提供了path，params会被忽略，也就是说利用编程路由传参主要有一下几种方式：',
                routeList: [
                    {
                        data: 'router.push({name:"user", params:{ userId }})',
                    },
                    {
                        data: 'router.push({ path: `/user/${userId}` })',
                    },
                    {
                        data:
                            'router.push({ path: "register", query: { plan: "private" }})',
                    },
                ],
            },
            onlyContent: `对于beforeRouteUpdate和beforeRouteLeave不支持next回调（就是生成vm），因为此时已经有this，故只可写next()/next(false)/next('/')/next(error)`,
            navigationContent: `这里着重讲一下编程式导航中router.push()，该方法参数可以是一个字符串，也可以是一个对象，例如：`,
        };
    },
};
</script>

<style scoped>
.codeBorder {
    width: 80%;
    border-radius: 10px;
}

.fontCodeStyle {
    line-height: 24px;
}

.fade-enter {
    opacity: 0;
}
.fade-leave {
    opacity: 1;
}
.fade-enter-active {
    transition: opacity 0.5s;
}
.fade-leave-active {
    opacity: 0;
    transition: opacity 0.5s;
}
</style>
