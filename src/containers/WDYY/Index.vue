<template>
  <div class="FX_ZHYL_WDYY">
    <sub-item></sub-item>
    <sub-item></sub-item>
    <sub-item :slotOut="slotOut"></sub-item>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller'
  import SubItem from '../../components/SubItem'
  export default{
    components: {SubItem},
    name: 'WDYY',
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

  .FX_ZHYL_WDYY {
    background-color: @bgColor;
  }
</style>
