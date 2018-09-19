<template>
  <div :class="'true'===expired?'module GHMK expired':'module GHMK'">
    <div class="col-box-1">
      <h3 class="name">眼科中心</h3>
      <div class="date">
        <label class="label">提交时间：</label>
        <span class="span">2018/09/08 09:36</span>
      </div>
    </div>
    <div class="col-box-2">
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
    <div class="col-box-3">
      <button class="btn btn-detail" v-waves.block>查看详情</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'GHMK',
    data () {
      return {}
    },
    props: [
      'expired'
    ],
    mounted () {
      console.log(this)
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .GHMK {
    height: auto;
    position: relative;
    .col-box-1 {
      padding: 0 0.15rem;
      border-bottom: 1px solid @borderColor;
      .name {
        display: inline-block;
        font-weight: normal;
        font-size: 0.15rem;
        line-height: 0.36rem;
      }
      .date {
        float: right;
        line-height: 0.36rem;
        font-size: 0.12rem;
        .label {

        }
        .span {

        }
      }
    }
    .col-box-2 {
      padding: 0.1rem 0.15rem;
      border-bottom: 1px solid @borderColor;
      .group {
        line-height: 0.2rem;
        margin-bottom: 0.04rem;
        .label {

        }
        .span {
          color: @fontColor;
        }
        &:last-child {
          margin: 0;
        }
      }
    }
    .col-box-3 {
      .btn-detail {
        width: 100%;
        display: block;
        line-height: 0.4rem;
        text-align: center;
        font-size: 0.15rem;
      }
    }
    &.expired {
      &:before {
        content: 'Sold Out';
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
        background-color: rgba(0, 0, 0, .5);
      }
    }
  }
</style>
