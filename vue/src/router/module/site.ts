import { RouteRecordRaw } from 'vue-router'
export default {
  name: 'site',
  path: '/site',
  component: () => import('@/layouts/admin.vue'),
  meta: { auth: true },
  children: [
    {
      name: 'site.index',
      path: '',
      component: () => import('@/views/site/index.vue'),
    },
    {
      name: 'site.add',
      path: 'site/add',
      component: () => import('@/views/site/add.vue'),
    },
    {
      name: 'site.edit',
      path: 'site/:id',
      component: () => import('@/views/site/edit.vue'),
    },
    {
      name: 'admin.index',
      path: 'admin/:id',
      component: () => import('@/views/admin/index.vue'),
    },
    {
      name: 'site.config',
      path: 'config/:id',
      component: () => import('@/views/site/config.vue'),
    },
  ],
} as RouteRecordRaw
