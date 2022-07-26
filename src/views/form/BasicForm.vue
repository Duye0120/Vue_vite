<template>
  <div class="main">
    <a-divider orientation="left"> 基础表单</a-divider>
    <a-form :model="formData" :style="{ width: '600px' }">
      <a-form-item field="name" label="UserName">
        <a-input v-model="formData.name" placeholder="please enter your userName" />
      </a-form-item>
      <a-form-item field="post" label="Post">
        <a-input v-model="formData.post" placeholder="please enter your post..."></a-input>
      </a-form-item>
      <a-form-item field="age" label="Age">
        <a-inputNumber v-model="formData.age" placeholder="please enter your age"></a-inputNumber>
      </a-form-item>
      <a-form-item field="isRead">
        <a-checkbox v-model="formData.isRead"> I have read the manual</a-checkbox>
      </a-form-item>
      <a-form-item field="Section" label="Section">
        <a-select v-model="formData.section" placeholder="please select" all-clear>
          <a-option value="Section one">Section one</a-option>
          <a-option value="Section two">Section two</a-option>
          <a-option value="Section three">Section three</a-option>
        </a-select>
      </a-form-item>
    </a-form>
    {{ formData }}
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';

  interface dataType {
    name: string;
    age: number;
    post: string;
    isRead: boolean;
    section: string;
  }

  const formData = reactive({
    name: '',
    age: null,
    post: '',
    isRead: true,
    section: '',
  });

  const handleSubmit = (data: dataType) => {
    console.log(data);
  };
</script>
<style lang="less" scoped>
  //@import url(); 引入公共css类
  .main {
    width: calc(100% - 40px);
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
</style>
