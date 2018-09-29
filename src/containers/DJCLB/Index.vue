<template>
  <div class="FX_ZHYL_DJCLB">
    <visit-item v-for="(item,index) in items" :key="index"></visit-item>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller'
  import VisitItem from '../../components/VisitItem'
  export default{
    components: {VisitItem},
    name: 'DJCLB',
    data () {
      return {
        items: [
          {}, {}, {}, {}, {}, {}
        ]
      }
    },
    methods: Controller
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_DJCLB {
    background-color: @bgColor;
  }
</style>
