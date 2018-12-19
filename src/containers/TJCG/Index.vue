<template>
  <div class="FX_ZHYL_TJCG">
    <div class="content">
      <div class="success-icon"></div>
      <div class="success-text">
        <p class="success-label">提交成功</p>
        <p class="success-timer">{{count}}s后自动跳转到首页</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';

  export default {
    name: 'TJCG',
    data() {
      return {
        timer: null,
        count: 3
      };
    },
    methods: Controller,
    mounted() {
      this.startTimer();
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_TJCG {
    height: 100vh;
    background-color: @white;
    -webkit-overflow-scrolling: touch;
    text-align: center;
    font-size: 0;
    &:before {
      content: '';
      height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
    .content {
      margin-top: -1.5rem;
      display: inline-block;
      vertical-align: middle;
      .success-icon {
        width: 0.9rem;
        height: 0.9rem;
        margin: 0 auto;
        margin-bottom: 0.15rem;
        background-size: 0.9rem auto;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url('../../assets/images/success.png');
      }
      .success-text {
        text-align: center;
        line-height: 0.2rem;
        .success-label {
          margin-bottom: 0.15rem;
          font-size: 0.2rem;
          color: @buttonColor;
        }
        .success-timer {
          font-size: 0.14rem;
          color: @fontColor;
        }
      }
    }
  }
</style>
