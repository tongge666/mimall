"use strict";

import Vue from 'vue';
import axios from "axios";
import { Message } from 'element-ui'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
    // baseURL: process.env.baseURL || process.env.apiUrl || ""
    // timeout: 60 * 1000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function(response) {
        let res = response.data;
        if (res.status == 0) {
            return res.data;
        } else if (res.status == 10) {
            window.location.href = '/#/login';
            return Promise.reject(res);
        } else {
            Message.warning(res.msg);
            return Promise.reject(res);
        }
    }, (error) => {
        let res = error.response;
        Message.error(res.data.message);
        return Promise.reject(error);
    }
    // function(response) {
    //     // Do something with response data
    //     return response;
    // },
    // function(error) {
    //     // Do something with response error
    //     return Promise.reject(error);
    // }
);

Plugin.install = function(Vue, options) {
    console.log(options);
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            }
        },
        $axios: {
            get() {
                return _axios;
            }
        },
    });
};
Vue.use(Plugin)

export default Plugin;