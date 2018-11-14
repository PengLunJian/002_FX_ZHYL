<template>
  <div class="FX_ZHYL_JFJL">
    <tab-bar :tabs="tabs" :tabIndex.sync="tabIndex"></tab-bar>
    <tab-content :tabIndex.sync="tabIndex"></tab-content>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';
  import TabBar from '../../components/TabBar';
  import TabContent from './TabContent';

  export default {
    components: {
      TabBar,
      TabContent
    },
    name: 'JFJL',
    data() {
      return {
        tabIndex: 0,
        tabs: [
          {name: '已支付'},
          {name: '未支付'}
        ]
      };
    },
    methods: Controller,
    mounted() {
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_JFJL {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    padding-top: 0.46rem;
    background-color: @bgColor;
  }
</style>
