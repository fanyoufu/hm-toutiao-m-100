import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// rem适配。它的功能是根据设置屏幕的宽度来动态设置html标签上的font-size的大小
import 'amfe-flexible'
// 引入vant样式
import 'vant/lib/index.css'

import '@/styles/index.less'

// 手动按需引入组件
import { Button, NavBar, Field, Cell, CellGroup } from 'vant'
// 注册组件
Vue.use(Button)
  .use(NavBar)
  .use(Field)
  .use(Cell)
  .use(CellGroup)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
