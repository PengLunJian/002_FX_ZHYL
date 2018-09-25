<template>
  <div class="FX_ZHYL_HOME">
    <j-z-k-p></j-z-k-p>
    <x-x-t-s></x-x-t-s>
    <d-h-c-d></d-h-c-d>
  </div>
</template>

<script type="text/ecmascript-6">
  import JZKP from './JZKP'
  import XXTS from './XXTS'
  import DHCD from './DHCD'
  import { Loading } from 'vux'
  export default{
    name: 'Home',
    components: {
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
</style>
