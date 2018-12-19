<template>
  <div class="FX_ZHYL_YYXX">
    <div class="module DYBF">
      <div class="form-group">
        <label class="form-label">就诊人</label>
        <span class="form-input">{{name}}</span>
      </div>
      <div class="form-group">
        <label class="form-label">就诊时间</label>
        <span class="form-input">{{date}}</span>
      </div>
      <div class="form-group">
        <label class="form-label">就诊科室</label>
        <span class="form-input">{{deptName}}</span>
      </div>
      <div class="form-group">
        <label class="form-label borderNone">医生姓名</label>
        <span class="form-input">{{doctName||'无'}}</span>
      </div>
    </div>
    <div class="module DEBF">
      <div class="form-group">
        <label class="form-label">门诊费用(不含挂号费)</label>
        <span class="form-input">{{price}}</span>
      </div>
      <div class="form-group">
        <label class="form-label borderNone">支付方式</label>
        <span class="form-input">{{payment}}</span>
      </div>
    </div>
    <div class="module DSMK">
      <button class="btn btn-submit" @click="handlerSubmit">提交</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  import Controller from './Controller';

  export default {
    name: 'YYXX',
    data() {
      return {
        name: '',
        date: '',
        price: '',
        deptName: '',
        doctName: '',
        payment: '微信支付',
        jsApiList: {jsApiList: ['chooseWXPay']}
      };
    },
    created() {
      this.exeFillParams();
      // this.exeSelectJSSDKConfig();
      this.exeSelectDefaultCard();
    },
    methods: Controller,
    computed: mapState({
      isLoading: state => state.DEFAULT_CARD.isLoading,
      isSuccess: state => state.DEFAULT_CARD.isSuccess,
      isFailure: state => state.DEFAULT_CARD.isFailure,
      data: state => state.DEFAULT_CARD.data || {}
    })
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_YYXX {
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    background-color: @bgColor;
    -webkit-overflow-scrolling: touch;
    .module {
      background-color: transparent;
      box-shadow: none;
    }
    .form-group {
      position: relative;
      padding: 0 0 0 0.15rem;
      background-color: @white;
      .form-label {
        display: block;
        height: 0.5rem;
        line-height: 0.5rem;
        border-bottom: 1px solid #e5e5e5;
        font-size: 0.14rem;
      }
      .form-input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        line-height: 0.5rem;
        padding-right: 0.15rem;
        background-color: transparent;
        text-align: right;
        font-size: 0.14rem;
        color: #808080;
        &.icon {
          padding-right: 0.4rem;
        }
      }
      .form-icon {
        position: absolute;
        top: 0;
        right: 0;
        width: 0.4rem;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
      }
    }
    .btn-submit {
      width: 90%;
      height: 0.5rem;
      display: block;
      overflow: hidden;
      margin: 0.35rem auto;
      line-height: 0.5rem;
      background-color: #0062eb;
      border-radius: @borderRadius;
      font-size: 0.16rem;
      color: @white;
    }
  }
</style>
