<template>
  <div class="module WHLN">
    <div class="row-box-1">
      <i class="icon icon-culture"></i>
      <span class="text">联系我们</span>
    </div>
    <div class="row-box-2">
      <div class="group">
        <label class="label">总机：</label>
        <span class="span">0579-82686767</span>
      </div>
      <div class="group">
        <label class="label">预约电话：</label>
        <span class="span">0579-82611088</span>
      </div>
      <div class="group">
        <label class="label">传真：</label>
        <span class="span">0579-82611800</span>
      </div>
      <div class="group">
        <label class="label">急救电话：</label>
        <span class="span">0579-82611120</span>
      </div>
      <div class="group">
        <label class="label">服务监督电话：</label>
        <span class="span">13588651120</span>
      </div>
      <div class="group">
        <label class="label">网站：</label>
        <span class="span">http://www.wr120.com</span>
      </div>
      <div class="group">
        <label class="label">微信公众号：</label>
        <span class="span">jhwr120</span>
      </div>
      <div class="group">
        <label class="label">邮政编码：</label>
        <span class="span">321000</span>
      </div>
      <div class="group">
        <label class="label">地址：</label>
        <span class="span">浙江省金华市东莱路768号</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'WHLN',
    data() {
      return {};
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .WHLN {
    .row-box-1 {
      line-height: 0.37rem;
      padding-left: 0.15rem;
      font-size: 0;
      .icon {
        display: inline-block;
        vertical-align: middle;
        color: #5995d3;
        font-size: 0.2rem;
      }
      .text {
        padding-left: 0.1rem;
        display: inline-block;
        vertical-align: middle;
        font-size: 0.16rem;
      }
      &:after {
        content: '';
        display: block;
        border-bottom: 1px solid @borderColor;
      }
    }
    .row-box-2 {
      padding: 0.1rem 0.15rem;
      line-height: 0.2rem;
      .group {
        position: relative;
        line-height: 0.24rem;
        .label {

        }
        .span {
          display: inline-block;
          color: @fontColor;
        }
      }
    }
  }
</style>
