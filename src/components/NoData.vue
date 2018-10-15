<template>
  <div class="no-data" v-if="isShow">
    <div class="content">
      <i class="icon-empty"></i>
      <p class="text">暂无数据</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'no-data',
    data() {
      return {};
    },
    props: ['isShow']
  };
</script>

<style scoped lang="less">
  @import '../assets/less/variable';

  .no-data {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: @white;
    text-align: center;
    font-size: 0;
    &:before {
      content: '';
      height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
    .content {
      display: inline-block;
      vertical-align: middle;
    }
    .icon-empty {
      font-size: 0.8rem;
    }
    .text {
      font-size: 0.13rem;
    }
  }
</style>
