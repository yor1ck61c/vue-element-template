import axiosInstance from '@/utils/get-getTableInfo'
import addInfo from '@/utils/post-addInfo'
import HandleDelete from '@/utils/post-delete'

export function getAccountInfo() {
  return axiosInstance({
    url: '/privilege/account',
    method: 'get'
  })
}

export function saveAccount(data) {
  return addInfo({
    url: '/privilege/save',
    method: 'post',
    data: JSON.stringify(data)
  })
}

export function handleDelete(data) {
  return HandleDelete({
    url: 'privilege/delete',
    method: 'post',
    data
  })
}
