import request from '@/utils/request'

// 获取验证码
export function getMenuList(data = {}) {
  return request({
    method: 'GET',
    url: '/menu/getMenuList',
    params: data,
  })
}

export function getPage(data = {}) {
  return request({
    method: 'GET',
    url: '/menu/getPage',
    params: data,
  })
}