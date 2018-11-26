<template>
  <error v-if="isDeviceIdFailure||isLoginFailure"
         @refresh="initLogin"></error>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  import Controller from './Controller';
  import Error from '../../components/Error';

  export default {
    components: {Error},
    name: 'Login',
    data() {
      return {
        appId: 'wxe790a197b8d02b72'
      };
    },
    created() {
      this.initLogin();
    },
    methods: Controller,
    computed: mapState({
      isDeviceIdFailure: state => state.DEVICEID.isFailure,
      isLoginFailure: state => state.GRANT_LOGIN.isFailure
    })
  };
</script>

<style scoped lang="less">

</style>
