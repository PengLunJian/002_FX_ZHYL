<template>
  <div class="FX_ZHYL_WDGH">
    <mescroll-vue ref="mescroll"
                  :down="down"
                  :up="up"
                  @init="mescrollInit">
      <reg-item v-for="(item,index) in dataList"
                :slotOut="item.slotOut"
                :key="index"></reg-item>
    </mescroll-vue>
    <no-data :isShow="isShow"></no-data>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';
  import RegItem from '../../components/RegItem';
  import NoData from '../../components/NoData';
  import MescrollVue from 'mescroll.js/mescroll.vue';

  export default {
    components: {
      NoData,
      RegItem,
      MescrollVue
    },
    name: 'WDGH',
    data() {
      return {
        dataList: [],
        isShow: false,
        mescroll: null,
        up: {
          auto: false,
          isBounce: false,
          callback: this.infinite,
          htmlNodata: '<p class="upwarp-nodata">没有数据了</p>'
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

  .FX_ZHYL_WDGH {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: @bgColor;
    .GHMK {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
