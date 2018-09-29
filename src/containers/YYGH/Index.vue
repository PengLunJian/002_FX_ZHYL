<template>
  <div class="FX_ZHYL_YYGH">
    <search></search>
    <f-l-c-d></f-l-c-d>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller'
  import Search from '../../components/Search'
  import FLCD from './FLCD'
  export default{
    components: {
      FLCD,
      Search
    },
    name: 'YYGH',
    data () {
      return {}
    },
    methods: Controller
  }
</script>

<style lang="less">
  .FX_ZHYL_BESPOKE {
    position: relative;
  }
</style>
