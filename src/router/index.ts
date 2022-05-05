import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Ref from '@/views/Ref.vue';
import PiniaUse from '@/views/PiniaUse.vue';
import Info from '@/views/Info.vue';
import Component from '@/views/Component.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/ref', name: 'ref', component: Ref },
  { path: '/piniaUse', name: 'piniaUse', component: PiniaUse },
  { path: '/info', name: 'info', component: Info },
  { path: '/component', name: 'component', component: Component },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;