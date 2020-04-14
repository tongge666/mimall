import Vue from 'vue'
import './plugins/axios'
import router from './router'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import cookie from 'vue-cookie'


import App from './App.vue'
import store from './store'
// import env from './env.js'

Vue.use(VueLazyLoad, {
    loading: '/imgs/loading-svg/loading-bars.svg'
})

Vue.config.productionTip = false
Vue.prototype.$cookie = cookie;
Vue.prototype.$ajax = axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')