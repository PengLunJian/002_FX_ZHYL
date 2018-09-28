<template>
  <div class="FX_ZHYL_KSXX">
    <k-s-m-c></k-s-m-c>
    <p-b-x-x></p-b-x-x>
    <k-s-j-j></k-s-j-j>
  </div>
</template>

<script type="text/ecmascript-6">
  import KSJJ from './KSJJ'
  import KSMC from './KSMC'
  import PBXX from './PBXX'
  export default{
    components: {
      PBXX,
      KSMC,
      KSJJ
    },
    name: '',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_KSXX {
    background-color: @bgColor;
  }
</style>
