<template>
  <div class="module XQLB">
    <div class="col-box-1">
      <div class="group">
        <label class="label">挂号单号</label>
        <span class="span">362426198709865499</span>
        <em class="em">未支付</em>
      </div>
    </div>
    <div class="col-box-2">
      <div class="group">
        <label class="label">就诊医院</label>
        <span class="span">芜湖市第二人民医院</span>
      </div>
      <div class="group">
        <label class="label">就诊科室</label>
        <span class="span">眼科</span>
      </div>
      <div class="group">
        <label class="label">就诊医生</label>
        <span class="span">何晗栩</span>
      </div>
      <div class="group">
        <label class="label">就诊类别</label>
        <span class="span">专家门诊</span>
      </div>
      <div class="group">
        <label class="label">就诊时间</label>
        <span class="span">2018/09/08</span>
      </div>
      <div class="group">
        <label class="label">就诊患者</label>
        <span class="span">胡代宇</span>
      </div>
      <div class="group">
        <label class="label">挂号费用</label>
        <span class="span">20.00元</span>
      </div>
    </div>
    <div class="col-box-3">
      <button class="btn btn-confirm" v-waves.block>去缴费</button>
      <button class="btn btn-cancel" v-waves.block>取消挂号</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'XQLB',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .XQLB {
    height: auto;
    .label {
      padding-right: 0.2rem;
      font-size: 0.14rem;
    }
    .span {
      color: @fontColor;
      font-size: 0.14rem;
    }
    .em {
      float: right;
      color: @buttonColor;
      font-size: 0.14rem;
    }
    .col-box-1 {
      height: auto;
      padding: 0 0.15rem;
      line-height: 0.45rem;
      border-bottom: 1px solid @borderColor;
    }
    .col-box-2 {
      padding: 0.1rem 0rem;
      border-bottom: 1px solid @borderColor;
      .group {
        padding: 0 0.15rem;
        line-height: 0.23rem;
      }
    }
    .col-box-3 {
      font-size: 0;
      text-align: right;
      padding: 0.1rem 0.15rem;
      .btn {
        line-height: 0.3rem;
        padding: 0 0.15rem;
        display: inline-block;
        vertical-align: middle;
        margin-left: 0.15rem;
        border-radius: @borderRadius;
        font-size: 0.13rem;
        &.btn-confirm {
          color: @buttonColor;
          border: 1px solid @buttonColor;
        }
        &.btn-cancel {
          color: @fontColor;
          border: 1px solid @borderColor;
        }
      }
    }
  }
</style>
