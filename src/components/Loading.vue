<template>
  <div class="loading">
    <!--<div class="inner">-->
    <!--<div class="rect"></div>-->
    <!--<div class="rect"></div>-->
    <!--<div class="rect"></div>-->
    <!--<div class="rect"></div>-->
    <!--<div class="rect"></div>-->
    <!--</div>-->
    <div class="inner"></div>
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
    width: 100%;
    height: 100%;
    text-align: center;
    &:before {
      content: '';
      height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
    /*.inner {*/
    /*width: 0.5rem;*/
    /*height: 0.6rem;*/
    /*text-align: center;*/
    /*display: inline-block;*/
    /*vertical-align: middle;*/
    /*font-size: 0px;*/
    /*.rect {*/
    /*width: 0.03rem;*/
    /*height: 100%;*/
    /*display: inline-block;*/
    /*background-color: #2f79ee;*/
    /*animation: loading 1.2s infinite ease-in-out;*/
    /*margin-right: 0.02rem;*/
    /*&:last-child {*/
    /*margin: 0;*/
    /*}*/
    /*&:nth-child(2) {*/
    /*animation-delay: -1.1s;*/
    /*}*/
    /*&:nth-child(3) {*/
    /*animation-delay: -1.0s;*/
    /*}*/
    /*&:nth-child(4) {*/
    /*animation-delay: -0.9s;*/
    /*}*/
    /*&:nth-child(5) {*/
    /*animation-delay: -0.8s;*/
    /*}*/
    /*}*/
    /*}*/
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

  @keyframes loading {
    0%, 40%, 100% {
      transform: scaleY(0.3);
    }
    20% {
      transform: scaleY(1.0);
    }
  }
</style>
