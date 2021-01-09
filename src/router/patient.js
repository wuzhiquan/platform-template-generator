export default [{
  path: '/patient',
  name: 'Patient',
  component: () => import('@/views/patient'),
}, {
  path: '/patient/manage',
  name: 'PatientManage',
  meta: { title: '患者分组' },
  component: () => import('@/views/patient/manage'),
}, {
  path: '/patient/info',
  name: 'PatientInfo',
  meta: { title: '用户信息' },
  component: () => import('@/views/patient/info'),
}, {
  path: '/patient/detail',
  name: 'PatientDetail',
  meta: { title: '用户详情' },
  component: () => import('@/views/patient/info/detail'),
}];
