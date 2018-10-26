<template>
  <div class="loading">
    <p class="text">加载中...</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Loading',
    data() {
      return {};
    },
    methods: {}
  };
</script>

<style scoped lang="less">
  @import '../assets/less/variable';

  .loading {
    background-color: @bgColor;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    text-align: center;
    .text {
      line-height: 100px;
    }
  }
</style>
