export default [
  {
    path: '/dataStatistics',
    name: 'dataStatistics',
    component: () => import('@/views/dataStatistics/dataStatistics.vue'),
    meta: {
      title: '数据统计',
      menuVisible: true
    }
  }
]
