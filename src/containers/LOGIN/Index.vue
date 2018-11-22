<template>
  <div class="login"></div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';

  export default {
    name: 'Login',
    data() {
      return {
        appId: 'wxe790a197b8d02b72'
      };
    },
    created() {
      this.initLogin();
    },
    methods: Controller
  };
</script>

<style scoped lang="less">

</style>
