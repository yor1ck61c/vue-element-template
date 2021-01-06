import service from '@/utils/request'

export function getServePackageInfos() {
  return service({
    url: '/device_info',
    method: 'post'
  })
}
