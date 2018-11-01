<template>
  <div class="tab-content">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <tab-content-one></tab-content-one>
        </div>
        <div class="swiper-slide">
          <tab-content-two></tab-content-two>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import 'swiper/dist/css/swiper.min.css';
  import Swiper from 'swiper';
  import MescrollVue from 'mescroll.js/mescroll.vue';
  import Controller from './Controller';
  import TabContentOne from './TabContentOne';
  import TabContentTwo from './TabContentTwo';

  export default {
    name: 'tab-content',
    components: {
      TabContentTwo,
      TabContentOne,
      MescrollVue
    },
    data() {
      return {
        pageCode: 1,
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
    methods: Controller,
    mounted() {
      /* eslint-disable no-new */
      new Swiper('.swiper-container');
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .tab-content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-top: 0.46rem;
    -webkit-overflow-scrolling: touch;
    background-color: @white;
  }
</style>
