export default [{
  path: '/mine',
  name: 'Mine',
  component: () => import('@/views/mine'),
}, {
  path: '/mine/evaluate',
  name: 'Evaluate',
  meta: { title: '我收到的评价' },
  component: () => import('@/views/mine/evaluate'),
}, {
  path: '/mine/personal',
  name: 'Personal',
  meta: { title: '个人资料' },
  component: () => import('@/views/mine/personal'),
}, {
  path: '/mine/collection',
  name: 'Collection',
  meta: { title: '收藏夹' },
  component: () => import('@/views/mine/collection'),
}, {
  path: '/mine/account',
  name: 'Account',
  meta: { title: '我的订单' },
  component: () => import('@/views/mine/account'),
}, {
  path: '/mine/account/details',
  name: 'AccountDetails',
  meta: { title: '订单详细' },
  component: () => import('@/views/mine/account/details'),
}];
