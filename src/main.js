import Vue from 'vue'
import './plugins/axios'
import router from './router'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import cookie from 'vue-cookie'
// import ElementUI from 'element-ui'
import { Message } from 'element-ui'
import './styles.scss'


import App from './App.vue'
import store from './store'

// Vue.use(ElementUI)
// import env from './env.js'

Vue.use(VueLazyLoad, {
    loading: '/imgs/loading-svg/loading-bars.svg'
})

Vue.config.productionTip = false
Vue.prototype.$cookie = cookie;
Vue.prototype.$ajax = axios;
Vue.prototype.$message = Message;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')