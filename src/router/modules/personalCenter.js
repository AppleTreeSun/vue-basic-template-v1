export default [
  {
    path: '/personalCenter',
    name: 'personalCenter',
    component: () => import('@/views/personalCenter/personalCenter.vue'),
    meta: {
      title: '个人中心',
      menuVisible: true,
      permission: 'GXXT:GRZX'
    }
  }
]
