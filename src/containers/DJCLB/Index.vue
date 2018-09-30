<template>
  <div class="FX_ZHYL_DJCLB">
    <scroller ref="scroller"
              :on-refresh="refresh"
              :on-infinite="infinite">
      <visit-item v-for="(item,index) in items" :key="index"></visit-item>
    </scroller>
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
          {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
        ]
      }
    },
    methods: Controller,
    mounted () {
      this.$refs.scroller.resize()
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_DJCLB {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: @bgColor;
  }
</style>
