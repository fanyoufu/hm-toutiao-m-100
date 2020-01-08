import axios from 'axios'

import store from '@/store/index.js'
// 创建一个axios的实例，它具备一切axios的请求方法。
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})

// todo 补充一些请求拦截

request.interceptors.request.use(function (config) {
  // 每个请求发出去之前都会进入到这里
  // console.log('每个请求发出去之前都会进入到这里')
  // 判断vuex中是否有user的信息，如果有，就设置headers
  if (store.state.user) {
    config.headers.Authorization = `Bearer ${store.state.user.token}`
  }
  // console.log(config)
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 导出对象
export default request
