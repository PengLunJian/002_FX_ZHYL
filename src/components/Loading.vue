<template>
  <div class="loading">
    <inline-loading></inline-loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import {InlineLoading} from 'vux';

  export default {
    components: {InlineLoading},
    name: 'Loading',
    data() {
      return {};
    },
    methods: {}
  };
</script>

<style scoped lang="less">
  @import '../assets/less/variable';

  .loading {
    display: inline-block;
    text-align: center;
    &:before {
      content: '';
      height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
  }
</style>
