<template>
  <div class="tab-content">
    <mescroll-vue ref="mescroll" :down="down" :up="up" @init="init">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <pay-item v-for="(item,index) in items1"
                      :key="index"
                      :item="item"></pay-item>
          </div>
          <div class="swiper-slide">
            <pay-item v-for="(item,index) in items2"
                      :key="index"
                      :item="item"></pay-item>
          </div>
        </div>
      </div>
    </mescroll-vue>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  import MescrollVue from 'mescroll.js/mescroll.vue';
  import 'swiper/dist/css/swiper.min.css';
  import Controller from './Controller';
  import PayItem from '../../components/PayItem';

  export default {
    name: 'tab-content',
    components: {
      PayItem,
      MescrollVue
    },
    data() {
      return {
        pageCode: 1,
        swiper: null,
        mescroll: null,
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
        this.ajaxRequestPaymentRecords();
      }
    },
    props: ['tabIndex'],
    methods: Controller,
    mounted() {
      window.onload = () => {
        // this.$nextTick(() => {
        /* eslint-disable no-new */
        this.initSwiper();
        // });
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
        // if (this.swiper) {
        this.swiper.slideTo(this.tabIndex, 600, true);
        // }
        if (!this.isLoading2) {
          this.pageCode = 1;
          this.$vux.loading.show({
            text: '加载中...'
          });
          this.ajaxRequestPaymentRecords();
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
  }
</style>
