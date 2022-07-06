import { Caution } from '@icon-park/vue-next'
import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'error',
  path: '/core/error',
  component: () => import('@@/App.vue'),
  meta: { auth: true, menu: { title: '错误页面', icon: shallowRef(Caution) } },
  children: [
    {
      name: 'error.404',
      path: '404',
      component: () => import('@@/views/errors/404.vue'),
      meta: { menu: { title: '404页面' } },
    },
    {
      name: 'error.403',
      path: '403',
      component: () => import('@@/views/errors/403.vue'),
      meta: { menu: { title: '403页面' } },
    },
    {
      name: 'error.500',
      path: '500',
      component: () => import('@@/views/errors/500.vue'),
      meta: { menu: { title: '500页面' } },
    },
    {
      path: '/:any(.*)',
      name: 'notFound',
      component: () => import('@@/views/errors/404.vue'),
    },
  ],
} as RouteRecordRaw
