<template>
  <div class="FX_ZHYL_HOME" v-if="isLoading">
    <j-z-k-p></j-z-k-p>
    <x-x-t-s></x-x-t-s>
    <d-h-c-d></d-h-c-d>
  </div>
</template>

<script type="text/ecmascript-6">
  // import mapState from 'vuex';
  import Controller from './Controller';
  import JZKP from './JZKP';
  import XXTS from './XXTS';
  import DHCD from './DHCD';

  export default {
    name: 'Home',
    components: {
      JZKP,
      DHCD,
      XXTS
    },
    data() {
      return {
        deviceId: '',
        isLoading: false
      };
    },
    created() {
      this.$vux.loading.show({
        text: '加载中...'
      });
      this.ajaxRequestAll();
    },
    methods: Controller,
    mounted() {
    },
    computed: {
      DEFAULT_CARD: function () {
        return this.$store.state.DEFAULT_CARD;
      }
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_HOME {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    background-color: @bgColor;
  }
</style>
