<template>
  <div class="FX_ZHYL_JCXX">
    <div class="form-group">
      <label class="form-label">费别</label>
      <span class="form-value">请选择</span>
      <i class="form-icon icon-next"></i>
    </div>
    <div class="form-group">
      <label class="form-label">就诊人与你的关系</label>
      <span class="form-value">请选择</span>
      <i class="form-icon icon-next"></i>
    </div>
    <div class="form-group">
      <button class="btn btn-confirm" v-waves.block>下一步</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'JCXX',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_JCXX {
    .form-group {
      position: relative;
      line-height: 0.45rem;
      margin-bottom: 0.15rem;
      background-color: @white;
      padding: 0 0.45rem 0 0.15rem;
      border-bottom: 1px solid @borderColor;
      font-size: 0.14rem;
      .form-label {

      }
      .form-value {
        float: right;
        color: @fontColor;
      }
      .form-icon {
        position: absolute;
        top: 0;
        right: 0;
        width: 0.45rem;
        height: 100%;
        line-height: 0.45rem;
        text-align: center;
      }
      &:last-child {
        padding: 0.5rem 0.2rem 0;
        background-color: transparent;
        .btn-confirm {
          display: block;
          width: 100%;
          line-height: 0.45rem;
          border-radius: @borderRadius;
          background-color: @buttonColor;
          font-size: 0.16rem;
          color: @white;
        }
      }
    }
  }
</style>
