import request from '@/utils/request'

export function myLogin(data) {
  return request({
    // controller中定义的接口
    url: '/user/login',
    method: 'post',
    // *将数据转为Json格式
    data: JSON.stringify(data)
  })
}

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function myGetUserInfo(token) {
  return request({
    url: 'user/getInfo',
    method: 'post',
    token
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function myLogout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
