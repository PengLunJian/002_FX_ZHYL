<template>
  <div class="FX_ZHYL_SCSFZ">
    <div class="module SCZP">
      <button class="btn btn-photo" @click="showActionSheet">
        <i class="btn-icon icon-photo"></i>
        <p class="btn-text">点击拍摄/上传人像面</p>
      </button>
    </div>
    <div class="module PSYQ">
      <h3 class="require">拍摄要求</h3>
      <ul class="requires">
        <li class="require-item">
          <span>垂直拍摄，证件边框完整</span>
        </li>
        <li class="require-item">
          <span>避免证件反光，模糊</span>
        </li>
      </ul>
    </div>
    <actionsheet v-model="value" :menus="menus" :show-cancel="showCancel"></actionsheet>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Actionsheet } from 'vux'
  import Controllers from './Controller'
  export default{
    name: 'SCSFZ',
    data () {
      return {
        value: false,
        showCancel: true,
        menus: ['拍照', '从相册选择']
      }
    },
    components: {
      Actionsheet
    },
    methods: Controllers
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_SCSFZ {
    background-color: @bgColor;
  }

  .SCZP {
    padding: 0.2rem 0;
    .btn-photo {
      width: 2.4rem;
      height: 1.5rem;
      margin: 0 auto;
      display: block;
      overflow: hidden;
      position: relative;
      border-radius: 0.06rem;
      background-size: 105% 105%;
      background-repeat: no-repeat;
      background-position: center center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .35);
      background-image: url("../../assets/images/id_card@2x.png");
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        background-color: #0062EB;
      }
      .btn-icon {
        display: block;
        margin: 0 auto;
        position: relative;
        z-index: 1;
        width: 0.65rem;
        height: 0.65rem;
        line-height: 0.65rem;
        border-radius: 100%;
        background-color: @white;
        font-size: 0.3rem;
        color: @buttonColor2;
      }
      .btn-text {
        z-index: 1;
        position: relative;
        margin-top: 0.08rem;
        font-size: 0.16rem;
        color: @white;
      }
    }
  }

  .PSYQ {
    .require {
      padding-left: 0.15rem;
      font-size: 0.16rem;
      font-weight: normal;
      line-height: 0.5rem;
      &:after {
        content: '';
        display: block;
        border-top: 1px solid @borderColor;
      }
    }
    .requires {
      padding: 0.05rem 0;
      font-size: 0.16rem;
      .require-item {
        line-height: 0.35rem;
        padding: 0 0.15rem;
        font-size: 0;
        &:before {
          content: '';
          width: 0.1rem;
          height: 0.1rem;
          border-radius: 100%;
          display: inline-block;
          margin-right: 0.08rem;
          vertical-align: middle;
          background-color: @buttonColor2;
        }
        span {
          font-size: 0.16rem;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
</style>
