<template>
  <div class="FX_ZHYL_JKDA">
    <d-y-m-k></d-y-m-k>
    <d-e-m-k></d-e-m-k>
    <d-s-m-k></d-s-m-k>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller'
  import DYMK from './DYMK'
  import DEMK from './DEMK'
  import DSMK from './DSMK'
  export default{
    components: {
      DSMK,
      DEMK,
      DYMK
    },
    name: 'JKDA',
    data () {
      return {}
    },
    methods: Controller
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_JKDA {
    background-color: @bgColor;
  }
</style>
