import http from './base'
import { sickUrl } from 'consts/api'

export const getTotalSickDatas = () => {
  return http.get({
    url: sickUrl,
  })
}

export const getSickDetail = query => {
  return http.get({
    url: `${sickUrl}?q=${query}`,
  })
}
