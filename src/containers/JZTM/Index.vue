<template>
  <div class="FX_ZHYL_JZEWM">
    <error v-if="isFailure" @refresh="exeSelectDefaultCard"></error>
    <div class="content" v-if="isSuccess&&data">
      <div class="row-box-1">
        <span class="name">{{data.name}}</span>
        <span class="card">卡号：{{data.patientCardNo}}</span>
      </div>
      <div class="row-box-2">
        <img class="bar-code" ref="jsbarcode" src=""/>
        <img class="qr-code" :src="data.qrcodeUrl"/>
        <p class="toast">出示就诊二维码到设备扫描</p>
      </div>
      <div class="row-box-3">
        <button class="btn btn-close" @click="closePage">关闭</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  import Controller from './Controller';
  import Error from '../../components/Error';
  import JsBarcode from 'jsbarcode';
  export default {
    components: {Error},
    name: 'JZEWM',
    data() {
      return {};
    },
    created() {
      if (this.isLoading) return;
      this.exeSelectDefaultCard();
    },
    mounted() {
      if (this.isLoading && this.data) {
        console.log('data2:');
        JsBarcode(this.$refs.jsbarcode, 'hello', {
          displayValue: false
        });
      }
    },
    methods: Controller,
    computed: mapState({
      isLoading: state => state.DEFAULT_CARD.isLoading,
      isSuccess: state => state.DEFAULT_CARD.isSuccess,
      isFailure: state => state.DEFAULT_CARD.isFailure,
      data: state => state.DEFAULT_CARD.data
    })
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_JZEWM {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background-color: @white;
    .content {
      height: auto;
      .row-box-1 {
        text-align: center;
        line-height: 0.2rem;
        padding: 0.25rem 0.13rem 0;
        .name {
          font-size: 0.18rem;
        }
        .card {
          color: @fontColor;
        }
        &:after {
          content: '';
          display: block;
          margin-top: 0.25rem;
          border-top: 1px solid @borderColor3;
        }
      }
      .row-box-2 {
        font-size: 0;
        padding-bottom: 0.25rem;
        .bar-code {
          width: 3rem;
          height: 0.85rem;
          display: block;
          margin: 0.24rem auto;
        }
        .qr-code {
          width: 2.35rem;
          height: 2.35rem;
          display: block;
          margin: 0 auto;
        }
        .toast {
          margin-top: 0.25rem;
          text-align: center;
          font-size: 0.14rem;
          color: @fontColor;
        }
      }
      .row-box-3 {
        font-size: 0;
        text-align: center;
        padding-bottom: 0.3rem;
        .btn-close {
          margin: 0 auto;
          padding: 0 0.7rem;
          line-height: 0.35rem;
          border: 1px solid #979797;
          border-radius: @borderRadius;
          font-size: 0.16rem;
          color: @black;
        }
      }
    }
  }
</style>
