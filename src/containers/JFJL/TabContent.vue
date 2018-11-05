<template>
  <div class="tab-content">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <mescroll-vue ref="mescroll" :down="down" :up="up" @init="initMescroll1">
            <no-data v-if="isNoData1"></no-data>
            <pay-item v-for="(item,index) in items1"
                      :key="index"
                      :item="item"></pay-item>
          </mescroll-vue>
        </div>
        <div class="swiper-slide">
          <mescroll-vue ref="mescroll" :down="down" :up="up" @init="initMescroll2">
            <no-data v-if="isNoData2"></no-data>
            <pay-item v-for="(item,index) in items2"
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
  import MescrollVue from 'mescroll.js/mescroll.vue';
  import 'swiper/dist/css/swiper.min.css';
  import Controller from './Controller';
  import PayItem from '../../components/PayItem';
  import NoData from '../../components/NoData';

  export default {
    name: 'tab-content',
    components: {
      NoData,
      PayItem,
      MescrollVue
    },
    data() {
      return {
        swiper: null,
        mescrolls: [null, null],
        isNoData1: false,
        isNoData2: false,
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
      if (!this.isLoading1) {
        this.$vux.loading.show({
          text: '加载中...'
        });
        this.ajaxRequestPaymentRecords(1);
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
      items1: state => state.PAYMENT_RECORD.data[0].list,
      items2: state => state.PAYMENT_RECORD.data[1].list,
      isLoading1: state => state.PAYMENT_RECORD.data[0].isLoading,
      isLoading2: state => state.PAYMENT_RECORD.data[1].isLoading
    }),
    watch: {
      tabIndex() {
        this.initSwiper();
        const {PAYMENT_RECORD} = this.$store.state;
        const hasNext = PAYMENT_RECORD.data[this.tabIndex].hasNext;

        this.mescrolls[this.tabIndex].endSuccess(10, hasNext);
        this.swiper.slideTo(this.tabIndex, 600, true);
        if (!this.isLoading2) {
          this.$vux.loading.show({
            text: '加载中...'
          });
          this.ajaxRequestPaymentRecords(1);
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
