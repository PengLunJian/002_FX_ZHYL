<template>
  <div class="module ZYXX">
    <div class="row-box-1">
      <div class="group">
        <label class="label">费别</label>
        <span class="span">自费</span>
      </div>
      <h3 class="small-title">紧急联系人信息</h3>
    </div>
    <div class="row-box-2">
      <div class="group">
        <label class="label">紧急联系人</label>
        <span class="span">邹非儿</span>
        <i class="icon icon-next"></i>
      </div>
      <div class="group">
        <label class="label">关系</label>
        <span class="span">妻子</span>
        <i class="icon icon-next"></i>
      </div>
      <div class="group">
        <label class="label">手机号</label>
        <span class="span">18130278679</span>
        <i class="icon icon-next"></i>
      </div>
    </div>
    <div class="row-box-3">
      <button class="btn btn-untie" v-waves.block>解绑该就诊卡</button>
      <p class="message">就诊卡在2019年03月04日后可解绑</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'ZYXX',
    data () {
      return {};
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .ZYXX {
    box-shadow: none;
    .row-box-1 {
      line-height: 0.35rem;
      background-color: @bgColor;
      .group {
        padding: 0 0.15rem;
        line-height: 0.45rem;
        background-color: @white;
        .label {

        }
        .span {
          float: right;
        }
      }
      .small-title {
        padding: 0 0.15rem;
        font-weight: normal;
        font-size: 0.13rem;
        color: @fontColor;
      }
    }
    .row-box-2 {
      .group {
        position: relative;
        line-height: 0.45rem;
        padding: 0 0 0 0.15rem;
        font-size: 0.14rem;
        .label {

        }
        .span {
          float: right;
          padding-right: 0.45rem;
          color: @fontColor;
        }
        .icon {
          display: block;
          width: 0.45rem;
          height: 100%;
          position: absolute;
          top: 0;
          right: 0;
          text-align: center;
          line-height: 0.45rem;
        }
        &:after {
          content: '';
          display: block;
          border-top: 1px solid @borderColor;
        }
        &:last-child {
          &:after {
            border: none;
          }
        }
      }
    }
    .row-box-3 {
      padding: 0.25rem 0.2rem 0;
      background-color: @bgColor;
      .btn-untie {
        width: 100%;
        color: @white;
        font-size: 0.16rem;
        line-height: 0.47rem;
        margin-bottom: 0.25rem;
        background-color: @offColor;
        border-radius: @borderRadius;
      }
      .message {
        text-align: center;
        font-size: 0.14rem;
        color: @fontColor;
      }
    }
  }
</style>
