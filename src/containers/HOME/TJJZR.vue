<template>
  <div class="module TJJZR">
    <div class="content">
      <p class="desc">就诊前，请先添加就诊人</p>
      <button class="btn btn-add" @click="addPerson">
        <i class="btn-icon icon-add"></i>
        <span class="btn-text">添加就诊人</span>
      </button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controllers from './Controller'

  export default {
    name: 'TJJZR',
    data() {
      return {};
    },
    methods: Controllers
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .TJJZR {
    padding: 0.15rem;
    .content {
      height: auto;
      padding: 0.375rem 0;
      position: relative;
      border-radius: @borderRadius;
      background: linear-gradient(to right, #0066ec, #00bcfa);
      text-align: center;
      font-size: 0.18rem;
      color: @white;
      .desc {
        position: relative;
        z-index: 1;
        margin-bottom: 0.28rem;
      }
      .btn-add {
        position: relative;
        z-index: 1;
        margin: 0 auto;
        padding: 0 0.65rem;
        border-radius: 0.05rem;
        border: 1px solid @white;
        line-height: 0.5rem;
        color: @white;
        font-size: 0;
        .btn-icon {
          margin-right: 0.1rem;
          display: inline-block;
          vertical-align: middle;
          font-size: 0.18rem;
        }
        .btn-text {
          display: inline-block;
          vertical-align: middle;
          font-size: 0.18rem;
        }
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: 85% auto;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url("../../assets/images/person@2x.png");
      }
    }
  }
</style>
