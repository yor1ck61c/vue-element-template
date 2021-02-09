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

export function myGetUserInfo(token) {
  return request({
    url: 'user/getInfo',
    method: 'post',
    token
  })
}

export function myLogout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
