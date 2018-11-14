<template>
  <div class="module YSXX">
    <div class="col-box-1">
      <img src="../../assets/images/doctor@2x.png"/>
    </div>
    <div class="col-box-2">
      <div class="name">杨永信&nbsp;<span class="span">(在职医生)</span></div>
      <div class="group ellipsis">
        <label class="label">职称：</label>
        <span class="span">雷神.艾尼路</span>
      </div>
      <div class="group ellipsis">
        <label class="label">科室：</label>
        <span class="span">电疗科</span>
      </div>
      <div class="group ellipsis">
        <label class="label">擅长：</label>
        <span class="span">让孩子告别网瘾、用心戒网瘾</span>
      </div>
    </div>
    <!--<div class="col-box-3">-->
      <!--<button class="btn btn-collection" v-waves.block>收藏医生</button>-->
    <!--</div>-->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'YSXX',
    data() {
      return {};
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .YSXX {
    height: auto;
    overflow: hidden;
    position: relative;
    padding: 0.15rem 0.9rem;
    font-size: 0.12rem;
    .col-box-1 {
      width: 0.9rem;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      padding-left: 0.15rem;
      font-size: 0;
      img {
        width: 0.65rem;
        height: 0.8rem;
        vertical-align: middle;
        background-color: #def9f4;
        border-radius: @borderRadius;
      }
      &:before {
        content: '';
        height: 100%;
        display: inline-block;
        vertical-align: middle;
      }
    }
    .col-box-2 {
      .name {
        margin-bottom: 0.04rem;
        font-size: 0.14rem;
      }
      .group {
        line-height: 0.2rem;
      }
      .span {
        color: #808080;
        font-size: 0.12rem;
      }
    }
    .col-box-3 {
      width: 0.9rem;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      text-align: right;
      padding-right: 0.15rem;
      font-size: 0;
      .btn-collection {
        line-height: 0.3rem;
        padding: 0 0.1rem;
        display: inline-block;
        vertical-align: middle;
        border: 1px solid #589af0;
        border-radius: 0.03rem;
        font-size: 0.13rem;
        color: #589af0;
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
