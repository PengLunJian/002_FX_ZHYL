<template>
  <div class="FX_ZHYL_YYXQ">
    <x-q-l-b></x-q-l-b>
    <x-q-l-b></x-q-l-b>
  </div>
</template>

<script type="text/ecmascript-6">
  import XQLB from './XQLB'
  export default{
    components: {XQLB},
    name: 'YYXQ',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_YYXQ {
    background-color: @bgColor;
  }
</style>
