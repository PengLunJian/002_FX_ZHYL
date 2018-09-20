<template>
  <div class="module JBXX">
    <div class="row-box-1">
      <h3 class="small-title">基本信息</h3>
    </div>
    <div class="row-box-2">
      <div class="group">
        <label class="label">姓名</label>
        <span class="span">胡代宇</span>
      </div>
      <div class="group">
        <label class="label">身份证号</label>
        <span class="span">342523199007244618</span>
      </div>
      <div class="group">
        <label class="label">就诊卡</label>
        <span class="span">36*************99</span>
      </div>
      <div class="group">
        <label class="label">手机号</label>
        <span class="span">18130278679</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'JBXX',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .JBXX {
    .row-box-1 {
      padding: 0 0.15rem;
      line-height: 0.35rem;
      background-color: @bgColor;
      .small-title {
        font-weight: normal;
        font-size: 0.13rem;
        color: @fontColor;
      }
    }
    .row-box-2 {
      .group {
        line-height: 0.45rem;
        padding: 0 0 0 0.15rem;
        font-size: 0.14rem;
        .label {

        }
        .span {
          float: right;
          padding-right: 0.15rem;
          color: @fontColor;
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
  }
</style>
