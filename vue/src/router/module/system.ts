import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/system',
  component: () => import('@/layouts/admin.vue'),
  meta: { auth: true },
  children: [
    {
      name: 'system.index',
      path: 'index',
      component: () => import('@/views/system/index.vue'),
    },
    {
      name: 'user.index',
      path: 'user',
      component: () => import('@/views/user/index.vue'),
    },
    {
      name: 'config.edit',
      path: 'edit',
      component: () => import('@/views/config/edit.vue'),
    },
  ],
} as RouteRecordRaw