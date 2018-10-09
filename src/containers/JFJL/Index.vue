<template>
  <div class="FX_ZHYL_JFJL">
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
    name: '',
    data () {
      return {
        tabIndex: 0,
        currentComponent: 'TabContentOne',
        items: [
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
    mounted () {}
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_JFJL {
    background-color: @bgColor;
    .tab-bar {
      margin-bottom: 0.1rem;
    }
  }
</style>
