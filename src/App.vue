<template>
  <div id="app">
    <div id="nav">
      主页

      <van-button type="danger">危险按钮</van-button>
    </div>
    <router-view/>
  </div>
</template>
<script>
import request from '@/utils/request'
export default {
  created () {
    console.log(request)
    request({
      method: 'get',
      url: '/app/v1_0/channels'
    })
  }
}
</script>
