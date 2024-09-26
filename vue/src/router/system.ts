import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/core/system',
  component: () => import('@/layouts/system.vue'),
  meta: { auth: true },
  children: [
    {
      path: '/system',
      redirect: { name: 'site.index' },
    },
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
      name: 'system.edit',
      path: 'edit',
      component: () => import('@/views/system/edit.vue'),
    },
  ],
} as RouteRecordRaw
