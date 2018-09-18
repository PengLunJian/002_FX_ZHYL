<template>
  <div class="module DYMK">
    <div class="col-box-1">
      <img src="../../assets/images/doctor@2x.png"/>
    </div>
    <div class="col-box-2">
      <em class="name">杨永信</em>
      <span class="span">当前就诊卡</span>
      <span class="span">卡号：36************99</span>
    </div>
    <div class="col-box-3">
      <button class="btn btn-manager" v-waves.block>就诊卡管理</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'DYMK',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .DYMK {
    position: relative;
    min-height: 1.05rem;
    padding: 0.15rem 1rem;
    .col-box-1 {
      position: absolute;
      top: 0;
      left: 0;
      width: 1rem;
      height: 100%;
      font-size: 0;
      text-align: right;
      img {
        width: 0.75rem;
        height: 0.75rem;
        display: inline-block;
        vertical-align: middle;
      }
      &:before {
        content: '';
        height: 100%;
        display: inline-block;
        vertical-align: middle;
      }
    }
    .col-box-2 {
      padding: 0.1rem;
      .name {
        display: block;
        margin-bottom: 0.05rem;
        font-size: 0.14rem;
      }
      .span {
        display: block;
        color: @fontColor;
        line-height: 0.2rem;
      }
    }
    .col-box-3 {
      width: 1rem;
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      text-align: left;
      font-size: 0;
      .btn-manager {
        padding: 0 0.1rem;
        line-height: 0.3rem;
        display: inline-block;
        vertical-align: middle;
        border-radius: @borderRadius;
        border: 1px solid @buttonColor;
        color: @buttonColor;
        font-size: 0.12rem;
      }
      &:before {
        content: '';
        height: 100%;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
</style>
