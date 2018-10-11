<template>
  <div class="FX_ZHYL_RLSM">
    <div class="form-group" @click="handlerScanner">
      <label class="form-label">身份验证</label>
      <i class="form-icon icon-next"></i>
    </div>
    <div class="form-group">
      <button class="btn btn-next  waves-effect waves-block"
              :class="status" v-waves.block>下一步
      </button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controllers from './Controller';
  export default{
    name: 'RLSM',
    data () {
      return {
        status: 'disabled'
      };
    },
    methods: Controllers
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_RLSM {
    background-color: @bgColor;
    .form-group {
      position: relative;
      padding: 0 0.15rem;
      background-color: @white;
      border-bottom: 1px solid @borderColor;
      .form-label {
        line-height: 0.45rem;
        font-size: 0.16rem;
      }
      .form-icon {
        position: absolute;
        top: 0;
        right: 0;
        width: 0.45rem;
        height: 100%;
        text-align: center;
        line-height: 0.45rem;
      }
      .btn-next {
        width: 100%;
        display: block;
        line-height: 0.47rem;
        transition: all 300ms ease;
        border-radius: @borderRadius;
        border: 1px solid @buttonColor2;
        background-color: @buttonColor2;
        font-size: 0.16rem;
        color: @white;
      }
      &:nth-child(2) {
        border: none;
        padding-top: 1.25rem;
        background-color: transparent;
      }
    }
  }
</style>
