<template>
  <div class="">
    <h1>学生姓名：{{ name }}</h1>
    <h1>学生性别：{{ sex }}</h1>
    <h1>学生年龄：{{ age }}</h1>
  </div>
</template>

<script lang="ts" setup>
// 直接定义props
// const props = defineProps(['name', 'age', 'sex']);
const props = defineProps({
  name: String,
  age: Number,
  sex: String,
});
const { name, age, sex } = props;
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>