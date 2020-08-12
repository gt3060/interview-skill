import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/homePage.vue';
import Learn from '../views/Learn.vue';
import Css from '../views/Learncss/Css.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: homePage
  },
  {
    path: '/learncss',
    name: 'Learn',
    component: Learn,
  },
  {
    path: '/learncss/css',
    name: 'LearnCss',
    component: Css
  }, {
    path: '/learncss/css02',
    component: Css
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
