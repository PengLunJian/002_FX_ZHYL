<template>
  <div class="FX_ZHYL_MENU">
    <tab-bar :tabs="tabs" :tabIndex.sync="tabIndex"></tab-bar>
    <menus :tabIndex="tabIndex"></menus>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';
  import Menus from './FLCD';
  import TabBar from '../../components/TabBar';

  export default {
    components: {
      Menus,
      TabBar
    },
    name: 'YYGH',
    created() {
      this.exeSelectDepartment();
    },
    data() {
      return {
        tabIndex: 0,
        tabs: [
          {name: '专家号'},
          {name: '普通号'}
        ]
      };
    },
    methods: Controller
  };
</script>

<style scoped lang="less">
  @import '../../assets/less/variable';

  .FX_ZHYL_MENU {
    height: 100vh;
    padding: 0.56rem 0 0.5rem;
    background-color: @bgColor;
  }
</style>
