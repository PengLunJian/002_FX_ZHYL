<template>
  <div class="module DSMK">
    <div class="link-item" v-waves.block>
      <i class="link-icon icon-report"></i>
      <span class="link-text">检查报告</span>
      <i class="link-icon icon-next"></i>
    </div>
    <div class="link-item" v-waves.block>
      <i class="link-icon icon-stay"></i>
      <span class="link-text">待检查</span>
      <i class="link-icon icon-next"></i>
    </div>
    <div class="link-item" v-waves.block>
      <i class="link-icon icon-print"></i>
      <span class="link-text">发票打印</span>
      <i class="link-icon icon-next"></i>
    </div>
    <div class="link-item" v-waves.block>
      <i class="link-icon icon-file"></i>
      <span class="link-text">健康档案</span>
      <i class="link-icon icon-next"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'DSMK',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .DSMK {
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
          box-shadow: @boxShadow;
          color: @buttonColor;
          font-size: 0.15rem;
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
