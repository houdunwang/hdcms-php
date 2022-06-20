import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/site/:sid/role/:rid',
  component: () => import('@/layouts/admin.vue'),
  meta: { auth: true },
  children: [
    {
      name: 'role.permission.edit',
      path: 'permission',
      component: () => import('@/views/rolePermission/edit.vue'),
      props: true,
    },
  ],
} as RouteRecordRaw
