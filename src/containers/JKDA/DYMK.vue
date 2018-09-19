<template>
  <div class="module DYMK">
    <p class="desc">建立个人健康档案，可提高就诊效率与自我健康管理</p>
    <div class="form-group">
      <label class="form-label">身高</label>
      <input class="form-input" type="text" value="170cm"/>
      <i class="form-icon icon-next"></i>
    </div>

    <div class="form-group">
      <label class="form-label">体重</label>
      <input class="form-input" type="text" value="170cm"/>
      <i class="form-icon icon-next"></i>
    </div>

    <div class="form-group">
      <label class="form-label">血型</label>
      <input class="form-input" type="text" value="B型"/>
      <i class="form-icon icon-next"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'DYMK',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .DYMK {
    .desc {
      padding: 0 0.15rem;
      line-height: 0.36rem;
      background-color: @bgColor;
      color: @fontColor;
    }
    .form-group {
      position: relative;
      padding-left: 0.15rem;
      .form-label {
        position: absolute;
        top: 0;
        left: 0;
        padding-left: 0.15rem;
        line-height: 0.45rem;
      }
      .form-input {
        display: block;
        width: 100%;
        height: 0.45rem;
        text-align: right;
        padding-right: 0.45rem;
        color: @fontColor;
      }
      .form-icon {
        position: absolute;
        top: 0;
        right: 0;
        width: 0.45rem;
        line-height: 0.45rem;
        text-align: center;
      }
      &:after {
        content: '';
        display: block;
        border-top: 1px solid @borderColor;
      }
    }
  }
</style>
