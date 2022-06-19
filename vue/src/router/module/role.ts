import { RouteRecordRaw } from 'vue-router'
export default {
  name: 'role',
  path: '/site/:sid/role',
  component: () => import('@/layouts/admin.vue'),
  meta: { auth: true },
  children: [
    {
      name: 'role.index',
      path: '',
      component: () => import('@/views/role/index.vue'),
      props: true,
    },
    {
      name: 'role.add',
      path: 'add',
      component: () => import('@/views/role/add.vue'),
      props: true,
    },
    {
      name: 'role.edit',
      path: 'edit/:rid',
      component: () => import('@/views/role/edit.vue'),
      props: true,
    },
    {
      name: 'role.permission',
      path: ':rid/permission',
      component: () => import('@/views/role/permission.vue'),
      props: true,
    },
  ],
} as RouteRecordRaw
