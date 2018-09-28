<template>
  <div class="FX_ZHYL_HOME">
    <t-j-j-z-r></t-j-j-z-r>
    <x-x-t-s></x-x-t-s>
    <d-h-c-d></d-h-c-d>
  </div>
</template>

<script type="text/ecmascript-6">
  import JZKP from './JZKP'
  import XXTS from './XXTS'
  import DHCD from './DHCD'
  import { Loading } from 'vux'
  import TJJZR from './TJJZR'
  export default{
    name: 'Home',
    components: {
      TJJZR,
      JZKP,
      DHCD,
      XXTS,
      Loading
    },
    data () {
      return {}
    }
  }
</script>

<style lang="less">
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
