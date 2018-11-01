<template>
  <div class="FX_ZHYL_WDGH">
    <mescroll-vue ref="mescroll"
                  :down="down"
                  :up="up"
                  @init="init">
      <reg-item v-for="(item,index) in items"
                :item="item"
                :key="index"></reg-item>
    </mescroll-vue>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
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
    created() {
      if (!this.isLoading) {
        this.$vux.loading.show({
          text: '加载中...'
        });
        this.ajaxRequestRegisterList();
      }
    },
    methods: Controller,
    mounted() {},
    computed: mapState({
      items: state => state.REGISTER_LIST.list,
      isLoading: state => state.REGISTER_LIST.isLoading
    }),
    watch: {
      $route(to, from) {
        if (from.name === 'WDGH') {
          this.mescroll.setBounce(true);
        }
      }
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
