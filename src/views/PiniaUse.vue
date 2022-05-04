<template>
  <a-space direction="vertical">
    <h1>{{ home.count }}</h1>
    <a-button type="primary" @click="home.increment()">up</a-button>
  </a-space>
</template>

<script lang="ts" setup>
import { useHomeStore } from '@/stores/home';
const home = useHomeStore();
</script>

<style scoped lang="less">
h1 {
  color: black;
}

button {
  width: 100px;
  height: 50px;
}
</style>