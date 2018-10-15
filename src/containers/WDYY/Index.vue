<template>
  <div class="FX_ZHYL_WDYY">
    <mescroll-vue ref="mescroll"
                  :down="down"
                  :up="up"
                  @init="mescrollInit">
      <sub-item v-for="(item,index) in dataList"
                :slotOut="item.slotOut"
                :key="index"></sub-item>
    </mescroll-vue>
    <!--<no-data :isShow="isShow"></no-data>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import MescrollVue from 'mescroll.js/mescroll.vue';
  import Controller from './Controller';
  import SubItem from '../../components/SubItem';
  import NoData from '../../components/NoData';

  export default {
    components: {
      NoData,
      SubItem,
      MescrollVue
    },
    name: 'WDYY',
    data() {
      return {
        dataList: [],
        isShow: false,
        mescroll: null,
        up: {
          auto: false,
          isBoth: true,
          callback: this.infinite,
          htmlNodata: '<p class="upwarp-nodata">没有数据了</p>'
        },
        down: {
          auto: false,
          callback: this.refresh
        }
      };
    },
    methods: Controller,
    mounted() {
      this.pageCode = 1;
      this.ajaxWDYY(this.pageCode);
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
  }
</style>
