<template>
  <div class="module GHMK">
    <div class="row-box-1">
      <h3 class="name">{{item.deptName}}</h3>
      <div class="date">
        <label class="label">提交时间：</label>
        <span class="span">{{item.date}}</span>
      </div>
    </div>
    <div class="row-box-2">
      <div class="group">
        <label class="label">就诊人：</label>
        <span class="span">{{item.idCardName}}</span>
      </div>
      <div class="group">
        <label class="label">就诊人卡号：</label>
        <span class="span">{{item.idCardNo}}</span>
      </div>
      <div class="group">
        <label class="label">就诊科室：</label>
        <span class="span">{{item.deptName}}</span>
      </div>
      <div class="group">
        <label class="label">支付状况：</label>
        <span class="span">{{item.isPay?'已支付':'待支付'}}</span>
      </div>
    </div>
    <div class="row-box-3">
      <button class="btn btn-detail" @click="showDetails">查看详情</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'RegItem',
    data() {
      return {};
    },
    props: ['item'],
    methods: {
      showDetails: function () {
        this.$router.push({
          path: this.$routes.GHXQ.path
        });
      }
    }
  };
</script>

<style scoped lang="less">
  @import "../assets/less/variable";

  .GHMK {
    height: auto;
    position: relative;
    .row-box-1 {
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
    .row-box-2 {
      padding: 0.1rem 0.15rem;
      border-bottom: 1px solid @borderColor;
      .group {
        line-height: 0.2rem;
        margin-bottom: 0.04rem;
        font-size: 0.13rem;
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
