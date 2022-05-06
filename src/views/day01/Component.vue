<template>
  <div class="component">
    <a-menu mode="horizontal" :default-selected-keys="['test1']" @menu-item-click="menuItemClick">
      <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
        <div :style="{
          width: '80px',
          height: '30px',
          borderRadius: '2px',
          background: 'var(--color-fill-3)',
          cursor: 'text',
        }" />
      </a-menu-item>
      <a-menu-item key="test1">Home</a-menu-item>
      <a-menu-item key="test2">Solution</a-menu-item>
    </a-menu>
    <div>{{ select }}</div>
    <School>1111</School>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import School from '@/components/School.vue';

const select = ref('test1');
function menuItemClick(key: any) {
  select.value = key;
};
watch(select, (val: any) => {
  console.log(val);
});
</script>

<style lang='less' scoped>
//@import url(); 引入公共css类
.component {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

div {
  color: black;
}
</style>