<template>
  <div class="login">
    <van-nav-bar
      title="登陆"
    />
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        required
        clearable
        label="手机号"
        right-icon="question-o"
        placeholder="请输入手机号"
      />

      <van-field
        v-model="user.code"
        type="password"
        label="验证码"
        placeholder="请输入验证码"
        required
      />
    </van-cell-group>
    <div class="wrap">
      <van-button type="primary" class="btn" @click="hLogin">登陆</van-button>

    </div>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  name: '',
  data () {
    return {
      user: {
        mobile: '13412341234',
        code: '246810'
      }
    }
  },
  methods: {
    async hLogin () {
      // 对用户的信息进行校验
      // todo: 更加完备验证
      if (this.user.mobile === '') {
        this.$toast.fail('手机号不能为空')
        // return
      }

      try {
        this.$toast.loading({
          duration: 0,
          message: '登陆中...',
          forbidClick: true,
          loadingType: 'spinner'
        })

        // 发请求
        const result = await request({
          url: '/app/v1_0/authorizations',
          method: 'post',
          data: this.user
        })

        // 根据返回结果做后续的处理
        console.log(result.data)
        this.$toast.success('登陆成功')
      } catch (err) {
        if (err && err.response && err.response.status === 400) {
          this.$toast.fail('登陆失败')
        }
      }
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
