<template>
  <div class="module WHLN">
    <div class="row-box-1">
      <i class="icon icon-culture"></i>
      <span class="text">文化理念</span>
    </div>
    <div class="row-box-2">
      <div class="list">
        <label class="label">功能定位：</label>
        <span class="span">立足芜湖、服务皖南、辐射皖江，集医疗、教学、科研、预防、保健、康复为一体的现代化区域医疗中心</span>
      </div>
      <div class="list">
        <label class="label">总体目标：</label>
        <span class="span">现代化、信息化、精细化，集医疗、教学、科研、预防、保健、康复为一体的现代化区域医疗中心</span>
      </div>
      <div class="list">
        <label class="label">服务宗旨：</label>
        <span class="span">以人为本、安全优质</span>
      </div>
      <div class="list">
        <label class="label">院&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;训：</label>
        <span class="span">以人为本、安全优质</span>
      </div>
      <div class="list">
        <label class="label">愿&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;景：</label>
        <span class="span">群众满意、社会认同、员工幸福、医院发展</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'WHLN',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
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
      padding: 0.1rem 0.15rem 0.2rem;
      line-height: 0.2rem;
      .list {
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
