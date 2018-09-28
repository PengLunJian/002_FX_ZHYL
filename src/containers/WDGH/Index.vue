<template>
  <div class="FX_ZHYL_WDGH">
    <g-h-m-k></g-h-m-k>
    <g-h-m-k expired="true"></g-h-m-k>
  </div>
</template>

<script type="text/ecmascript-6">
  import GHMK from './GHMK'
  export default{
    components: {GHMK},
    name: 'WDGH',
    data () {
      return {
        expired: true
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_WDGH {
    background-color: @bgColor;
  }
</style>
