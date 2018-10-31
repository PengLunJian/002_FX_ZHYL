<template>
  <div class="module JZKP">
    <div class="content">
      <div class="select" v-if="isSelect">
        <div class="patient-left">
          <h3 class="patient-name">{{DEFAULT_CARD.NAME}}</h3>
          <span class="patient-number ellipsis">卡号：{{DEFAULT_CARD.CARD_NO}}</span>
          <button class="btn btn-change" @click="changeVisitor">
            <i class="btn-icon icon-change"></i>
            <span class="btn-text">切换就诊人</span>
          </button>
        </div>
        <div class="patient-right">
          <div class="patient-image">
            <img class="patient-code" @click="showQRCode"
                 :src="'data:image/jpg;base64,'+DEFAULT_CARD.QR_CODE"/>
          </div>
          <span class="patient-desc">点击出示就诊二维码</span>
        </div>
      </div>
      <div class="insert" v-if="isInsert">
        <p class="desc">就诊前，请先添加就诊人</p>
        <button class="btn btn-add" @click="addVisitor">
          <i class="btn-icon icon-add"></i>
          <span class="btn-text">添加就诊人</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';

  export default {
    name: 'JZKP',
    data() {
      return {
        isSelect: false,
        isInsert: false
      };
    },
    created() {
      this.$vux.loading.show({
        text: '加载中...'
      });
      this.ajaxRequestDefaultCard();
    },
    methods: Controller,
    computed: {
      DEFAULT_CARD() {
        return this.$store.state.DEFAULT_CARD;
      }
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .JZKP {
    padding: 0.15rem 0.15rem;
    color: @white;
    .content {
      height: 1.75rem;
      border-radius: @borderRadius;
      background-color: @bgColor;
    }
    .select {
      height: 100%;
      overflow: hidden;
      position: relative;
      border-radius: 0.05rem;
      box-shadow: @boxShadow;
      padding: 0.15rem 1.4rem 0.15rem 0.15rem;
      background: linear-gradient(to right, #0065eb, #00acf6);
      .patient-left {
        font-size: 0;
        .patient-name {
          margin-right: 0.13rem;
          display: inline-block;
          vertical-align: middle;
          letter-spacing: 1px;
          font-size: 0.22rem;
          font-weight: normal;
        }
        .patient-pay {
          height: 0.2rem;
          line-height: 0.2rem;
          display: inline-block;
          vertical-align: middle;
          padding: 0 0.1rem;
          box-shadow: @boxShadow;
          border-radius: 0.03rem;
          background-color: rgba(255, 255, 255, 0.15);
          letter-spacing: 1px;
          font-size: 0.12rem;
        }
        .patient-number {
          display: block;
          margin-top: 0.15rem;
          font-size: 0.14rem;
          line-height: 0.25rem;
        }
        .btn-change {
          height: 0.3rem;
          padding: 0 0.1rem;
          position: absolute;
          bottom: 0.15rem;
          overflow: hidden;
          border-radius: @borderRadius;
          background-color: rgba(255, 255, 255, 0.15);
          line-height: 0.3rem;
          box-shadow: @boxShadow;
          color: @white;
          font-size: 0;
          .btn-icon {
            display: inline-block;
            vertical-align: middle;
            font-size: 0.14rem;
            margin-right: 0.05rem;
          }
          .btn-text {
            display: inline-block;
            vertical-align: middle;
            font-size: 0.12rem;
          }
        }
      }
      .patient-right {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.15rem;
        font-size: 0;
        .patient-image {
          width: 1.2rem;
          height: 1.2rem;
          overflow: hidden;
          border-radius: 0.04rem;
          background-color: @white;
          border: 0.05rem solid @white;
          .patient-code {
            width: 100%;
            height: 100%;
          }
        }
        .patient-desc {
          display: block;
          height: 0.25rem;
          line-height: 0.25rem;
          font-size: 0.13rem;
        }
      }
    }
    .insert {
      height: 100%;
      padding: 0.375rem 0;
      position: relative;
      border-radius: @borderRadius;
      background: linear-gradient(to right, #0066ec, #00bcfa);
      text-align: center;
      font-size: 0.18rem;
      color: @white;
      .desc {
        position: relative;
        z-index: 1;
        margin-bottom: 0.28rem;
      }
      .btn-add {
        position: relative;
        z-index: 1;
        margin: 0 auto;
        padding: 0 0.65rem;
        border-radius: 0.05rem;
        border: 1px solid @white;
        line-height: 0.5rem;
        color: @white;
        font-size: 0;
        .btn-icon {
          margin-right: 0.1rem;
          display: inline-block;
          vertical-align: middle;
          font-size: 0.18rem;
        }
        .btn-text {
          display: inline-block;
          vertical-align: middle;
          font-size: 0.18rem;
        }
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: 85% auto;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url("../../assets/images/person@2x.png");
      }
    }
  }
</style>
