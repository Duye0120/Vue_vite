<template>
  <a-space direction="vertical" align="center" class="content">
    <div class="learnArea">
      <h1 v-text="msg" ref="title" />
      <a-space direction="vertical" align="center" class="learnArea">
        <a-button type="primary" @click="showTopDOM">点我输出上方DOM元素</a-button>
        <a-button type="primary" @click="showBottomDom">点我输出下方DOM元素</a-button>
      </a-space>
      <School ref="school" />
    </div>
    <a-typography>
      <a-typography-title :heading="6">
        Ref属性
      </a-typography-title>
      <a-typography-paragraph>
        ref是一个特殊的attribute，它允许我们在特定的DOM元素或子组件实例被挂载后获得对它的直接引用。
      </a-typography-paragraph>
      <a-typography-paragraph>
        用处：在组件挂载时，聚焦在某个元素上，或在挂载的时候初始化一个第三方库。
      </a-typography-paragraph>
    </a-typography>
  </a-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import School from '@/components/School.vue';
export default defineComponent({
  components: {
    School,
  },
  data() {
    return {
      msg: 'hello world',
    };
  },
  computed: {},
  watch: {},
  methods: {
    showTopDOM() {
      console.log(this.$refs.title); // 真实DOM元素
    },
    showBottomDom() {
      console.log(this.$refs.school); // 视频上说的是组件的实例对象，但是这里显示的proxy
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
h1 {
  color: red;
}

.content {
  width: 100%;
  height: 100%;
  padding: 20px;
}
</style>