<template>
  <div class="FX_ZHYL_WDYY">
    <!--<scroller ref="scroller"-->
    <!--:on-refresh="refresh"-->
    <!--:on-infinite="infinite">-->
    <!--<sub-item v-for="(item,index) in items"-->
    <!--:slotOut="item.slotOut"-->
    <!--:key="index"></sub-item>-->
    <!--</scroller>-->
    <!--mescroll滚动区域的基本结构-->
    <mescroll-vue ref="mescroll"
                  :down="mescrollDown"
                  :up="mescrollUp"
                  @init="mescrollInit">
      <sub-item v-for="(item,index) in items"
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
        items: [],
        isShow: false,
        mescroll: null,
        mescrollDown: {
          callback: this.downCallback
        },
        mescrollUp: {
          callback: this.upCallback
        }
      };
    },
    created() {
      this.ajaxWDYY();
    },
    methods: Controller,
    mounted() {
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_WDYY {
    height: 100vh;
    background-color: @bgColor;
  }
</style>
