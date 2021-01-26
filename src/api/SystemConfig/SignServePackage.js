import axiosInstance from '@/utils/get-getTableInfo'
import SearchInfo from '@/utils/post-searchInfo'

export function getServePackageInfos() {
  return axiosInstance({
    url: '/device_info',
    method: 'get'
  })
}

export function searchPackageInfo(data) {
  return SearchInfo({
    url: '/device_info',
    method: 'post',
    params: data
  })
}
