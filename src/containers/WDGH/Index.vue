<template>
  <div class="FX_ZHYL_WDGH">
    <d-y-m-k></d-y-m-k>
    <d-y-m-k></d-y-m-k>
    <d-y-m-k expired="true"></d-y-m-k>
    <d-y-m-k expired="true"></d-y-m-k>
    <d-y-m-k expired="true"></d-y-m-k>
  </div>
</template>

<script type="text/ecmascript-6">
  import DYMK from './DYMK'
  export default{
    components: {DYMK},
    name: 'WDGH',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
</style>
