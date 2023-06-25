import { RouterView } from 'vue-router';

import icon1 from '@/assets/image/icon/icon1.png';
import icon1Active from '@/assets/image/icon/icon1-active.png'
import icon2 from '@/assets/image/icon/icon2.png'
import icon2Active from '@/assets/image/icon/icon2-active.png'
import icon3 from '@/assets/image/icon/icon3.png'
import icon3Active from '@/assets/image/icon/icon3-active.png'


export default [
  {
    path: '/material-market',
    name: 'material-market',
    component: () => import('@/views/materialMarket/materialMarket.vue'),
    redirect: '/material-market/example-1',
    meta: {
      title: '物料市场',
      menuVisible: true,
      open: ['/material-market/example-3']
    },
    children: [
      {
        path: '/material-market/example-1',
        name: 'example-1',
        component: () => import('@/views/materialMarket/example-1/example-1.vue'),
        meta: {
          title: '示例-1',
          menuVisible: true,
          activePath: '/material-market',
          icon: icon1,
          iconActive: icon1Active
        },
      },
      {
        path: '/material-market/example-1-detail',
        name: 'example-1-detail',
        component: () => import('@/views/materialMarket/example-1/detail.vue'),
        meta: {
          title: '示例-1-详情',
          activePath: '/material-market'
        },
      },
      {
        path: '/material-market/example-2',
        name: 'example-2',
        component: () => import('@/views/materialMarket/example-2/example-2.vue'),
        meta: {
          title: '示例-2',
          menuVisible: true,
          activePath: '/material-market',
          icon: icon2,
          iconActive: icon2Active
        },
      },
      {
        path: '/material-market/example-3',
        name: 'example-3',
        component: () => import('@/views/materialMarket/example-3/example-3.vue'),
        meta: {
          title: '示例-3',
          menuVisible: true,
          activePath: '/material-market',
          icon: icon3,
          iconActive: icon3Active
        },
        children: [
          {
            path: '/material-market/example-3/example-3-1',
            name: 'example-3-1',
            component: () => import('@/views/materialMarket/example-3/example-3-1/example-3-1.vue'),
            meta: {
              title: '示例-3-1',
              menuVisible: true,
              activePath: '/material-market'
            },
          },
          {
            path: '/material-market/example-3/example-3-2',
            name: 'example-3-2',
            component: () => import('@/views/materialMarket/example-3/example-3-2/example-3-2.vue'),
            meta: {
              title: '示例-3-2',
              menuVisible: true,
              activePath: '/material-market'
            },
          },
        ]
      }
    ]
  }
]
