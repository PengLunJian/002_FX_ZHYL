<template>
  <div class="tab-bar">
    <div class="tab-item" v-waves.block>待支付</div>
    <div class="tab-item" v-waves.block>已支付</div>
    <div class="border"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: '',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  .tab-bar {
    height: auto;
    position: relative;
    text-align: center;
    .tab-item {
      width: 50%;
      float: left;
      height: 0.45rem;
      line-height: 0.45rem;
    }
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }
</style>
