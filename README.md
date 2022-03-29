# 使用的技术栈

> vite+vueRouter+pinia+arcoDesign  
> 依赖下载工具pnpm

# 修改"@"路径名

- 安装依赖

```cmd
pnpm i @types/node -D
```
- 修改vite.config.js

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement:resolve(__dirname,'src')
      }
    ]
  },

})

```
- 修改tsconfig.json

```json
{
    "compilerOptions" : {
        // ...
        "baseUrl": ".", // 用于设置解析非相对模块名称的基本目录，相对模块不会受到baseUrl的影响
        "paths": { // 用于设置模块名到基于baseUrl的路径映射
            "@/*": ["src/*"]
        }
        // ...
    }
}
```

# Error getActive Pinia was called with no active Pinia. Did you forget to install pinia?



- main.ts
```js
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
```
> 这里报错是因为,再页面挂载之前就已经开始调用了它的store了,所以需要将`store`延后
> 大概是这么理解的....

- stores
  - home.ts 
 
```ts 
import { defineStore } from 'pinia';

export const useHomeStore = defineStore({
  id: 'home',
  state: () => ({
    count:0,
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})
```
