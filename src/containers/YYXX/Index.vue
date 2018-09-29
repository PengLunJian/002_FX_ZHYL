<template>
  <div class="FX_ZHYL_YYXX">
    <d-y-b-f></d-y-b-f>
    <d-e-b-f></d-e-b-f>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller'
  import DYBF from './DYBF'
  import DEBF from './DEBF'
  export default{
    components: {
      DEBF,
      DYBF
    },
    name: 'YYXX',
    data () {
      return {}
    },
    methods: Controller
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_YYXX {
    background-color: @bgColor;
  }

  .patient-form {
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
      margin: 0.35rem auto;
      line-height: 0.5rem;
      background-color: #0062eb;
      border-radius: @borderRadius;
      font-size: 0.16rem;
      color: @white;
    }
  }
</style>
