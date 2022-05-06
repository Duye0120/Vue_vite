<template>
  <div class="">
    <Student :name="name" :age="age" :sex="sex" />
  </div>
</template>

<script lang="ts" setup>
import Student from '@/components/Student.vue';
import { watch } from 'fs';
import { ref } from 'vue';
const name = '杜也';
const age = 18;
const sex = '男';
const count = ref(0);
watch(count, (count, prevCount) => {
  console.log(count);
})
</script>

<style lang='less' scoped>
//@import url(); 引入公共css类
</style>