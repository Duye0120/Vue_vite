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

#Day 2

## 第一个问题,如果通过Slots来控制content内容

---

知识点

- 使用setup语法以后,可以不用导出component 可以直接使用
- `<router-view/>`被用在layout中
- v-slot可以用来自定义插槽内容

![](image/README/1648560768964.png)

### `<Slot>插槽学习`

```javascript
<FrancyButton>
  // 插槽内容
  Clik me!
</FrancyButton>


// 这个组件的模板是

<button>
  <slot></slot>
</button>
```

slot是插口,表示父元素的插槽内容将在哪里被渲染.

插槽中可以放默认值,意味着,当插槽中没有值的时候,可以有默认值,类似于,emmm,`<Empty/>`?
