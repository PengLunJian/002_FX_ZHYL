<template>
  <div class="doctor">
    <div class="item-box-1">
      <img :src="item.doctImg||require('../assets/images/doctor@2x.png')"/>
    </div>
    <div class="item-box-2">
      <div class="item-name">{{item.doctName}}</div>
      <div class="item-post">{{item.reglevelName}}</div>
      <div class="item-good">{{item.goodDisease||'擅长:无'}}</div>
    </div>
    <div class="item-box-3">
      <button class="btn btn-bespoke"
              @click="handlerClick(item.doctCode)">
        {{this.isPre?'挂号':'预约'}}
      </button>
      <span class="item-price">{{item.totalFee}}元</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'DoctorItem',
    data() {
      return {};
    },
    props: ['item', 'isPre'],
    methods: {
      handlerClick(doctCode) {
        const {query} = this.$route || {};
        const newQuery = {doctCode: doctCode};
        const params = Object.assign(query, newQuery);
        this.$router.push({
          path: this.$routes.YSZY.path,
          query: params
        });
      }
    }
  };
</script>

<style scoped lang="less">
  @import "../assets/less/variable";

  .doctor {
    overflow: hidden;
    padding: 0 0.84rem;
    position: relative;
    background-color: @white;
    border-bottom: 1px solid #cccccc;
    .item-box-1 {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      padding: 0.15rem;
      font-size: 0;
      text-align: center;
      img {
        width: 0.55rem;
        height: 0.55rem;
        border-radius: 100%;
      }
    }
    .item-box-2 {
      padding: 0.16rem 0;
      font-size: 0.12rem;
      color: #bdbdbd;
      .item-name {
        margin-bottom: 0.05rem;
        line-height: 0.15rem;
        font-size: 0.14rem;
        color: #333333;
      }
      .item-post {
        margin-bottom: 0.05rem;
      }
      .item-good {
      }
    }
    .item-box-3 {
      height: 100%;
      padding: 0.15rem;
      position: absolute;
      top: 0;
      right: 0;
      .btn-bespoke {
        display: block;
        width: 0.5rem;
        height: 0.25rem;
        line-height: 0.25rem;
        overflow: hidden;
        margin-bottom: 0.13rem;
        border-radius: 0.04rem;
        background-color: #dbecff;
        font-size: 0.12rem;
        color: #0062eb;
      }
      .item-price {
        color: #fa0002;
      }
    }
    &:last-child {
      border: none;
    }
  }
</style>
