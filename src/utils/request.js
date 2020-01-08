import axios from 'axios'

// 创建一个axios的实例，它具备一切axios的请求方法。
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})

// todo 补充一些请求拦截，响应拦截
// 导出对象
export default request
