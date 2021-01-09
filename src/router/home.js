export default [{
  path: '/home',
  name: 'Home',
  component: () => import('@/views/home'),
}, {
  path: '/home/records',
  name: 'Records',
  meta: { title: '医案库' },
  component: () => import('@/views/home/records'),
}, {
  path: '/home/recordsList',
  name: 'RecordsList',
  meta: { title: '医案库' },
  component: () => import('@/views/home/records/list'),
}, {
  path: '/home/recordsDetail',
  name: 'RecordsDetail',
  meta: { title: '病例详情' },
  component: () => import('@/views/home/records/detail'),
}, {
  path: '/home/medicine',
  name: 'Medicine',
  meta: { title: '药品库' },
  component: () => import('@/views/home/medicine'),
}, {
  path: '/home/medicineList',
  name: 'MedicineList',
  meta: { title: '口腔科用药' },
  component: () => import('@/views/home/medicine/list'),
}, {
  path: '/home/medicineDetail',
  name: 'MedicineDetail',
  meta: { title: '药品详情' },
  component: () => import('@/views/home/medicine/detail'),
}, {
  path: '/home/roster', // 我的排班
  name: 'roster',
  meta: { title: '我的排班' },
  component: () => import('@/views/home/roster'),
}, {
  path: '/home/visitor', // 随访管理
  name: 'visitor',
  meta: { title: '随访管理' },
  component: () => import('@/views/home/visitor'),
}, {
  path: '/home/visitorDatail', // 随访管理详情
  name: 'visitor',
  meta: { title: '随访管理' },
  component: () => import('@/views/home/visitor/detail'),
}, {
  path: '/home/visitorPlan', // 随访管理添加计划
  name: 'visitor',
  meta: { title: '添加计划' },
  component: () => import('@/views/home/visitor/plan'),
}, {
  path: '/home/order', // 预约管理
  name: 'Order',
  meta: { title: '预约管理' },
  component: () => import('@/views/home/order'),
}, {
  path: '/home/service', // 在线问诊
  name: 'Service',
  meta: { title: '在线问诊' },
  component: () => import('@/views/home/service'),
}, {
  path: '/home/service/details', // 问诊详情
  name: 'ServiceDetails',
  meta: { title: '问诊详情' },
  component: () => import('@/views/home/service/details'),
}, {
  path: '/home/service/summary', // 问诊小结
  name: 'ServiceSummary',
  meta: { title: '问诊小结' },
  component: () => import('@/views/home/service/summary'),
}, {
  path: '/home/service/prescription', // 添加处方
  name: 'ServicePrescription',
  meta: { title: '添加处方' },
  component: () => import('@/views/home/service/prescription'),
}, {
  path: '/home/service/success', // 处方发送成功
  name: 'ServiceSuccess',
  component: () => import('@/views/home/service/prescription/success'),
}, {
  path: '/home/setting', // 服务设置
  name: 'Setting',
  meta: { title: '服务设置' },
  component: () => import('@/views/home/setting'),
}];
