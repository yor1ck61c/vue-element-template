import axios from 'axios'
import { Message } from 'element-ui'

// axios二次封装
const axiosInstance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/16fddfe65af12b42183595cffa0358a8/getDeviceData',
  timeout: 5000
})

// 响应axios拦截器
axiosInstance.interceptors.response.use((res) => {
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
})

export default axiosInstance
