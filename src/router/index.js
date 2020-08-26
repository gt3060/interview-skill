import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/homePage.vue';
import LearnCSS from '../views/Learn.vue';
import LearnhtmlAndCss from "../views/LearnhtmlAndCss.vue"

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
