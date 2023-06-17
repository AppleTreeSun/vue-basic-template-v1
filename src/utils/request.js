import axios from 'axios';

import { CACHE_TOKEN } from '@/global/constants';
import { localCache } from '@/utils/cache';
import { ElMessage } from 'element-plus';

const service = axios.create({
  timeout: 30000
})

service.interceptors.request.use(
  (config) => {
    const token = localCache.getItem(CACHE_TOKEN)
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const data = response.data

    // console.log('响应成功的拦截器', response);

    if (data.success) {
      // 操作成功
      return data
    } else {
      ElMessage.error(data.errorMessage || '操作失败')
      return Promise.reject(data)
    }
  },
  (error) => {
    console.log('响应失败的拦截器', error);

    return Promise.reject(error)
  }
)

export default service;
