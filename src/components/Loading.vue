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
    width: 100%;
    height: 1.75rem;
    text-align: center;
    background-color: @bgColor;
    &:before {
      content: '';
      height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
  }
</style>
