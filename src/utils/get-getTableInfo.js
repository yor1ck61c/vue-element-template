import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'
// import { Message } from 'element-ui'

// axios二次封装
const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 0,
  withCredentials: true
})

// request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['Authorization'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// 响应axios拦截器
/* axiosInstance.interceptors.response.use((res) => {
  if (res.data.code && res.data.code !== 200) {
    Message.error({
      message: res.data.msg
    })
  }
  return res
}, res => {
  switch (res.status) {
    case 500: {
      Message.error({
        message: '服务器内部错误'
      })
      break
    }
  }
})*/

export default axiosInstance
