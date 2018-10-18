<template>
  <div class="FX_ZHYL_WDYY">
    <mescroll-vue ref="mescroll"
                  :down="down"
                  :up="up"
                  @init="init">
      <sub-item v-for="(item,index) in dataList"
                :slotOut="item.slotOut"
                :key="index"></sub-item>
    </mescroll-vue>
    <no-data :isShow="isShow"></no-data>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';
  import SubItem from '../../components/SubItem';
  import NoData from '../../components/NoData';
  import MescrollVue from 'mescroll.js/mescroll.vue';

  export default {
    components: {
      NoData,
      SubItem,
      MescrollVue
    },
    name: 'WDYY',
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

  .FX_ZHYL_WDYY {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: @bgColor;
    .YYMK {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
