<template>
  <div class="module JZKP">
    <div class="patient-panel">
      <div class="patient-left">
        <h3 class="patient-name">胡代宇</h3>
        <span class="patient-pay">自费</span>
        <span class="patient-number">卡号：36************99</span>
        <button class="btn btn-change" @click="showModal" v-waves.button>
          <i class="btn-icon icon-change"></i>
          <span class="btn-text">切换就诊人</span>
        </button>
      </div>
      <div class="patient-right">
        <img class="patient-code" src="../../assets/images/code@2x.png" @click="showCode"/>
        <span class="patient-desc">点击出示就诊二维码</span>
      </div>
    </div>
    <modal :isShow.sync="isShow"></modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';
  import Modal from '../../components/Modal';

  export default {
    components: {Modal},
    name: 'JZKP',
    data() {
      return {
        isShow: false
      };
    },
    methods: Controller
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .JZKP {
    height: 2rem;
    padding: 0.13rem 0.15rem;
    color: @white;
    .patient-panel {
      height: 1.75rem;
      overflow: hidden;
      position: relative;
      border-radius: 0.05rem;
      padding: 0.15rem 1.4rem 0.15rem 0.15rem;
      background: linear-gradient(to right, #0065eb, #00acf6);
      .patient-left {
        font-size: 0;
        .patient-name {
          margin-right: 0.13rem;
          display: inline-block;
          vertical-align: middle;
          letter-spacing: 1px;
          font-size: 0.22rem;
          font-weight: normal;
        }
        .patient-pay {
          height: 0.2rem;
          line-height: 0.2rem;
          display: inline-block;
          vertical-align: middle;
          padding: 0 0.1rem;
          box-shadow: @boxShadow;
          border-radius: 0.03rem;
          background-color: rgba(255, 255, 255, 0.15);
          letter-spacing: 1px;
          font-size: 0.12rem;
        }
        .patient-number {
          display: block;
          margin-top: 0.15rem;
          font-size: 0.14rem;
          line-height: 0.25rem;
        }
        .btn-change {
          height: 0.3rem;
          padding: 0 0.1rem;
          position: absolute;
          bottom: 0.15rem;
          border-radius: @borderRadius;
          background-color: rgba(255, 255, 255, 0.15);
          line-height: 0.3rem;
          box-shadow: @boxShadow;
          color: @white;
          font-size: 0;
          .btn-icon {
            display: inline-block;
            vertical-align: middle;
            font-size: 0.14rem;
            margin-right: 0.05rem;
          }
          .btn-text {
            display: inline-block;
            vertical-align: middle;
            font-size: 0.12rem;
          }
        }
      }
      .patient-right {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.15rem;
        font-size: 0;
        .patient-code {
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 0.04rem;
          background-color: @white;
          border: 0.05rem solid @white;
        }
        .patient-desc {
          display: block;
          height: 0.25rem;
          line-height: 0.25rem;
          font-size: 0.13rem;
        }
      }
    }
  }
</style>
