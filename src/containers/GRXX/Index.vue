<template>
  <div class="FX_ZHYL_GRXX">
    <j-b-x-x></j-b-x-x>
    <z-y-x-x></z-y-x-x>
  </div>
</template>

<script type="text/ecmascript-6">
  import JBXX from './JBXX'
  import ZYXX from './ZYXX'
  export default{
    components: {
      ZYXX,
      JBXX
    },
    name: 'GRXX',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_GRXX {
    background-color: @bgColor;
  }
</style>
