<template>
  <div class="module DJCMK" v-waves.block>
    <div class="col-box-1">
      <div class="column">当前叫号</div>
      <div class="column">我的叫号</div>
      <div class="column">12</div>
      <div class="column">18</div>
    </div>
    <div class="col-box-2">
      <div class="room">眼科中心</div>
      <div class="name">何晗栩<span>(主任医师)</span></div>
      <div class="date">2018/09/08 下午</div>
    </div>
    <div class="col-box-3">
      <i class="icon-navigation"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'DJCMK',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .DJCMK {
    height: 0.84rem;
    position: relative;
    padding: 0 0.7rem 0 0.84rem;
    .col-box-1 {
      width: 0.84rem;
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      .column {
        width: 50%;
        height: 0.42rem;
        float: left;
        color: @white;
        font-size: 0.12rem;
        &:nth-child(1) {
          padding: 0.06rem 0.05rem;
          background-color: #00a9f6;
          border-right: 1px solid @white;
          border-bottom: 1px solid @white;
        }
        &:nth-child(2) {
          padding: 0.06rem 0.05rem;
          background-color: #00a9f6;
          border-bottom: 1px solid @white;
        }
        &:nth-child(3) {
          line-height: 0.42rem;
          background-color: #0062eb;
          border-right: 1px solid @white;
          font-size: 0.18rem;
        }
        &:nth-child(4) {
          line-height: 0.42rem;
          background-color: #0062eb;
          font-size: 0.18rem;
        }
      }
    }
    .col-box-2 {
      padding: 0.1rem 0.2rem;
      line-height: 0.2rem;
      .room {
        margin-bottom: 0.02rem;
        font-size: 0.16rem;
      }
      .name {
        margin-bottom: 0.02rem;
        color: @fontColor;
        font-size: 0.14rem;
        span {
          padding-left: 0.05rem;
          font-size: 0.12rem;
        }
      }
      .date {
        color: @fontColor;
        font-size: 0.14rem;
      }
    }
    .col-box-3 {
      width: 0.7rem;
      position: absolute;
      top: 0;
      right: 0;
      height: 0.84rem;
      .icon-navigation {
        display: block;
        transform: rotate(40deg);
        font-size: 0.3rem;
        color: #5abf01;
        line-height: 0.84rem;
        text-align: center;
      }
    }
  }
</style>
