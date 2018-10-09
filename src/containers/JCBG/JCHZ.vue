<template>
  <div class="module JCHZ">
    <div class="row-box-1">
      <label class="label">就诊人</label>
      <span class="span">胡代宇</span>
      <i class="icon icon-next"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'JCHZ',
    data () {
      return {};
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .JCHZ {
    .row-box-1 {
      height: 0.45rem;
      line-height: 0.45rem;
      position: relative;
      padding: 0 0.45rem 0 0.15rem;
      .label {
      }
      .span {
        float: right;
        color: @fontColor;
      }
      .icon {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 0.45rem;
        height: 100%;
        text-align: center;
        line-height: 0.45rem;
      }
    }
  }
</style>
