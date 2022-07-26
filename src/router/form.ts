import { type RouteRecordRaw } from 'vue-router';

const moduleName = 'form';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/form',
    name: moduleName,
    redirect: { name: `${moduleName}-basicForm` },
    children: [
      {
        path: '/basicForm',
        name: `${moduleName}-basicForm`,
        component: () => import('@/views/form/BasicForm.vue'),
      }
    ]
  }
]

export default routes;