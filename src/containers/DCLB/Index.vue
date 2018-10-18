<template>
  <div class="FX_ZHYL_DJCLB">
    <mescroll-vue ref="mescroll"
                  :down="down"
                  :up="up"
                  @init="mescrollInit">
      <visit-item v-for="(item,index) in dataList"
                  :key="index"/>
    </mescroll-vue>
    <no-data :isShow="isShow"></no-data>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';
  import VisitItem from '../../components/VisitItem';
  import NoData from '../../components/NoData';
  import MescrollVue from 'mescroll.js/mescroll.vue';

  export default {
    components: {
      VisitItem,
      NoData,
      MescrollVue
    },
    name: 'DJCLB',
    data() {
      return {
        items: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        dataList: [],
        isShow: false,
        mescroll: null,
        up: {
          auto: false,
          isBounce: false,
          callback: this.infinite,
          htmlNodata: '<p class="upwarp-nodata">没有更多数据</p>'
        },
        down: {
          auto: true,
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
      this.pageCode = 1;
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_DJCLB {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: @bgColor;
    .DJCMK {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
