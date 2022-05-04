import {createRouter,createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Ref from '@/views/Ref.vue';
import PiniaUse from '@/views/PiniaUse.vue';

const routes = [
    {path:'/',name:'home',component:Home},
    {path:'/about',name:'about',component:About},
    {path: '/ref', name: 'ref', component: Ref},
    {path:'/piniaUse',name:'piniaUse',component:PiniaUse}
  ]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;