<template>
  <div class="FX_ZHYL_YSZY">
    <y-s-x-x></y-s-x-x>
    <p-b-x-x></p-b-x-x>
    <y-s-j-j></y-s-j-j>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';
  import YSXX from './YSXX';
  import PBXX from './PBXX';
  import YSJJ from './YSJJ';

  export default {
    components: {
      YSJJ,
      PBXX,
      YSXX
    },
    name: '',
    data() {
      return {};
    },
    methods: Controller
  };
</script>

<style scoped lang="less">
</style>
