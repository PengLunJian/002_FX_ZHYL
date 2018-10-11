<template>
  <div class="FX_ZHYL_YSLB">
    <y-y-s-j></y-y-s-j>
    <z-z-y-s></z-z-y-s>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';
  import YYSJ from './YYSJ';
  import ZZYS from './YSLB';

  export default {
    components: {
      ZZYS,
      YYSJ
    },
    name: 'YSLB',
    data() {
      return {};
    },
    methods: Controller
  };
</script>

<style scoped lang="less">
  @import '../../assets/less/variable';

  .FX_ZHYL_YSLB {
    background-color: @bgColor;
  }
</style>
