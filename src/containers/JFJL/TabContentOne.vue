<template>
  <mescroll-vue ref="mescroll" :down="down" :up="up" @init="init">
    <div class="tab-list">
      <pay-item></pay-item>
      <pay-item></pay-item>
      <pay-item></pay-item>
    </div>
  </mescroll-vue>
</template>

<script type="text/ecmascript-6">
  import MescrollVue from 'mescroll.js/mescroll.vue';
  import PayItem from '../../components/PayItem';
  import Controller from './Controller';

  export default {
    components: {PayItem, MescrollVue},
    name: 'TabContentOne',
    data() {
      return {
        pageCode: 1,
        mescroll: null,
        up: {
          auto: false,
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
    methods: Controller
  };
</script>

<style scoped lang="less">
</style>
