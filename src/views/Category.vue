<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

defineProps({
  listData: Array,
  title: String,
})
</script>
<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>