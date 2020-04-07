import Vue from 'vue'
import './plugins/axios'
import router from './router'
import axios from 'axios'

import App from './App.vue'
// import env from './env.js'


//最大响应时间
axios.defaults.timeout = 8000
    //根据不同环境变量获取不同请求地址
    // axios.defaults.baseUrl = '/api'
    //错误接口拦截
axios.interceptors.response.use(function(response) {
    let res = response.data;
    if (res.status == 0) {
        return res.data
    } else if (res.status == 10) {
        window.location.href = '/#/login'
    } else {
        alert(res.msg)
    }
})

Vue.config.productionTip = false
Vue.prototype.$ajax = axios;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')