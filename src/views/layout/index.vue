<template>
  <div>
      <div class="wrap">
        <router-view>

        </router-view>
      </div>
      <van-tabbar  route>
        <van-tabbar-item icon="home-o" to="/">主页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/question">问答</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/video">视频</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/user">我的</van-tabbar-item>
      </van-tabbar>

  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {

    }
  }
}
</script>

<style lang="" scoped>

</style>
