<template>
  <div class="module XQLB">
    <div class="row-box-1">
      <div class="group">
        <img src="../assets/images/doctor@2x.png"/>
        <label class="label">何晗栩</label>
        <span class="span">(郑主任医师)</span>
        <em class="em">未支付</em>
      </div>
    </div>
    <div class="row-box-2">
      <div class="group">
        <label class="label">就诊医院</label>
        <span class="span">芜湖市第二人民医院</span>
      </div>
      <div class="group">
        <label class="label">就诊科室</label>
        <span class="span">眼科</span>
      </div>
      <div class="group">
        <label class="label">就诊类别</label>
        <span class="span">专家门诊</span>
      </div>
      <div class="group">
        <label class="label">就诊时间</label>
        <span class="span">2018/09/08/ 下午</span>
      </div>
      <div class="group">
        <label class="label">就诊患者</label>
        <span class="span">胡代宇</span>
      </div>
      <div class="group">
        <label class="label">门诊费用</label>
        <span class="span">120.00元(不含挂号费)</span>
      </div>
    </div>
    <div class="row-box-3">
      <button class="btn btn-confirm" v-waves.block>去缴费</button>
      <button class="btn btn-cancel" v-waves.block>取消预约</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'SubDetail',
    data () {
      return {};
    }
  };
</script>

<style scoped lang="less">
  @import "../assets/less/variable";

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
      padding-right: 0.15rem;
      color: @buttonColor;
      font-size: 0.14rem;
    }
    .row-box-1 {
      height: auto;
      line-height: 0.45rem;
      padding-left: 0.15rem;
      font-size: 0;
      img {
        width: 0.35rem;
        height: 0.35rem;
        margin-right: 0.15rem;
        display: inline-block;
        vertical-align: middle;
      }
      .label {
        padding: 0;
        margin-right: 0.05rem;
        display: inline-block;
        vertical-align: middle;
      }
      .span {
        font-size: 0.12rem;
        display: inline-block;
        vertical-align: middle;
      }
      &:after {
        content: '';
        display: block;
        border-bottom: 1px solid @borderColor;
      }
    }
    .row-box-2 {
      padding: 0.1rem 0rem;
      border-bottom: 1px solid @borderColor;
      .group {
        padding: 0 0.15rem;
        line-height: 0.23rem;
      }
    }
    .row-box-3 {
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
