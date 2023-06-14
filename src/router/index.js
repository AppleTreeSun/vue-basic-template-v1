import { createRouter, createWebHashHistory } from 'vue-router'


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

export const routeList = [
  ...home,
  ...personalCenter
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

export default router
