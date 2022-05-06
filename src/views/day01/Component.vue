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
      <a-menu-item key="3">Cloud Service</a-menu-item>
      <a-menu-item key="4">Cooperation</a-menu-item>
    </a-menu>
    <component :is="select" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
const test1 = { template: '<div style="color:black">test1</div>' };
const test2 = { template: '<div>test2</div>' };
export default defineComponent({
  components: {
    test1, test2
  },
  data() {
    return {
      select: 'test1',
    };
  },
  computed: {},
  watch: {},
  methods: {
    menuItemClick(key: any) {
      this.select = key;
    },
  },
  created() { },
  mounted() { },
  beforeCreate() { },
  beforeMount() { },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
  activated() { },
})
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.component {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>