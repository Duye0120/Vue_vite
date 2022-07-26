import { type RouteRecordRaw } from 'vue-router';
import Form from '@/views/form/index.vue';
import BasicForm from '@/views/form/BasicForm.vue';

const moduleName = 'form';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/basicForm',
    component: BasicForm,
  },
];

export default routes;
