<template>
  <div class="test">
    <h2>名称：{{ name }}</h2>
    <h2>地址：{{ address }}</h2>
    <slot />
  </div>
</template>

<script lang="ts">

export default {
  components: {},
  data() {
    return {
      name: '杜也',
      address: '南京',
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() { },
  mounted() { },
  beforeCreate() { },
  beforeMount() { },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
  activated() { },
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.test {
  color: black;
}
</style>