<template>
  <div class="FX_ZHYL_WDYY">
    <sub-item v-for="(item,index) in items" :slotOut="item.slotOut" :key="index"></sub-item>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';
  import SubItem from '../../components/SubItem';

  export default {
    components: {SubItem},
    name: 'WDYY',
    data() {
      return {
        items: []
      };
    },
    methods: Controller,
    mounted() {
      this.ajaxWDYY();
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_WDYY {
    background-color: @bgColor;
  }
</style>
