/**
 * 把所有与用户相关的操作写在这里
 */
import request from '@/utils/request'

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
