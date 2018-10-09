<template>
  <div class="module YYMK" :class="slotOut">
    <div class="row-box-1">
      <h3 class="name">何晗栩<span class="span">(正主任医师)</span></h3>
      <div class="date">
        <label class="label">提交时间：</label>
        <span class="span">2018/09/08 09:36</span>
      </div>
    </div>
    <div class="row-box-2">
      <div class="group">
        <label class="label">就诊人：</label>
        <span class="span">胡代宇</span>
      </div>
      <div class="group">
        <label class="label">就诊人卡号：</label>
        <span class="span">36************99</span>
      </div>
      <div class="group">
        <label class="label">就诊科室：</label>
        <span class="span">眼科中心</span>
      </div>
      <div class="group">
        <label class="label">支付状况：</label>
        <span class="span">待支付</span>
      </div>
    </div>
    <div class="row-box-3">
      <button class="btn btn-detail" v-waves.block>查看详情</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'SubItem',
    props: ['slotOut'],
    data () {
      return {};
    }
  };
</script>

<style scoped lang="less">
  @import "../assets/less/variable";

  .YYMK {
    height: auto;
    position: relative;
    .label {
      font-size: 0.13rem;
    }
    .span {
      color: @fontColor;
      font-size: 0.13rem;
    }
    .row-box-1 {
      padding: 0 0.15rem;
      border-bottom: 1px solid @borderColor;
      .name {
        display: inline-block;
        font-weight: normal;
        font-size: 0.15rem;
        line-height: 0.36rem;
        .span {
          padding-left: 0.05rem;
        }
      }
      .date {
        float: right;
        line-height: 0.36rem;
        font-size: 0.12rem;
        .label {
          font-size: 0.12rem;
        }
        .span {
          color: #333333;
          font-size: 0.12rem;
        }
      }
    }
    .row-box-2 {
      padding: 0.1rem 0.15rem;
      border-bottom: 1px solid @borderColor;
      .group {
        line-height: 0.2rem;
        margin-bottom: 0.04rem;
        &:last-child {
          margin: 0;
        }
      }
    }
    .row-box-3 {
      .btn-detail {
        width: 100%;
        display: block;
        line-height: 0.4rem;
        text-align: center;
        font-size: 0.15rem;
      }
    }
    &.slot-out {
      &:before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1000;
        color: @white;
        font-size: 0.3rem;
        text-align: center;
        line-height: 1.9rem;
        background-size: 1.2rem auto;
        background-repeat: no-repeat;
        background-position: 2.4rem 0.8rem;
        background-image: url('../assets/images/slot_out@2x.png');
      }
    }
  }
</style>
