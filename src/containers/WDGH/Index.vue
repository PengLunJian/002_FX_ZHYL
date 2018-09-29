<template>
  <div class="FX_ZHYL_WDGH">
    <reg-item></reg-item>
    <reg-item :slotOut="slotOut"></reg-item>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller'
  import RegItem from '../../components/RegItem'
  export default{
    components: {RegItem},
    name: 'WDGH',
    data () {
      return {
        slotOut: 'slot-out'
      }
    },
    methods: Controller
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_WDGH {
    background-color: @bgColor;
  }
</style>
