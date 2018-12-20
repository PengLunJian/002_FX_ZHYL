<template>
  <div class="FX_ZHYL_KPBL">
    <div class="module BKXZ">
      <p class="desc-title">办理电子就诊卡须知</p>
      <ul class="desc-context">
        <li class="desc-list">1.办理电子就诊卡后可实现网上挂号，就诊签到，支付，报告推送查询等事项，为就诊人提高就诊效率，减少排队次数</li>
        <li class="desc-list">2.请上传当前就诊人的身份证件，以免造成就诊信息错误</li>
        <li class="desc-list">3.成人用户上传<em>身份证印有证件照片的一面</em></li>
        <li class="desc-list">4.办卡成功后，<em>半年可解绑一次</em></li>
      </ul>
    </div>
    <div class="module BKCZ">
      <button class="btn btn-input" @click="doCard">输入就诊人身份证号码</button>
      <!--<button class="btn btn-upload" @click="uploadCard">上传就诊人身份证照片</button>-->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controllers from './Controller';

  export default {
    name: 'KPBL',
    data() {
      return {};
    },
    methods: Controllers
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_KPBL {
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 0.5rem;
    -webkit-overflow-scrolling: touch;
    background-color: @bgColor;
    .BKXZ {
      font-size: 0.14rem;
      .desc-title {
        color: @fontColor;
        line-height: 0.45rem;
        padding-left: 0.15rem;
        &:after {
          content: '';
          display: block;
          border-top: 1px solid @borderColor;
        }
      }
      .desc-context {
        padding: 0.15rem 0.15rem 0.3rem;
        text-align: justify;
        .desc-list {
          line-height: 0.2rem;
          margin-bottom: 0.35rem;
          em {
            color: #fe8840;
          }
          &:last-child {
            margin: 0;
          }
        }
      }
    }

    .BKCZ {
      padding: 0.2rem;
      box-shadow: none;
      background-color: transparent;
      font-size: 0.14rem;
      .btn {
        width: 100%;
        display: block;
        line-height: 0.47rem;
        border-radius: @borderRadius;
        &.btn-input {
          color: @white;
          background-color: @buttonColor2;
        }
        &.btn-upload {
          background-color: @white;
          border: 1px solid #808080;
        }
      }
    }
  }
</style>
