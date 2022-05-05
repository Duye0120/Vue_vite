<template>
  <a-layout class="layout-demo">
    <a-layout-sider collapsible breakpoint="xl">
      <div class="logo" />
      <a-menu :default-selected-keys="path" :style="{ width: '100%' }" @menu-item-click="onClickMenuItem">
        <a-menu-item key="home" @click="$router.push('/')">
          <IconHome />
          首页
        </a-menu-item>
        <a-sub-menu v-for="( value, index) in menu" :key="index">
          <template #title>
            <IconFolder />
            {{ value.title }}
          </template>
          <a-menu-item v-for="obj in value.content" :key="obj.key">
            <IconDriveFile />
            {{ obj.name }}
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
      <!-- trigger -->
      <template #trigger="{ collapsed }">
        <IconCaretRight v-if="collapsed"></IconCaretRight>
        <IconCaretLeft v-else></IconCaretLeft>
      </template>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="padding-left: 20px;">Header</a-layout-header>
      <a-layout style="padding: 24px 24px;">
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {
  IconCaretRight,
  IconCaretLeft,
  IconHome,
  IconCalendar,
  IconFolder,
  IconDriveFile,
} from '@arco-design/web-vue/es/icon';
import Category from '@/views/Category.vue';
import router from '@/router';
import { menu } from './menu';
export default defineComponent({
  components: {
    IconCaretRight,
    IconCaretLeft,
    IconHome,
    IconCalendar,
    Category,
    IconFolder,
    IconDriveFile
  },
  data() {
    return {
      menu,
      path: [this?.$route.name],
    }
  },
  mounted() {
    console.log(this.$route);
  },
  computed: {
  },
  methods: {
    onClickMenuItem(key: any) {
      router.push(`/${key}`);
    },
  }
});
</script>


<style scoped>
.layout-demo {
  height: calc(100% - 2px);
  background: var(--color-fill-2);
  border: 1px solid var(--color-border);
}

.layout-demo :deep(.arco-layout-sider) .logo {
  height: 32px;
  margin: 12px 8px;
  background: rgba(255, 255, 255, 0.2);
}

.layout-demo :deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-2);
}

.layout-demo :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: var(--color-bg-3);
}

.layout-demo :deep(.arco-layout-footer) {
  height: 48px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
}

.layout-demo :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}

.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}
</style>
