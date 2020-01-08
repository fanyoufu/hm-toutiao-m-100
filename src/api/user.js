/**
 * 把所有与用户相关的操作写在这里
 */
import request from '@/utils/request'

import store from '@/store/index.js'
/**
 * 实现用户登陆
 * @param {Object} user
 */
export function login (user) {
  return request({
    url: '/app/v1_0/authorizations',
    method: 'post',
    data: user
  })
}

export function getInfo () {
  return request({
    url: '/app/v1_0/user/profile',
    method: 'get',
    headers: {
      Authorization: `Bearer ${store.state.user.token}`
    }
  })
}
