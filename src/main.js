import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import './assets/icon/iconfont.css'
import './main.less';
import commonImg from './utils/commonImg';
import { handlePreLoader } from './utils/imgPreLoader'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.directive("gtColor", function (el, binding) {
    console.log(el);
    el.style = "color:" + binding.value
});
(async () => {
    await handlePreLoader(commonImg);
    // document.querySelector('.loading').style.display = 'none';
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
})()
