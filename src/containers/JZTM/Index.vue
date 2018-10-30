<template>
  <div class="FX_ZHYL_JZEWM" v-if="isLoading">
    <div class="row-box-1">
      <span class="name">{{DEFAULT_CARD.NAME}}</span>
      <span class="card">卡号：{{DEFAULT_CARD.CARD_NO}}</span>
    </div>
    <div class="row-box-2">
      <img class="bar-code" :src="'data:image/jpg;base64,'+DEFAULT_CARD.BAR_CODE"/>
      <img class="qr-code" :src="'data:image/jpg;base64,'+DEFAULT_CARD.QR_CODE"/>
      <p class="toast">出示就诊二维码到设备扫描</p>
    </div>
    <div class="row-box-3">
      <button class="btn btn-close" @click="closePage">关闭</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';

  export default {
    name: 'JZEWM',
    data() {
      return {
        isLoading: false
      };
    },
    created() {
      if (this.DEFAULT_CARD.ID) {
        this.isLoading = true;
        return;
      }
      this.$vux.loading.show({
        text: '加载中...'
      });
      this.ajaxRequestDefaultCard();
    },
    methods: Controller,
    mounted() {
    },
    computed: {
      DEFAULT_CARD: function () {
        return this.$store.state.DEFAULT_CARD;
      }
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_JZEWM {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: @white;
    .row-box-1 {
      text-align: center;
      line-height: 0.2rem;
      padding: 0.25rem 0.13rem 0;
      .name {
        font-size: 0.18rem;
      }
      .card {
        color: @fontColor;
      }
      &:after {
        content: '';
        display: block;
        margin-top: 0.25rem;
        border-top: 1px solid @borderColor3;
      }
    }
    .row-box-2 {
      font-size: 0;
      padding-bottom: 0.25rem;
      .bar-code {
        width: 3rem;
        height: 0.85rem;
        display: block;
        margin: 0.24rem auto;
      }
      .qr-code {
        width: 2.35rem;
        height: 2.35rem;
        display: block;
        margin: 0 auto;
      }
      .toast {
        margin-top: 0.25rem;
        text-align: center;
        font-size: 0.14rem;
        color: @fontColor;
      }
    }
    .row-box-3 {
      font-size: 0;
      text-align: center;
      .btn-close {
        margin: 0 auto;
        padding: 0 0.7rem;
        line-height: 0.35rem;
        border: 1px solid #979797;
        border-radius: @borderRadius;
        font-size: 0.16rem;
        color: @black;
      }
    }
  }
</style>
