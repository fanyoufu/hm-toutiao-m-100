<template>
  <div class="container">
      <van-nav-bar
        v-if="$route.path==='/'"
        title="黑马头条"
      >
      <van-icon name="search" slot="right" @click="$router.push('/search')" />
      </van-nav-bar>

      <div class="my-wrapper" :class="{'noTop':$route.path!=='/'}">
        <router-view>

        </router-view>
      </div>
      <van-tabbar  route>
        <van-tabbar-item icon="home-o" to="/">主页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/question">问答</van-tabbar-item>
        <van-tabbar-item icon="video-o" to="/video">视频</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
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

<style lang="less" scoped>
  .container{
    width: 100%;
    height: 100%;
    position: relative;
    .my-wrapper{
      width: 100%;
      height: 100%;
      overflow: hidden;
      padding-top: 46px;
      padding-bottom: 50px;
      box-sizing: border-box;
      &.noTop{
        padding-top: 0;
      }
    }
  }
</style>
