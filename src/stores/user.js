import { defineStore } from 'pinia';
import { login, checkTokenByAppKey, getUserInfo } from '@/api/login';
import CONFIG from '@/global/config'
import { crypto } from '@/utils/crypto'
import { CACHE_TOKEN, CACHE_USER_INFO } from '@/global/constants';
import { localCache } from '@/utils/cache';
import { useSystemStore } from './system';


export const useUserStore = defineStore('user', () => {

  async function loginAction(params) {

    try {
      const systemStore = useSystemStore()

      const params1 = {
        ...params
      }
      const resLogin = await login(params1)

      // console.log('resLogin', resLogin);
      const token = resLogin.data.gmsso_cli_ec_key

      const params2 = {
        token: token,
        appKey: CONFIG.APP_KEY
      }

      const resToken = await checkTokenByAppKey(params2)

      // console.log('resToken', resToken);

      const params3 = {
        userId: resToken.data.userId
      }

      const resUser = await getUserInfo(params3)

      const resUserData = resUser.data

      const userInfo = {
        userId: resUserData.id,
        loginName: crypto.decryptByAES(resUserData.loginName),
        realName: crypto.decryptByAES(resUserData.realName),
        areaName: crypto.decryptByAES(resUserData.areaNames)
      }


      localCache.setItem(CACHE_TOKEN, token)
      localCache.setItem(CACHE_USER_INFO, userInfo)

      await systemStore.systemInitAction()
    } catch (error) {
      throw new Error(error)
    }

  }

  return {
    loginAction
  }
})
