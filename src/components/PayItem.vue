<template>
  <div class="module JFLB">
    <div class="row-box-1">
      <div class="name">
        <label class="label">代缴费用</label>
        <span class="time">{{item.moDate}}</span>
      </div>
      <div class="price">
        <label class="label">{{item.cost}}</label>
        <span class="unit">元</span>
      </div>
    </div>
    <div class="row-box-2">
      <div class="group">
        <label class="label">费用名称：</label>
        <span class="span">{{item.transType}}</span>
      </div>
      <div class="group">
        <label class="label">缴费对象：</label>
        <span class="span">{{item.itemName}}</span>
      </div>
      <div class="group">
        <label class="label">开方医生：</label>
        <span class="span">{{item.exeDoct}}</span>
      </div>
    </div>
    <div class="row-box-3">
      <button class="btn btn-detail">查看详情</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'PayItem',
    data() {
      return {};
    },
    props: ['item']
  };
</script>

<style scoped lang="less">
  @import "../assets/less/variable";

  .JFLB {
    height: auto;
    .row-box-1 {
      padding: 0.1rem 0.15rem;
      border-bottom: 1px solid @borderColor;
      .name {
        font-size: 0.15rem;
        width: 2rem;
        float: left;
        label {
          display: inline-block;
          margin-top: 0.05rem;
        }
        .time {
          display: block;
          margin: 0.04rem 0;
          padding-left: 0.05rem;
          color: @fontColor;
          font-size: 0.12rem;
        }
      }
      .price {
        text-align: center;
        margin-bottom: 0.05rem;
        .label {
          font-size: 0.3rem;
          display: inline-block;
          margin-top: 0.05rem;
        }
      }
    }
    .row-box-2 {
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
    .row-box-3 {
      .btn-detail {
        width: 100%;
        display: block;
        line-height: 0.45rem;
        text-align: center;
        font-size: 0.15rem;
      }
    }
  }
</style>
