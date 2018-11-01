<template>
  <div class="FX_ZHYL_JFJL">
    <!--<tab-slider :tabs="tabs" :tabIndex="tabIndex" @tabChange="tabChange">-->
    <!--<keep-alive>-->
    <!--<component :is="currentComponent"></component>-->
    <!--</keep-alive>-->
    <!--</tab-slider>-->
    <tab-bar :tabs="tabs"></tab-bar>
    <tab-content></tab-content>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';
  import TabContentOne from './TabContentOne';
  import TabContentTwo from './TabContentTwo';
  import TabSlider from '../../components/TabSlider';
  import TabBar from '../../components/TabBar';
  import TabContent from './TabContent';

  export default {
    components: {
      TabContent,
      TabBar,
      TabSlider,
      'TabContentOne': TabContentOne,
      'TabContentTwo': TabContentTwo
    },
    name: '',
    data() {
      return {
        tabIndex: 0,
        currentComponent: 'TabContentOne',
        tabs: [
          {
            name: '已支付',
            component: 'TabContentOne'
          },
          {
            name: '未支付',
            component: 'TabContentTwo'
          }
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
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 0.46rem;
    background-color: @bgColor;
  }
</style>
