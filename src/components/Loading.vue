<template>
  <div class="loading" :style="'height:'+height">
    <div class="inner"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Loading',
    data() {
      return {};
    },
    props: ['height']
  };
</script>

<style scoped lang="less">
  @import '../assets/less/variable';

  .loading {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 0;
    &:before {
      content: '';
      height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
    .inner {
      width: 0.2rem;
      height: 0.2rem;
      display: inline-block;
      vertical-align: middle;
      background-size: 100% auto;
      background-repeat: no-repeat;
      background-position: center center;
      background-image: url('../assets/images/loading_blue.gif');
    }
  }
</style>
