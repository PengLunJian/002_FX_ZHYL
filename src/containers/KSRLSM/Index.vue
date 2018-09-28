<template>
  <div class="FX_ZHYL_KSRLSM">
    <div class="module SMMKY">
      <div class="content"></div>
    </div>
    <div class="module SMMKE">
      <div class="content">
        <h2 class="care">注意：</h2>
        <p>1.认证人需要申请人本人</p>
        <p>2.请选择一个光线充足的环境</p>
        <p>3.请摘掉眼镜或帽子</p>
        <p>4.按照屏幕提示操作</p>
        <button class="btn btn-scanner" v-waves.block>开始验证</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'KSRLSM',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_KSRLSM {
    background-color: @bgColor;
  }

  .SMMKY {
    box-shadow: none;
    padding: 0.12rem 0.12rem 0;
    background-color: transparent;
    .content {
      height: 3.55rem;
      border-radius: @borderRadius2;
      background-repeat: no-repeat;
      background-size: 2.15rem auto;
      background-position: center center;
      background-image: url('../../assets/images/face_check@2x.png');
      box-shadow: 0 1px 4px rgba(0, 0, 0, .15);
      background-color: @white;
    }
  }

  .SMMKE {
    box-shadow: none;
    background-color: transparent;
    .content {
      padding: 0 0.15rem;
      font-size: 0.16rem;
      .care {
        line-height: 0.25rem;
        font-weight: normal;
        font-size: 0.16rem;
      }
      p {
        line-height: 0.25rem;
      }
      .btn-scanner {
        width: 100%;
        margin-top: 0.32rem;
        line-height: 0.47rem;
        border-radius: @borderRadius;
        background-color: @buttonColor2;
        color: @white;
      }
    }
  }
</style>
