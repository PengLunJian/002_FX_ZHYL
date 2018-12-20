<template>
  <div class="FX_ZHYL_WDYY">
    <no-data v-if="isLoading&&!isFailure&&!data.length"></no-data>
    <error v-if="isFailure&&!data.length" @refresh="exeSelectSubscribeList"></error>
    <mescroll-vue v-if="data.length" ref="mescroll" :down="down" :up="up" @init="init">
      <sub-item v-for="(item,index) in data" :item="item" :key="index"
                @delete="exeDeleteSubscribeList"
                @doregister="exeInsertDoRegister"
      ></sub-item>
    </mescroll-vue>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  import Controller from './Controller';
  import SubItem from '../../components/SubItem';
  import NoData from '../../components/NoData';
  import Error from '../../components/Error';
  import MescrollVue from 'mescroll.js/mescroll.vue';

  export default {
    components: {
      NoData,
      Error,
      SubItem,
      MescrollVue
    },
    name: 'WDYY',
    data() {
      return {
        pageCode: 1,
        mescroll: null,
        up: {
          auto: false,
          isBounce: true,
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
      this.CLEAR_SUBSCRIBE_LIST_SUCCESS();
      this.exeSelectSubscribeList();
    },
    methods: Controller,
    computed: mapState({
      isLoading: state => state.SUBSCRIBE_LIST.isLoading,
      isSuccess: state => state.SUBSCRIBE_LIST.isSuccess,
      isFailure: state => state.SUBSCRIBE_LIST.isFailure,
      data: state => state.SUBSCRIBE_LIST.data
    })
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_WDYY {
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 0.6rem;
    -webkit-overflow-scrolling: touch;
    background-color: @bgColor;
    .YYMK {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
