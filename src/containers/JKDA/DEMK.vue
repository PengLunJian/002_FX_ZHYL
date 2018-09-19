<template>
  <div class="module DEMK">
    <div class="form-group">
      <label class="form-label">抽烟情况</label>
      <input class="form-input" type="text" value="无"/>
      <i class="form-icon icon-next"></i>
    </div>
    <div class="form-group">
      <label class="form-label">喝酒情况</label>
      <input class="form-input" type="text" value="无"/>
      <i class="form-icon icon-next"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: '',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .DEMK {
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
