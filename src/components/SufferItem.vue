<template>
  <div class="module JZRLB" :class="item.IsDefault?'active':''">
    <div class="row-box-1">
      <span class="name">{{item.Name}}</span>
      <!--<span class="tag">自费</span>-->
      <div class="right">
        <label class="label">电子就诊卡</label>
        <span class="card">卡号：{{item.mCardNo}}</span>
      </div>
    </div>
    <div class="row-box-2">
      <label class="label">文荣医院</label>
      <span class="span">当前就诊人</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'suffer-item',
    data() {
      return {};
    },
    props: ['item'],
    mounted() {
    }
  };
</script>

<style scoped lang="less">
  @import "../assets/less/variable";

  .JZRLB {
    height: 0.91rem;
    box-shadow: none;
    padding: 0.1rem;
    overflow-x: hidden;
    position: relative;
    background: linear-gradient(to right, #00a9f7, #005ceb);
    color: @white;
    .row-box-1 {
      padding-bottom: 0.1rem;
      border-bottom: 1px solid @white;
      font-size: 0;
      &:after {
        content: '';
        display: block;
        clear: both;
      }
      .name {
        height: 0.3rem;
        display: inline-block;
        vertical-align: middle;
        font-size: 0.2rem;
        line-height: 0.3rem;
        margin-right: 0.1rem;
      }
      .tag {
        height: 0.18rem;
        padding: 0 0.05rem;
        font-size: 0.12rem;
        line-height: 0.18rem;
        display: inline-block;
        vertical-align: middle;
        border-radius: 0.03rem;
        background-color: rgba(255, 255, 255, .15);
      }
      .right {
        float: right;
        height: 0.3rem;
        font-size: 0.11rem;
        line-height: 0.15rem;
        .label {
          display: block;
        }
        .card {
          display: block;
        }
      }
    }
    .row-box-2 {
      padding-top: 0.1rem;
      font-size: 0;
      .label {
        display: inline-block;
        line-height: 0.2rem;
        font-size: 0.12rem;
      }
      .span {
        float: right;
        line-height: 0.2rem;
        font-size: 0.12rem;
      }
    }
    &.active {
      &:before {
        content: '默认';
        display: block;
        padding: 0 0.2rem;
        line-height: 0.18rem;
        position: absolute;
        top: 0.04rem;
        right: -0.18rem;
        font-size: 0.09rem;
        transform: rotate(45deg);
        background-color: @activeColor;
      }
    }
  }
</style>
