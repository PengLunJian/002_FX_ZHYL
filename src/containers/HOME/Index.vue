<template>
  <div class="FX_ZHYL_HOME">
    <j-z-k-p></j-z-k-p>
    <x-x-t-s></x-x-t-s>
    <d-h-c-d></d-h-c-d>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  import Controller from './Controller';
  import JZKP from './JZKP';
  import XXTS from './XXTS';
  import DHCD from './DHCD';
  import Error from '../../components/Error';

  export default {
    name: 'Home',
    components: {
      Error,
      JZKP,
      DHCD,
      XXTS
    },
    data() {
      return {
        appId: 'wxe790a197b8d02b72'
      };
    },
    created() {
      this.init();
    },
    methods: Controller,
    computed: mapState({
      isLoading: state => state.AUTO_LOGIN.isLoading,
      isSuccess: state => state.AUTO_LOGIN.isSuccess,
      isFailure: state => state.AUTO_LOGIN.isFailure,
      data: state => state.AUTO_LOGIN.data
    })
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_HOME {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    background-color: @bgColor;
    &.hide {
      display: none !important;
    }
  }
</style>
