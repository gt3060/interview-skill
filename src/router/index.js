import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/homePage.vue';
import LearnCSS from '../views/Learn.vue';
import JsAdvanced from "../views/JsAdvanced/JsAdvanced.vue";
import LearnhtmlAndCss from "../views/LearnhtmlAndCss.vue";
import JsBasics from "../views/JsBasics.vue";
import DesignPatterns from "../views/DesignPatterns.vue";
import ExecutionMechanism from "../views/ExecutionMechanism.vue";
import arrayMethods from "../views/arrayMethods.vue";
import JsPrototype from "../views/JsPrototype/jsPrototype.vue";
import JsClosure from "../views/JsClosure/JsClosure.vue";
import jsInherit from "../views/jsInherit/jsInherit.vue";
import vueInterview from "../views/vueInterview/vueInterview.vue";
import reactInterview from "../views/reactInterview/reactInterview.vue"
import jsSort from "../views/jsSort.vue";
import vueDetail from "../views/vueInterview/vueDetail.vue";
import vueDirective from "../views/vueInterview/vueDirective.vue";
import vueExtend from "../views/vueInterview/vueExtend.vue";
import VueSet from "../views/vueInterview/VueSet.vue";
import VueWatch from "../views/vueInterview/VueWatch.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: homePage
    },
    {
        path: '/learncss',
        name: 'LearnCSS',
        component: LearnCSS,
    },
    {
        path: '/htmlAndCssInterview',
        name: 'htmlAndCssInterview',
        component: LearnhtmlAndCss
    },
    {
        path: '/jsBasicsInterview',
        name: 'jsBasicsInterview',
        component: JsBasics
    },
    {
        path: '/jsAdvanced',
        name: 'jsAdvanced',
        component: JsAdvanced
    },
    {
        path: '/designPatterns',
        name: 'designPatterns',
        component: DesignPatterns
    },
    {
        path: '/executionMechanism',
        name: 'executionMechanism',
        component: ExecutionMechanism
    },
    {
        path: '/arrayMethods',
        name: 'arrayMethods',
        component: arrayMethods
    },
    {
        path: '/jsPrototype',
        name: 'jsPrototype',
        component: JsPrototype
    },
    {
        path: '/jsClosure',
        name: 'jsClosure',
        component: JsClosure
    },
    {
        path: '/jsInherit',
        name: 'jsInherit',
        component: jsInherit
    },
    {
        path: '/vueInterview',
        name: 'vueInterview',
        component: vueInterview
    },
    {
        path: '/reactInterview',
        name: 'reactInterview',
        component: reactInterview
    },
    {
        path: '/jsSort',
        name: 'jsSort',
        component: jsSort
    },
    // // vue进阶详解
    {
        path: '/vueDetail',
        name: 'vueDetail',
        component: vueDetail,
        children: [
            {
                path: '/vueDetail',
                name: 'vueDirective',
                component: vueDirective
            },
            {
                path: '/vueDetail/VueExtend',
                name: 'VueExtend',
                component: vueExtend
            },
            {
                path: '/vueDetail/VueSet',
                name: 'VueSet',
                component: VueSet
            },
            {
                path: '/vueDetail/VueWatch',
                name: 'VueWatch',
                component: VueWatch
            },
            {
                path: '/vueDetail/VueComponentLabel',
                name: 'VueComponentLabel',
                component: () =>
                    import(
                        '../views/vueInterview/VueComponentLabel.vue'
                    ).catch(err => {
                        console.log('视图加载错误', err)
                    })
            }
        ]
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
