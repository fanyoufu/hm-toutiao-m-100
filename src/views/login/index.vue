<template>
  <div class="login">
    <van-nav-bar
      title="登陆"
    />
    <van-cell-group>
      <van-field

        required
        clearable
        label="手机号"
        right-icon="question-o"
        placeholder="请输入手机号"
      />

      <van-field

        type="password"
        label="验证码"
        placeholder="请输入验证码"
        required
      />
    </van-cell-group>
    <div class="wrap">
      <van-button type="primary" class="btn">登陆</van-button>

    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.wrap {
  padding:0 20px;
  .btn{
    width: 100%;
    background-color: #6db4fb;
      color: #fff;
  }
}

</style>
