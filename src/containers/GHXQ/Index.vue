<template>
  <div class="FX_ZHYL_GHXQ">
    <reg-detail></reg-detail>
    <reg-detail></reg-detail>
    <reg-detail></reg-detail>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';
  import RegDetail from '../../components/RegDetail';

  export default {
    components: {RegDetail},
    name: '',
    data() {
      return {};
    },
    methods: Controller
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_GHXQ {
    background-color: @bgColor;
  }
</style>
