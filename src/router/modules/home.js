export default [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/home.vue'),
    meta: {
      title: '首页',
      menuVisible: true
    }
  }
]
