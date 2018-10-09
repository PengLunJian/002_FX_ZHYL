<template>
  <div class="FX_ZHYL_WDSC">
    <tab-slider :items="items" :tabIndex="tabIndex" @tabChange="tabChange">
      <keep-alive>
        <component :is="currentComponent"></component>
      </keep-alive>
    </tab-slider>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';
  import TabContentOne from './TabContentOne.vue';
  import TabContentTwo from './TabContentTwo.vue';
  import TabSlider from '../../components/TabSlider';
  export default{
    components: {
      TabSlider,
      'TabContentOne': TabContentOne,
      'TabContentTwo': TabContentTwo
    },
    name: 'WDSC',
    data () {
      return {
        tabIndex: 0,
        currentComponent: 'TabContentOne',
        items: [
          {
            name: '医生',
            component: 'TabContentOne'
          },
          {
            name: '科室',
            component: 'TabContentTwo'
          }
        ]
      };
    },
    methods: Controller
  };
</script>

<style scoped lang="less">
  @import '../../assets/less/variable';

  .FX_ZHYL_WDSC {
    background-color: @bgColor;
  }
</style>
