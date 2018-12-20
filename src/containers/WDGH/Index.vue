<template>
  <div class="FX_ZHYL_WDGH">
    <no-data v-if="isLoading&&!isFailure&&!data.length"></no-data>
    <error v-if="isFailure&&!data.length" @refresh="exeSelectRegisterList"></error>
    <mescroll-vue v-if="data.length" ref="mescroll" :down="down" :up="up" @init="init">
      <reg-item v-for="(item,index) in data"
                :item="item"
                :key="index"
                @delete="exeDeleteRegisterList"></reg-item>
    </mescroll-vue>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  import Controller from './Controller';
  import RegItem from '../../components/RegItem';
  import NoData from '../../components/NoData';
  import Error from '../../components/Error';
  import MescrollVue from 'mescroll.js/mescroll.vue';

  export default {
    components: {
      NoData,
      Error,
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
      this.CLEAR_REGISTER_LIST_SUCCESS();
      this.exeSelectRegisterList();
    },
    methods: Controller,
    computed: mapState({
      isLoading: state => state.REGISTER_LIST.isLoading,
      isSuccess: state => state.REGISTER_LIST.isSuccess,
      isFailure: state => state.REGISTER_LIST.isFailure,
      data: state => state.REGISTER_LIST.data
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
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 0.6rem;
    -webkit-overflow-scrolling: touch;
    background-color: @bgColor;
    .GHMK {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
