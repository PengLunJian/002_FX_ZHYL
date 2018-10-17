<template>
  <div class="FX_ZHYL_HOME">
    <t-j-j-z-r></t-j-j-z-r>
    <x-x-t-s></x-x-t-s>
    <d-h-c-d></d-h-c-d>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';
  import WeChatHelper from '../../WX_SDK/WeChatHelper';
  import JZKP from './JZKP';
  import XXTS from './XXTS';
  import DHCD from './DHCD';
  import TJJZR from './TJJZR';

  export default {
    name: 'Home',
    components: {
      TJJZR,
      JZKP,
      DHCD,
      XXTS
    },
    data() {
      return {
        deviceId: ''
      };
    },
    methods: Controller,
    mounted() {
      this.ajaxRequestDeviceId();
      const weChatHelper = new WeChatHelper();
      weChatHelper.requestOpenId();
    }
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
  }
</style>
