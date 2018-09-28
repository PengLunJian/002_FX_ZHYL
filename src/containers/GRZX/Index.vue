<template>
  <div class="FX_ZHYL_GRZX">
    <d-y-b-f></d-y-b-f>
    <d-e-b-f></d-e-b-f>
    <d-s-m-k></d-s-m-k>
  </div>
</template>

<script type="text/ecmascript-6">
  import DYBF from './DYMK'
  import DEBF from './DEMK'
  import DSMK from './DSMK'
  export default{
    components: {
      DSMK,
      DEBF,
      DYBF
    },
    name: '',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_GRZX {
    background-color: @bgColor;
  }
</style>
