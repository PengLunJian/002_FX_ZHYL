<template>
  <div class="module DHCD">
    <NavItem v-for="(item,index) in items"
             :key="index" :item="item"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import NavItem from '../../components/NavItem.vue';

  export default {
    name: 'DHCD',
    components: {NavItem},
    data() {
      return {
        items: [
          {
            image: require('../../assets/images/nav_icon01@2x.png'),
            title: '预约',
            query: {isPre: '1'},
            path: this.$routes.YYGH.path,
            disabled: false
          },
          {
            image: require('../../assets/images/nav_icon02@2x.png'),
            title: '挂号',
            query: {isPre: '0'},
            path: this.$routes.YYGH.path,
            disabled: false
          },
          {
            image: require('../../assets/images/nav_icon03@2x.png'),
            title: '绑卡',
            path: this.$routes.KPBL.path,
            disabled: false
          },
          {
            image: require('../../assets/images/nav_icon04@2x.png'),
            title: '医院指南',
            path: this.$routes.YYZN.path,
            disabled: false
          },
          {
            image: require('../../assets/images/nav_icon05@2x.png'),
            title: '我的收藏',
            path: '/Nav05',
            disabled: true
          },
          {
            image: require('../../assets/images/nav_icon06@2x.png'),
            title: '智能导航',
            path: '/Nav06',
            disabled: true
          }
        ]
      };
    }
  };
</script>

<style scoped lang="less">

</style>
