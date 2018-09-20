<template>
  <div class="module JCLB">
    <div class="row-box-1">
      <time class="time">2018/09/09</time>
    </div>
    <div class="row-box-2">
      <div class="group">
        <label class="label">头颅核磁共振平扫</label>
        <i class="icon icon-next"></i>
      </div>
      <div class="group">
        <label class="label">头颅螺旋CT平扫</label>
        <i class="icon icon-next"></i>
      </div>
      <div class="group off">
        <label class="label">B超</label>
        <i class="icon icon-next"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'JCLB',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .JCLB {
    .row-box-1 {
      padding: 0 0.15rem;
      line-height: 0.45rem;
      border-bottom: 1px solid @borderColor;
      .time {
      }
    }
    .row-box-2 {
      .group {
        position: relative;
        padding: 0 0 0 0.15rem;
        font-size: 0;
        .label {
          padding-left: 0.08rem;
          line-height: 0.45rem;
          display: inline-block;
          vertical-align: middle;
          font-size: 0.13rem;
        }
        .icon {
          width: 0.45rem;
          height: 100%;
          line-height: 0.45rem;
          position: absolute;
          top: 0;
          right: 0;
          text-align: center;
          font-size: 0.13rem;
        }
        &:before {
          content: '';
          width: 0.08rem;
          height: 0.08rem;
          border-radius: 100%;
          display: inline-block;
          vertical-align: middle;
          background-color: @statusColor;
        }
        &:after {
          content: '';
          display: block;
          border-bottom: 1px solid @borderColor;
        }
        &.off {
          &:before {
            background-color: @offColor;
          }
        }
        &:last-child {
          &:after {
            border: none;
          }
        }
      }
    }
  }
</style>
