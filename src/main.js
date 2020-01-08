import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入vant样式
import 'vant/lib/index.css'

// 手动按需引入组件
import { Button } from 'vant'
// 注册组件
Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
