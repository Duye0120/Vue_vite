<template>
  <div class="">
    <Student :name="name" :age="age" :sex="sex" />
  </div>
</template>

<script lang="ts" setup>
  import { watch } from 'fs';
  import { ref } from 'vue';
  import Student from '@/components/Student.vue';
  const name = '杜也';
  const age = 18;
  const sex = '男';
  const address = '南京';
</script>

<style lang="less" scoped>
  //@import url(); 引入公共css类
</style>
