import { createRouter, createWebHashHistory } from 'vue-router'
import { localCache } from '@/utils/cache';
import { CACHE_TOKEN } from '@/global/constants';
// 引入NProgress
import NProgress from 'nprogress'
// 引入nprogress样式文件
import 'nprogress/nprogress.css'

NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })



// 路由配置示例
/*
  const exampleRoute = {
    path: '/example',
    name: 'Example',
    component: () => import('@/views/example/Example.vue'),
    meta: {
      title: '首页', // 路由在菜单上展示的名称（如果能在菜单上展示）
      menuVisible: true, // 路由是否在菜单上展示
      activePath: '', // path值为activePath的顶部菜单，样式会处于被选中active状态
      permission: 'home', // 路由权限，不配置默认展示
    }
  };
*/

import home from './modules/home';
import personalCenter from './modules/personalCenter';
import materialMarket from './modules/materialMarket';
import dataStatistics from './modules/dataStatistics';

export const routeList = [
  ...home,
  ...personalCenter,
  ...dataStatistics,
  ...materialMarket
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('@/layout/layout.vue'),
      redirect: '/home',
      children: routeList
    }
  ]
})

router.beforeEach((to) => {
  if (to.path !== '/login' && !localCache.getItem(CACHE_TOKEN)) {
    return '/login'
  }

  NProgress.start()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
