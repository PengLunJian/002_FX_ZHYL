<template>
  <div class="FX_ZHYL_YYXX">
    <div class="module DYBF">
      <div class="form-group">
        <label class="form-label">就诊人</label>
        <input class="form-input icon" name="name" value="胡代宇" type="text"/>
        <i class="form-icon icon-next"></i>
      </div>
      <div class="form-group">
        <label class="form-label">就诊时间</label>
        <input class="form-input" name="name" value="2017/07/18 下午" type="text"/>
      </div>
      <div class="form-group">
        <label class="form-label">就诊科室</label>
        <input class="form-input" name="name" value="眼科" type="text"/>
      </div>
      <div class="form-group">
        <label class="form-label borderNone">医生姓名</label>
        <input class="form-input" name="name" value="胡代宇" type="text"/>
      </div>
    </div>
    <div class="module DEBF">
      <div class="form-group">
        <label class="form-label">门诊费用(不含挂号费)</label>
        <input class="form-input" name="name" value="180元" type="text"/>
      </div>
      <div class="form-group">
        <label class="form-label borderNone">支付方式</label>
        <input class="form-input" name="name" value="去医院支付" type="text"/>
      </div>
    </div>
    <div class="module DSMK">
      <button class="btn btn-submit" @click="handlerSubmit">提交</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';

  export default {
    name: 'YYXX',
    data() {
      return {
        config: null
      };
    },
    created() {
      this.exeSelectRegisterPay();
    },
    methods: Controller
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_YYXX {
    min-height: 100vh;
    background-color: @bgColor;
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
