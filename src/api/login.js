import request from '@/utils/request';
import qs from 'qs';
import CONFIG from '@/global/config';

const LOGINAPI = {
  // 获取验证码
  getCode: `${CONFIG.LOGIN_SERVER}/getcode?${Math.random()}`, // 后面加随机数是为了去掉缓存
  // 登录
  login: `${CONFIG.LOGIN_SERVER}/login`,
  // 获取token
  checkTokenByAppKey: `${CONFIG.LOGIN_SERVER}/checkTokenByAppKey`,
  // 获取用户相关信息
  getUserInfo: `${CONFIG.UUMS_SERVER}/uums/user/get`,
  // 获取应用信息（拿到appId请求字典）
  getAppInfo: `${CONFIG.UUMS_SERVER}/uums/app/get`,
  // 获取字典
  getDicInfo: `${CONFIG.UUMS_SERVER}/uums/dict/tree`,
  // 获取机构
  getOrgInfo: `${CONFIG.UUMS_SERVER}/uums/organization/tree`,
  // 获取区域
  getAreaInfo: `${CONFIG.UUMS_SERVER}/uums/area/tree`
}

// 获取验证码
export const getCode = () => {
  return request.get(LOGINAPI.getCode)
}

// 登录
export const login = (params) => {
  return request.post(LOGINAPI.login, qs.stringify(params))
}

// 检查token
export const checkTokenByAppKey = (params) => {
  return request.get(LOGINAPI.checkTokenByAppKey, { params })
}

// 获取用户信息
export const getUserInfo = (params) => {
  return request.get(LOGINAPI.getUserInfo, { params })
}

// 获取app信息
export const getAppInfo = (params) => {
  return request.get(LOGINAPI.getAppInfo, { params })
}

// 获取字典
export const getDicInfo = (params) => {
  return request.get(LOGINAPI.getDicInfo, { params })
}

// 获取机构
export const getOrgInfo = () => {
  return request.get(LOGINAPI.getOrgInfo)
}

// 获取区域
export const getAreaInfo = () => {
  return request.get(LOGINAPI.getAreaInfo)
}
