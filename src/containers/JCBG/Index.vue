<template>
  <div class="FX_ZHYL_JCBG">
    <j-c-h-z></j-c-h-z>
    <j-c-l-b></j-c-l-b>
    <j-c-l-b></j-c-l-b>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';
  import JCHZ from './JCHZ';
  import JCLB from './JCLB';
  export default{
    components: {
      JCLB,
      JCHZ
    },
    name: 'JCBG',
    data () {
      return {};
    },
    methods: Controller
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_JCBG {
    background-color: @bgColor;
  }
</style>
