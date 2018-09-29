<template>
  <div class="module DEMK">
    <div class="link-item" v-waves.block>
      <i class="link-icon icon-account"></i>
      <span class="link-text">个人信息</span>
      <i class="link-icon icon-next"></i>
    </div>
    <div class="link-item" v-waves.block>
      <i class="link-icon icon-money"></i>
      <span class="link-text">缴费记录</span>
      <i class="link-icon icon-next"></i>
    </div>
    <div class="link-item" v-waves.block>
      <i class="link-icon icon-before"></i>
      <span class="link-text">我的预约</span>
      <i class="link-icon icon-next"></i>
    </div>
    <div class="link-item" v-waves.block>
      <i class="link-icon icon-plus"></i>
      <span class="link-text">我的挂号</span>
      <i class="link-icon icon-next"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'DEMK',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .DEMK {
    min-height: 1.78rem;
    .link-item {
      line-height: 0.45rem;
      padding-left: 0.15rem;
      position: relative;
      font-size: 0;
      .link-icon {
        text-align: center;
        line-height: 0.25rem;
        display: inline-block;
        vertical-align: middle;
        font-size: 0.13rem;
        &:first-child {
          width: 0.25rem;
          height: 0.25rem;
          border-radius: 100%;
          margin-right: 0.1rem;
          background-color: #dbecff;
          color: @buttonColor;
          font-size: 0.15rem;
        }
        &.icon-money {
          font-size: 0.18rem;
        }
        &.icon-before {
          font-size: 0.18rem;
        }
      }
      .link-text {
        display: inline-block;
        vertical-align: middle;
        font-size: 0.15rem;
      }
      .icon-next {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 0.15rem;
        height: 100%;
        line-height: 0.45rem;
      }
      &:after {
        content: '';
        display: block;
        border-top: 1px solid @borderColor;
      }
      &:last-child {
        &:after {
          border: none;
        }
      }
    }
  }
</style>
