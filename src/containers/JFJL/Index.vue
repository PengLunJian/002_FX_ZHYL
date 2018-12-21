<template>
  <div class="FX_ZHYL_JFJL">
    <no-data v-if="noPayedIsSuccess&&!noPayedData"></no-data>
    <error v-if="noPayedIsFailure" @refresh="exeSelectPaymentRecords"></error>
    <!--<mescroll-vue v-if="noPayedData" ref="mescroll" :down="down" :init="init">-->
    <div v-if="noPayedData">
      <pay-item v-for="(item,index) in noPayedData"
                :key="index"
                :item="item"></pay-item>
    </div>
    <!--</mescroll-vue>-->
    <div class="btn-wrapper">
      <button v-if="noPayedData" class="btn" @click="handleSubmit">合并缴费</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  import Controller from './Controller';
  import PayItem from '../../components/PayItem';
  import NoData from '../../components/NoData';
  import Error from '../../components/Error';
  // import MescrollVue from 'mescroll.js/mescroll.vue';

  export default {
    components: {
      Error,
      NoData,
      PayItem
    },
    name: 'JFJL',
    data() {
      return {
        clinicNo: '',
        jsApiList: {jsApiList: ['chooseWXPay']}
        // down: {
        //   auto: false,
        //   offset: 50,
        //   mustToTop: true,
        //   outOffsetRate: 0.3,
        //   callback: this.refresh,
        //   autoShowLoading: true
        // }
      };
    },
    created() {
      this.exeSelectPaymentRecords();
      this.exeSelectJSSDKConfig();
    },
    methods: Controller,
    mounted() {
      this.selectPayRegiter({id: 1});
    },
    computed: mapState({
      id: state => state.NOPAYED_RECORDS.data.id,
      noPayedData: state => state.NOPAYED_RECORDS.data.recordItems,
      noPayedIsFailure: state => state.NOPAYED_RECORDS.isFailure,
      noPayedIsSuccess: state => state.NOPAYED_RECORDS.isSuccess,
      noPayedIsLoading: state => state.NOPAYED_RECORDS.isLoading
    }),
    watch: {
      // tabIndex() {
      //   if (this.mescrolls[this.tabIndex]) {
      //     const hasNext = this.hasNexts[this.tabIndex];
      //     this.mescrolls[this.tabIndex].endSuccess(10, hasNext);
      //   }
      //   this.swiper.slideTo(this.tabIndex, 600, true);
      //   if (!this.noPayedIsLoading) {
      //     this.exeSelectPaymentRecords();
      //   }
      // }
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_JFJL {
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 0.6rem;
    -webkit-overflow-scrolling: touch;
    background-color: @bgColor;
    .tab-content {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      padding-bottom: 0.46rem;
      .swiper-container {
        height: 100% !important;
      }
    }
    .btn-wrapper {
      padding: 0.1rem;
      .btn {
        width: 100%;
        height: 0.46rem;
        background: @buttonColor2;
        color: #fff;
        font-size: 0.2rem;
        letter-spacing: 0.01rem;
        border-radius: @borderRadius;
        /*position: fixed;*/
        /*bottom: 0;*/
      }
    }
  }
</style>
