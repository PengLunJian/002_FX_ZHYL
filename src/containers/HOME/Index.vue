<template>
  <div class="FX_ZHYL_HOME">
    <t-j-j-z-r v-if="DEFAULT_CARD.HAS_DEFAULT_CARD?false:true"></t-j-j-z-r>
    <j-z-k-p v-if="DEFAULT_CARD.HAS_DEFAULT_CARD?true:false"></j-z-k-p>
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
  import TJJZR from './TJJZR';

  export default {
    name: 'Home',
    components: {
      TJJZR,
      JZKP,
      DHCD,
      XXTS
    },
    created() {
      this.ajaxRequestDeviceId();
      this.ajaxRequestDefaultCard();
    },
    data() {
      return {
        deviceId: '',
        isLogin: false
      };
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
