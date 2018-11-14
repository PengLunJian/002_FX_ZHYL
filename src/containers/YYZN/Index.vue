<template>
  <div class="FX_ZHYL_YYZN">
    <t-p-m-k></t-p-m-k>
    <y-y-j-s></y-y-j-s>
    <w-h-l-n></w-h-l-n>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';
  import TPMK from './TPMK';
  import YYJS from './YYJS';
  import WHLN from './WHLN';

  export default {
    components: {
      WHLN,
      YYJS,
      TPMK
    },
    name: 'YYZN',
    data() {
      return {};
    },
    methods: Controller
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_YYZN {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background-color: @bgColor;
  }
</style>
