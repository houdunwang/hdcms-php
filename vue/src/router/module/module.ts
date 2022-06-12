import { RouteRecordRaw } from 'vue-router'
export default {
  name: 'module',
  path: '/module',
  component: () => import('@/layouts/admin.vue'),
  meta: { auth: true },
  children: [
    {
      name: 'module.index',
      path: 'index',
      component: () => import('@/views/module/index.vue'),
    },
    {
      name: 'module.design',
      path: 'design',
      component: () => import('@/views/module/design.vue'),
    },
  ],
} as RouteRecordRaw
