import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from '@/router';
import '@arco-design/web-vue/dist/arco.css';
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(ArcoVue);
router.isReady().then(() => {
  app.mount('#app');
});
// createApp(App).use(router, ArcoVue, createPinia()).mount('#app')
