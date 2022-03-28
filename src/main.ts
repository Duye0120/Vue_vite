import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import { createPinia } from 'pinia';
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(ArcoVue);
router.isReady().then(() => {
  app.mount('#app')
})
// createApp(App).use(router, ArcoVue, createPinia()).mount('#app')
