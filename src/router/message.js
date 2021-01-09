export default [{
  path: '/message',
  name: 'Message',
  component: () => import('@/views/message'),
}, {
  path: '/message/setting',
  name: 'MessageSetting',
  meta: { title: '消息设置' },
  component: () => import('@/views/message/setting'),
}, {
  path: '/message/prescription',
  name: 'MessagePrescription',
  meta: { title: '按药开方' },
  component: () => import('@/views/message/prescription'),
}, {
  path: '/message/prescription/detail',
  name: 'MessagePrescriptionDetail',
  meta: { title: '开方申请' },
  component: () => import('@/views/message/prescription/detail'),
}];
