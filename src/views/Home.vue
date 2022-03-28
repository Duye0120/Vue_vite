<script lang="ts" setup>
import { useHomeStore } from '@/stores/home';
const home = useHomeStore();
</script>

<template>
  <div class="home">
    <h1>{{ home.count }}</h1>
    <button @click="home.increment()">up</button>
  </div>
</template>