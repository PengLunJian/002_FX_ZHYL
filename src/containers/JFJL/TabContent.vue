<template>
  <div class="tab-content">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <no-data v-if="isPayedSuccess && !isPayedItems.length"></no-data>
          <error v-if="isPayedFailed && !isPayedItems.length" @refresh="this.exeSelectPaymentRecords"></error>
          <mescroll-vue v-if="isPayedItems.length" ref="mescroll"
                        :down="down" :up="up" @init="initMescroll1">
            <pay-item v-for="(item,index) in isPayedItems"
                      :key="index"
                      :item="item"></pay-item>
          </mescroll-vue>
        </div>
        <div class="swiper-slide">
          <no-data v-if="noPayedSuccess && !noPayedItems.length"></no-data>
          <error v-if="noPayedFailed && !noPayedItems.length" @refresh="this.exeSelectPaymentRecords"></error>
          <mescroll-vue v-if="noPayedItems.length" ref="mescroll"
                        :down="down" :up="up" @init="initMescroll2">
            <pay-item v-for="(item,index) in noPayedItems"
                      :key="index"
                      :item="item"></pay-item>
          </mescroll-vue>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  import 'swiper/dist/css/swiper.min.css';
  import Controller from './Controller';
  import MescrollVue from 'mescroll.js/mescroll.vue';
  import PayItem from '../../components/PayItem';
  import NoData from '../../components/NoData';
  import Error from '../../components/Error';

  export default {
    name: 'tab-content',
    components: {
      Error,
      NoData,
      PayItem,
      MescrollVue
    },
    data() {
      return {
        swiper: null,
        pageCode: [1, 1],
        hasNexts: [true, true],
        mescrolls: [null, null],
        up: {
          auto: false,
          isBounce: false,
          callback: this.infinite,
          htmlNodata: '<p class="upwarp-nodata">没有更多数据</p>'
        },
        down: {
          auto: false,
          offset: 50,
          mustToTop: true,
          outOffsetRate: 0.3,
          callback: this.refresh,
          autoShowLoading: true
        }
      };
    },
    created() {
      this.$nextTick(() => {
        this.initSwiper();
      });
      if (!this.isPayedIsLoading) {
        this.$vux.loading.show({
          text: '加载中...'
        });
        this.exeSelectPaymentRecords();
      }
    },
    props: ['tabIndex'],
    methods: Controller,
    mounted() {
      window.onload = () => {
        this.initSwiper();
      };
    },
    computed: mapState({
      isPayedItems: state => state.ISPAYED_RECORDS.data,
      noPayedItems: state => state.NOPAYED_RECORDS.data,
      isPayedFailed: state => state.ISPAYED_RECORDS.isFailed,
      noPayedFailed: state => state.NOPAYED_RECORDS.isFailed,
      isPayedSuccess: state => state.ISPAYED_RECORDS.isSuccess,
      noPayedSuccess: state => state.NOPAYED_RECORDS.isSuccess,
      isPayedIsLoading: state => state.ISPAYED_RECORDS.isLoading,
      noPayedIsLoading: state => state.NOPAYED_RECORDS.isLoading
    }),
    watch: {
      tabIndex() {
        if (this.mescrolls[this.tabIndex]) {
          const hasNext = this.hasNexts[this.tabIndex];
          this.mescrolls[this.tabIndex].endSuccess(10, hasNext);
        }
        this.swiper.slideTo(this.tabIndex, 600, true);
        if (!this.noPayedIsLoading) {
          this.$vux.loading.show({
            text: '加载中...'
          });
          this.exeSelectPaymentRecords();
        }
      }
    }
  };
</script>

<style scoped lang="less">
  .tab-content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-top: 0.46rem;
    .swiper-container {
      height: 100% !important;
    }
  }
</style>
