<template>
  <div class="FX_ZHYL_YYXQ">
    <sub-detail></sub-detail>
    <sub-detail></sub-detail>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller'
  import SubDetail from '../../components/SubDetail'
  export default{
    components: {
      SubDetail
    },
    name: 'YYXQ',
    data () {
      return {}
    },
    methods: Controller
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_YYXQ {
    background-color: @bgColor;
  }
</style>
