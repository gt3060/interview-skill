import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/homePage.vue';
import LearnCSS from '../views/Learn.vue';
import LearnhtmlAndCss from "../views/LearnhtmlAndCss.vue";
import JsBasics from "../views/JsBasics.vue";
import DesignPatterns from "../views/DesignPatterns.vue";
import ExecutionMechanism from "../views/ExecutionMechanism.vue";
import arrayMethods from "../views/arrayMethods.vue"

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
