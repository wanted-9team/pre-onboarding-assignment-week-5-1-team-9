import axios from 'axios'
import { BASE_URL, HTTP_METHOD } from 'consts/api'

const baseAxios = axios.create({
  baseURL: BASE_URL,
})

const handleRequestConfig = config => {
  return {
    ...config,
    headers: {
      ...config.headers,
    },
  }
}

const createApi = (axiosInstance, methodType) => config => {
  return axiosInstance({
    ...handleRequestConfig(config),
    method: methodType,
  })
}

const http = {
  get: createApi(baseAxios, HTTP_METHOD.GET),
}

export default http
